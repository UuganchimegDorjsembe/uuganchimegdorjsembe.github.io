(() => {
  "use strict";

  // Real anchors and fully visible panels provide the no-script version.
  document.querySelectorAll("[data-system-explorer]").forEach((explorer) => {
    const navigation = explorer.querySelector("[data-system-tabs]");
    if (!navigation) return;
    const entries = Array.from(navigation.querySelectorAll("[data-system-tab]"))
      .map((link) => {
        const id = (link.getAttribute("href") || "").replace(/^#/, "");
        const panel = document.getElementById(id);
        return panel && explorer.contains(panel) ? { link, panel } : null;
      })
      .filter(Boolean);
    if (!entries.length) return;

    navigation.setAttribute("role", "tablist");
    const mobile = window.matchMedia("(max-width: 700px)");
    const orientation = () =>
      navigation.setAttribute(
        "aria-orientation",
        mobile.matches ? "horizontal" : "vertical",
      );
    orientation();
    mobile.addEventListener("change", orientation);

    entries.forEach(({ link, panel }) => {
      if (!link.id) link.id = "tab-" + panel.id;
      link.setAttribute("role", "tab");
      link.setAttribute("aria-label", link.textContent.trim());
      link.setAttribute("aria-controls", panel.id);
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", link.id);
      panel.tabIndex = 0;
    });
    const select = (index, focus = false) => {
      entries.forEach(({ link, panel }, current) => {
        const active = current === index;
        link.setAttribute("aria-selected", String(active));
        link.tabIndex = active ? 0 : -1;
        link.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
      if (focus) entries[index].link.focus();
    };
    const selectHash = () => {
      const index = entries.findIndex(
        ({ panel }) => "#" + panel.id === location.hash,
      );
      if (index >= 0) select(index);
      return index;
    };
    entries.forEach(({ link }, index) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        select(index);
        history.replaceState(null, "", link.getAttribute("href"));
      });
      link.addEventListener("keydown", (event) => {
        let next;
        if (["ArrowRight", "ArrowDown"].includes(event.key))
          next = (index + 1) % entries.length;
        if (["ArrowLeft", "ArrowUp"].includes(event.key))
          next = (index + entries.length - 1) % entries.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = entries.length - 1;
        if (next === undefined) return;
        event.preventDefault();
        select(next, true);
        history.replaceState(null, "", entries[next].link.getAttribute("href"));
      });
    });
    window.addEventListener("hashchange", selectHash);
    if (selectHash() < 0) select(0);
    explorer.classList.add("is-enhanced");
  });

  const filters = document.querySelector("[data-project-filters]");
  if (filters) {
    const cards = Array.from(
      document.querySelectorAll("[data-project-category]"),
    );
    const status = document.querySelector("[data-filter-status]");
    filters.hidden = false;
    filters.querySelectorAll("[data-project-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.dataset.projectFilter;
        let visible = 0;
        cards.forEach((card) => {
          card.hidden =
            category !== "all" && card.dataset.projectCategory !== category;
          if (!card.hidden) visible++;
        });
        filters.querySelectorAll("button").forEach((item) => {
          const active = item === button;
          item.setAttribute("aria-pressed", String(active));
          item.classList.toggle("is-active", active);
        });
        if (status)
          status.textContent =
            visible + (visible === 1 ? " project" : " projects");
      });
    });
  }

  const localImage = (value) =>
    typeof value === "string" &&
    /^(\.\/)?assets\/[a-z0-9_./-]+\.(png|jpe?g|webp|gif|avif)$/i.test(value);
  const projects = window.portfolioData?.projects || [];
  document.querySelectorAll("[data-evidence-gallery]").forEach((gallery) => {
    const project = projects.find(
      (item) => item.id === gallery.dataset.evidenceGallery,
    );
    const topic = gallery.dataset.evidenceTopic;
    const images = (
      Array.isArray(project?.evidence) ? project.evidence : []
    ).filter(
      (item) =>
        localImage(item.src) &&
        typeof item.alt === "string" &&
        item.alt.trim() &&
        (!topic || (Array.isArray(item.topics) && item.topics.includes(topic))),
    );
    if (!images.length) return;
    gallery.setAttribute("role", "group");
    const heading = gallery.closest("[data-system-panel]")?.querySelector("h3");
    if (heading)
      gallery.setAttribute(
        "aria-label",
        heading.textContent.trim() + " screenshots",
      );

    let current = 0;
    let failed = false;
    const figure = document.createElement("figure");
    figure.className = "evidence-frame";
    const zoom = document.createElement("a");
    zoom.className = "evidence-image-button";
    zoom.target = "_blank";
    zoom.rel = "noopener noreferrer";
    const image = document.createElement("img");
    image.decoding = "async";
    image.loading = "lazy";
    image.width = 1600;
    image.height = 900;
    zoom.append(image);
    const unavailable = document.createElement("p");
    unavailable.className = "evidence-unavailable";
    unavailable.textContent =
      "This image is unavailable. Choose another image.";
    unavailable.hidden = true;
    const caption = document.createElement("figcaption");
    caption.className = "gallery-caption";
    figure.append(zoom, unavailable, caption);

    const controls = document.createElement("div");
    controls.className = "gallery-controls";
    const status = document.createElement("span");
    status.className = "gallery-status";
    status.setAttribute("role", "status");
    const steps = document.createElement("div");
    steps.className = "gallery-steps";
    steps.hidden = images.length < 2;
    const previous = document.createElement("button");
    previous.type = "button";
    previous.className = "gallery-control";
    previous.textContent = "← Previous";
    previous.setAttribute("aria-label", "Previous screenshot");
    const next = document.createElement("button");
    next.type = "button";
    next.className = "gallery-control";
    next.textContent = "Next →";
    next.setAttribute("aria-label", "Next screenshot");
    previous.disabled = next.disabled = images.length < 2;
    steps.append(previous, next);
    controls.append(status, steps);

    const thumbnails = document.createElement("div");
    thumbnails.className = "gallery-thumbnails";
    thumbnails.setAttribute("role", "group");
    thumbnails.setAttribute("aria-label", "Choose a screenshot");
    const thumbnailButtons = images.map((item, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute(
        "aria-label",
        "Show screenshot " + (index + 1) + ": " + item.alt,
      );
      const thumbnail = document.createElement("img");
      thumbnail.src = localImage(item.thumbnail) ? item.thumbnail : item.src;
      thumbnail.alt = "";
      thumbnail.width = 96;
      thumbnail.height = 60;
      thumbnail.loading = "lazy";
      thumbnail.addEventListener(
        "error",
        () => {
          thumbnail.hidden = true;
        },
        { once: true },
      );
      button.append(thumbnail);
      button.addEventListener("click", () => show(index));
      thumbnails.append(button);
      return button;
    });

    const dialog = document.createElement("dialog");
    dialog.className = "image-dialog";
    dialog.setAttribute("aria-label", "Enlarged project screenshot");
    const dialogHeader = document.createElement("div");
    dialogHeader.className = "image-dialog-header";
    const dialogStatus = document.createElement("span");
    dialogStatus.setAttribute("role", "status");
    const close = document.createElement("button");
    close.type = "button";
    close.className = "gallery-control";
    close.textContent = "Close ×";
    close.setAttribute("aria-label", "Close enlarged screenshot");
    const enlarged = document.createElement("img");
    const enlargedUnavailable = document.createElement("p");
    enlargedUnavailable.className = "evidence-unavailable";
    enlargedUnavailable.textContent =
      "This image is unavailable. Use the arrow keys to choose another image.";
    enlargedUnavailable.hidden = true;
    enlarged.addEventListener("error", () => {
      enlarged.hidden = true;
      enlargedUnavailable.hidden = false;
      dialogStatus.textContent = "Image " + (current + 1) + " is unavailable";
    });
    const enlargedCaption = document.createElement("p");
    enlargedCaption.className = "gallery-caption";
    const dialogControls = document.createElement("div");
    dialogControls.className = "gallery-controls";
    const fullSizeLink = document.createElement("a");
    fullSizeLink.className = "text-link";
    fullSizeLink.textContent = "Open full-size image ";
    const fullSizeArrow = document.createElement("span");
    fullSizeArrow.className = "link-arrow";
    fullSizeArrow.setAttribute("aria-hidden", "true");
    fullSizeLink.append(fullSizeArrow);
    fullSizeLink.target = "_blank";
    fullSizeLink.rel = "noopener noreferrer";
    fullSizeLink.setAttribute(
      "aria-label",
      "Open full-size image (opens in a new tab)",
    );
    const dialogSteps = document.createElement("div");
    dialogSteps.className = "gallery-steps";
    dialogSteps.hidden = images.length < 2;
    const dialogPrevious = document.createElement("button");
    dialogPrevious.type = "button";
    dialogPrevious.className = "gallery-control";
    dialogPrevious.textContent = "← Previous";
    dialogPrevious.setAttribute("aria-label", "Previous enlarged screenshot");
    const dialogNext = document.createElement("button");
    dialogNext.type = "button";
    dialogNext.className = "gallery-control";
    dialogNext.textContent = "Next →";
    dialogNext.setAttribute("aria-label", "Next enlarged screenshot");
    dialogPrevious.disabled = dialogNext.disabled = images.length < 2;
    dialogPrevious.addEventListener("click", () => show(current - 1));
    dialogNext.addEventListener("click", () => show(current + 1));
    dialogSteps.append(dialogPrevious, dialogNext);
    dialogControls.append(fullSizeLink, dialogSteps);
    dialogHeader.append(dialogStatus, close);
    dialog.append(
      dialogHeader,
      enlarged,
      enlargedUnavailable,
      enlargedCaption,
      dialogControls,
    );
    document.body.append(dialog);

    const updateDialog = () => {
      enlarged.hidden = false;
      enlargedUnavailable.hidden = true;
      enlarged.src = images[current].src;
      enlarged.alt = images[current].alt;
      fullSizeLink.href = images[current].src;
      enlargedCaption.textContent = images[current].caption || "";
      dialogStatus.textContent =
        "Image " + (current + 1) + " of " + images.length;
    };
    const show = (index) => {
      current = (index + images.length) % images.length;
      failed = false;
      zoom.hidden = false;
      image.hidden = false;
      unavailable.hidden = true;
      zoom.removeAttribute("aria-disabled");
      image.width =
        Number.isInteger(images[current].width) && images[current].width > 0
          ? images[current].width
          : 1600;
      image.height =
        Number.isInteger(images[current].height) && images[current].height > 0
          ? images[current].height
          : 900;
      image.src = images[current].src;
      image.alt = images[current].alt;
      zoom.href = images[current].src;
      zoom.setAttribute(
        "aria-label",
        "Enlarge screenshot " + (current + 1) + ": " + images[current].alt,
      );
      caption.textContent = images[current].caption || "";
      status.textContent = "Image " + (current + 1) + " of " + images.length;
      thumbnailButtons.forEach((button, buttonIndex) =>
        button.setAttribute("aria-pressed", String(buttonIndex === current)),
      );
      if (dialog.open) updateDialog();
    };
    image.addEventListener("error", () => {
      failed = true;
      zoom.hidden = true;
      image.hidden = true;
      unavailable.hidden = false;
      zoom.setAttribute("aria-disabled", "true");
      status.textContent = "Image " + (current + 1) + " is unavailable";
    });
    previous.addEventListener("click", () => show(current - 1));
    next.addEventListener("click", () => show(current + 1));
    let originalOverflow = "";
    zoom.addEventListener("click", (event) => {
      if (failed) {
        event.preventDefault();
        return;
      }
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      if (typeof dialog.showModal !== "function") return;
      event.preventDefault();
      updateDialog();
      originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      dialog.showModal();
    });
    close.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => {
      document.body.style.overflow = originalOverflow;
      if (failed) next.focus();
      else zoom.focus();
    });
    dialog.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key) || images.length < 2)
        return;
      event.preventDefault();
      show(current + (event.key === "ArrowRight" ? 1 : -1));
    });
    gallery.replaceChildren(figure, controls);
    if (images.length > 1) gallery.append(thumbnails);
    show(0);
  });
})();
