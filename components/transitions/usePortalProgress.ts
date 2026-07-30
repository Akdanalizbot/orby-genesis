"use client";

import { useEffect } from "react";
import { usePortal } from "./PortalContext";

export default function usePortalProgress() {
  const { progress, setProgress } = usePortal();

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      setProgress((prev) => {
        const next = prev + e.deltaY * 0.0015;
        return Math.max(0, Math.min(1, next));
      });
    };

    window.addEventListener("wheel", onWheel, {
      passive: true,
    });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, [setProgress]);

  return progress;
}