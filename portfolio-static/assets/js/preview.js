(() => {
    "use strict";

    const video = document.getElementById("functionalization-preview");
    const button = document.getElementById("preview-toggle");
    if (!video || !button) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateLabel = () => { button.textContent = video.paused ? "Play preview" : "Pause preview"; };
    const play = () => { video.play().catch(updateLabel); };

    video.controls = false;
    video.muted = true;
    button.hidden = false;
    video.addEventListener("play", updateLabel);
    video.addEventListener("pause", updateLabel);
    video.addEventListener("error", () => {
        button.hidden = true;
        video.controls = true;
    });
    button.addEventListener("click", () => { if (video.paused) play(); else video.pause(); });
    reducedMotion.addEventListener("change", (event) => { if (event.matches) video.pause(); });
    if (!reducedMotion.matches) play();
})();
