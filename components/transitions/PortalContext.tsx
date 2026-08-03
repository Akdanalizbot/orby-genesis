"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type PortalContextType = {
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;

  genesisActive: boolean;
  setGenesisActive: Dispatch<SetStateAction<boolean>>;

  chapterOneActive: boolean;
  setChapterOneActive: Dispatch<SetStateAction<boolean>>;

  resetPortal: () => void;
};

const PortalContext = createContext<PortalContextType | null>(null);

export function PortalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [progress, setProgress] = useState(0);

  const [genesisActive, setGenesisActive] = useState(false);

  const [chapterOneActive, setChapterOneActive] = useState(false);

  const resetPortal = () => {
    setProgress(0);
    setGenesisActive(false);
    setChapterOneActive(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <PortalContext.Provider
      value={{
        progress,
        setProgress,

        genesisActive,
        setGenesisActive,

        chapterOneActive,
        setChapterOneActive,

        resetPortal,
      }}
    >
      {children}
    </PortalContext.Provider>
  );
}

export function usePortal() {
  const context = useContext(PortalContext);

  if (!context) {
    throw new Error(
      "usePortal must be used inside PortalProvider."
    );
  }

  return context;
}