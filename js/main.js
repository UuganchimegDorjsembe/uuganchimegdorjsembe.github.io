(() => {
  "use strict";

  const data = window.portfolioData || {};
  const profile = data.profile || {};
  const setText = (element, value) => {
    if (element && typeof value === "string") element.textContent = value;
  };
  const httpsUrl = (value) => {
    try {
      const url = new URL(value);
      return url.protocol === "https:" ? url.href : null;
    } catch {
      return null;
    }
  };
  const localAsset = (value) =>
    typeof value === "string" && /^(\.\/)?assets\/[a-z0-9_./-]+$/i.test(value);
  const makeLink = (label, href, newTab = false) => {
    const anchor = document.createElement("a");
    anchor.href = href;
    if (newTab) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.setAttribute("aria-label", label + " (opens in a new tab)");
    }
    anchor.textContent = label + " ";
    const arrow = document.createElement("span");
    arrow.className = "link-arrow";
    arrow.setAttribute("aria-hidden", "true");
    anchor.append(arrow);
    return anchor;
  };
  document.querySelectorAll("[data-project-page]").forEach((anchor) => {
    const project = (data.projects || []).find(
      (item) => item.id === anchor.dataset.projectPage,
    );
    if (project && /^\.\/[a-z0-9-]+\.html$/i.test(project.page || "")) {
      anchor.setAttribute("href", project.page);
    }
  });
  const fillList = (container, items, tag) => {
    if (!container || !Array.isArray(items)) return;
    container.replaceChildren(
      ...items
        .filter((item) => typeof item === "string")
        .map((item) => {
          const element = document.createElement(tag);
          element.textContent = item;
          return element;
        }),
    );
  };

  if (typeof profile.name === "string" && profile.name.trim()) {
    document
      .querySelectorAll("[data-profile-name]")
      .forEach((element) => setText(element, profile.name));
  }
  document
    .querySelectorAll("[data-profile-full-name]")
    .forEach((element) => setText(element, profile.fullName));
  if (typeof profile.alias === "string") {
    document.querySelectorAll("[data-profile-alias]").forEach((element) => {
      element.closest(".profile-alias").hidden = !profile.alias.trim();
      setText(element, profile.alias);
    });
  }
  if (Number.isInteger(profile.age) && profile.age >= 0) {
    document.querySelectorAll("[data-profile-age]").forEach((element) => {
      element.textContent = String(profile.age);
    });
  }
  // Preview links stay on cv.html; only its PDF controls use the file path.
  if (localAsset(profile.cv)) {
    document.querySelectorAll("[data-cv-file-link]").forEach((anchor) => {
      anchor.setAttribute("href", profile.cv);
    });
  }
  const emailValid =
    typeof profile.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email);
  document.querySelectorAll("[data-email-link]").forEach((anchor) => {
    anchor.hidden = !emailValid;
    if (!emailValid) return;
    anchor.href = "mailto:" + profile.email;
    const label = anchor.dataset.emailLabel || profile.email;
    anchor.replaceChildren(...makeLink(label, anchor.href).childNodes);
  });

  if (Array.isArray(data.projects))
    data.projects.forEach((project) => {
      const article = Array.from(
        document.querySelectorAll("[data-project]"),
      ).find((element) => element.dataset.project === project.id);
      if (!article) return;
      const title = article.querySelector("[data-project-title]");
      if (title) setText(title.querySelector("a") || title, project.title);
      setText(article.querySelector("[data-project-summary]"), project.summary);
      setText(article.querySelector(".work-description"), project.homeSummary);
      fillList(
        article.querySelector("[data-project-technologies]"),
        project.technologies,
        "span",
      );
      if (Array.isArray(project.details))
        project.details.forEach((detail, index) => {
          const paragraph = article.querySelector(`[data-detail="${index}"]`);
          setText(paragraph, detail.text);
          if (paragraph)
            setText(
              paragraph.parentElement.querySelector("h4"),
              detail.heading,
            );
        });
      const visual = article.querySelector("[data-project-visual]");
      if (visual && localAsset(project.screenshot)) {
        const existing = visual.querySelector("img");
        if (existing && existing.getAttribute("src") === project.screenshot) {
          if (project.screenshotAlt) existing.alt = project.screenshotAlt;
        } else {
          const image = document.createElement("img");
          image.src = project.screenshot;
          image.alt = project.screenshotAlt || project.title;
          image.width = 512;
          image.height = 512;
          image.loading = "lazy";
          image.decoding = "async";
          image.addEventListener(
            "error",
            () => {
              const note = document.createElement("span");
              note.className = "asset-placeholder";
              note.textContent = "Project image unavailable";
              visual.replaceChildren(note);
            },
            { once: true },
          );
          visual.replaceChildren(image);
        }
      }
      const links = article.querySelector("[data-project-links]");
      if (links) {
        const url = httpsUrl(project.referenceUrl);
        links.hidden = !url;
        links.replaceChildren(
          ...(url
            ? [
                makeLink(
                  project.referenceLabel || "Project reference",
                  url,
                  true,
                ),
              ]
            : []),
        );
      }
    });

  if (Array.isArray(data.skills))
    data.skills.forEach((group, index) => {
      const element = document.querySelector(`[data-skill-group="${index}"]`);
      if (!element) return;
      setText(element.querySelector("h3"), group.title);
      fillList(element.querySelector("ul"), group.items, "li");
    });
  if (Array.isArray(data.languages))
    document.querySelectorAll(".language-grid").forEach((grid) => {
      grid.replaceChildren(
        ...data.languages
          .filter((language) => localAsset(language.icon))
          .map((language) => {
            const item = document.createElement("div");
            item.className = "language-item";
            const icon = document.createElement("img");
            icon.src = language.icon;
            icon.alt = "";
            icon.width = 32;
            icon.height = 32;
            const label = document.createElement("span");
            label.textContent = language.label;
            item.append(icon, label);
            return item;
          }),
      );
    });
  const learning = document.querySelector("[data-learning]");
  if (learning && Array.isArray(data.learning)) {
    const items = data.learning.filter(
      (item) => typeof item === "string" && item.trim(),
    );
    learning.hidden = items.length === 0;
    fillList(learning.querySelector("ul"), items, "li");
  }
  document.querySelectorAll("[data-contact-links]").forEach((container) => {
    const items = [];
    const addContact = (kind, value) => {
      const row = document.createElement("div");
      row.className = "contact-item";
      const label = document.createElement("span");
      label.className = "contact-kind";
      label.dataset.contactMethod = kind.toLowerCase();
      label.textContent = kind;
      row.append(label, value);
      items.push(row);
    };
    if (emailValid)
      addContact("Email", makeLink(profile.email, "mailto:" + profile.email));
    if (typeof profile.discord === "string" && profile.discord.trim()) {
      const username = profile.discord.trim().replace(/^@/, "");
      const discord = document.createElement("div");
      discord.className = "discord-contact";
      const handle = document.createElement("span");
      handle.className = "contact-value";
      handle.textContent = "@" + username;
      discord.append(handle);
      if (navigator.clipboard && window.isSecureContext) {
        const copy = document.createElement("button");
        copy.type = "button";
        copy.className = "copy-handle js-only";
        copy.dataset.copyDiscord = username;
        copy.setAttribute("aria-label", "Copy Discord username " + username);
        copy.textContent = "Copy";
        discord.append(copy);
      }
      addContact("Discord", discord);
    }
    if (typeof profile.phone === "string") {
      const number = profile.phone.replace(/[^\d+]/g, "");
      if (/^\+?\d{7,15}$/.test(number))
        addContact("Phone", makeLink(profile.phone, "tel:" + number));
    }
    const zangia = httpsUrl(profile.zangia);
    if (zangia) {
      const url = new URL(zangia);
      if (url.pathname.replace(/\/$/, "") !== "/my-cv" || url.search)
        addContact("Zangia", makeLink("View profile", zangia));
    }
    const github = httpsUrl(profile.github);
    if (github) addContact("GitHub", makeLink("View profile", github));
    if (Array.isArray(profile.profiles))
      profile.profiles.forEach((item) => {
        const url = httpsUrl(item.url);
        if (url && item.label)
          addContact(item.label, makeLink("View profile", url));
      });
    const feedback = document.createElement("span");
    feedback.className = "contact-feedback";
    feedback.setAttribute("role", "status");
    feedback.setAttribute("aria-live", "polite");
    container.classList.add("contact-list");
    container.replaceChildren(...items, feedback);
    container.hidden = items.length === 0;
  });
  document.querySelectorAll("[data-copy-discord]").forEach((button) => {
    button.addEventListener("click", async () => {
      const status = button
        .closest("[data-contact-links]")
        .querySelector(".contact-feedback");
      button.disabled = true;
      try {
        await navigator.clipboard.writeText(button.dataset.copyDiscord);
        button.textContent = "Copied";
        status.textContent = "Discord username copied.";
      } catch {
        status.textContent =
          "Could not copy. Select the Discord username to copy it manually.";
      } finally {
        button.disabled = false;
      }
    });
  });

  const menu = document.querySelector(".mobile-menu");
  if (menu) {
    menu.querySelectorAll("a").forEach((anchor) =>
      anchor.addEventListener("click", () => {
        menu.open = false;
      }),
    );
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.open) {
        menu.open = false;
        menu.querySelector("summary").focus();
      }
    });
    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target)) menu.open = false;
    });
  }

  document
    .querySelectorAll("[data-print]")
    .forEach((button) =>
      button.addEventListener("click", () => window.print()),
    );
  document.documentElement.classList.add("enhanced");
})();
