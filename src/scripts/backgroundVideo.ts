const video = document.querySelector<HTMLVideoElement>("[data-background-video]");

if (video) {
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

    const updateVideo = () => {
        if (reducedMotion.matches) video.pause();
        else video.play().catch(() => {});
    };

    updateVideo();
    reducedMotion.addEventListener("change", updateVideo);
}

export {};
