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

  return (
    <PortalContext.Provider
      value={{
        progress,
        setProgress,

        genesisActive,
        setGenesisActive,

        chapterOneActive,
        setChapterOneActive,
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