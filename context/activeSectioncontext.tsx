"use client";

import React, { createContext, useContext, useState } from "react";
import { navlinks } from "@/lib/data";

type SectionName = (typeof navlinks)[number]["name"];

type ActiveSectionTypes = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  lastTimeClicked: number;
  setLastTimeClicked: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionTypes | null>(null);

function ActiveSectioncontextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [lastTimeClicked, setLastTimeClicked] = useState(0);

  return (
    <>
      <ActiveSectionContext.Provider
        value={{
          activeSection,
          setActiveSection,
          lastTimeClicked,
          setLastTimeClicked,
        }}
      >
        {children}
      </ActiveSectionContext.Provider>
    </>
  );
}

export default ActiveSectioncontextProvider;

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "use ActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
