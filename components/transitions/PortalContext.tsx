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
};

const PortalContext = createContext<PortalContextType | null>(null);

export function PortalProvider({
  children,
}: {
  children: ReactNode;
}) {
  // Portal scroll progress
  const [progress, setProgress] = useState(0);

  // Genesis yalnızca portal tamamlandığında aktif olacak
  const [genesisActive, setGenesisActive] = useState(false);

  return (
    <PortalContext.Provider
      value={{
        progress,
        setProgress,
        genesisActive,
        setGenesisActive,
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