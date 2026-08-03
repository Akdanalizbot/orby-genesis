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
  // Portal progress
  const [progress, setProgress] = useState(0);

  // Portal tamamlandığında Genesis aktif olur
  const [genesisActive, setGenesisActive] = useState(false);

  // Genesis içindeki CONTINUE ile Chapter I aktif olur
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