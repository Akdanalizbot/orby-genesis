"use client";

import { useEffect } from "react";
import { usePortal } from "./PortalContext";

export default function usePortalProgress() {
  const { progress, setProgress } = usePortal();

  useEffect(() => {
    let animationFrame: number | null = null;
    let startTime: number | null = null;
    let activated = false;

    // Portal açılma süresi
    const duration = 2000;

    const animatePortal = (time: number) => {
      if (startTime === null) {
        startTime = time;
      }

      const elapsed = time - startTime;

      const rawProgress = Math.min(
        elapsed / duration,
        1
      );

      // Sinematik ease-in-out
      const easedProgress =
        rawProgress < 0.5
          ? 2 * rawProgress * rawProgress
          : 1 -
            Math.pow(-2 * rawProgress + 2, 2) / 2;

      setProgress(easedProgress);

      if (rawProgress < 1) {
        animationFrame =
          requestAnimationFrame(animatePortal);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter") return;

      // Enter'ın varsayılan davranışını engelle
      event.preventDefault();

      // Portal sadece bir kez aktive edilsin
      if (activated) return;

      activated = true;
      startTime = null;

      animationFrame =
        requestAnimationFrame(animatePortal);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        onKeyDown
      );

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [setProgress]);

  return progress;
}