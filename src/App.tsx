import React, { useState, useEffect } from "react";
import { SiteHeader } from "./components/layout/SiteHeader";
import { SiteFooter } from "./components/layout/SiteFooter";
import { LandingView } from "./components/views/LandingView";
import { OverviewView } from "./components/views/OverviewView";
import { ChapterView } from "./components/views/ChapterView";
import { SourcesView } from "./components/views/SourcesView";
import { PresentationMode } from "./components/presentation/PresentationMode";
import { getChapterByNumber } from "./content";

export default function App() {
  const getInitialPath = () => {
    // Check window.location.pathname first
    const pathname = window.location.pathname;
    if (pathname && pathname !== "/") {
      return pathname;
    }
    // Check hash if present
    if (window.location.hash) {
      const hashPath = window.location.hash.replace(/^#/, "");
      if (hashPath.startsWith("/")) return hashPath;
    }
    return "/";
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  // Sync with browser history popstate
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path && path !== "/") {
        setCurrentPath(path);
      } else if (window.location.hash) {
        const hashPath = window.location.hash.replace(/^#/, "");
        if (hashPath.startsWith("/")) {
          setCurrentPath(hashPath);
          return;
        }
      } else {
        setCurrentPath("/");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (path === currentPath) return;
    try {
      window.history.pushState({}, "", path);
    } catch {
      window.location.hash = path;
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Route Parser
  const renderCurrentView = () => {
    // 1. Presentation Mode
    if (currentPath === "/presentation") {
      return <PresentationMode onExit={() => navigateTo("/overview")} />;
    }

    // 2. Overview
    if (currentPath === "/overview") {
      return (
        <div className="flex flex-col min-h-screen">
          <SiteHeader currentPath={currentPath} onNavigate={navigateTo} />
          <div className="flex-1">
            <OverviewView onNavigate={navigateTo} />
          </div>
          <SiteFooter onNavigate={navigateTo} />
        </div>
      );
    }

    // 3. Sources
    if (currentPath === "/sources") {
      return (
        <div className="flex flex-col min-h-screen">
          <SiteHeader currentPath={currentPath} onNavigate={navigateTo} />
          <div className="flex-1">
            <SourcesView onNavigate={navigateTo} />
          </div>
          <SiteFooter onNavigate={navigateTo} />
        </div>
      );
    }

    // 4. Chapters (/chapter/1 to /chapter/7)
    const chapterMatch = currentPath.match(/^\/chapter\/([1-7])$/);
    if (chapterMatch) {
      const chapterNum = parseInt(chapterMatch[1], 10);
      const chapterData = getChapterByNumber(chapterNum);
      if (chapterData) {
        return (
          <div className="flex flex-col min-h-screen">
            <SiteHeader currentPath={currentPath} onNavigate={navigateTo} />
            <div className="flex-1">
              <ChapterView chapter={chapterData} onNavigate={navigateTo} />
            </div>
            <SiteFooter onNavigate={navigateTo} />
          </div>
        );
      }
    }

    // 5. Default: Landing page
    return (
      <div className="flex flex-col min-h-screen">
        <SiteHeader currentPath="/" onNavigate={navigateTo} />
        <div className="flex-1">
          <LandingView onNavigate={navigateTo} />
        </div>
        <SiteFooter onNavigate={navigateTo} />
      </div>
    );
  };

  return <>{renderCurrentView()}</>;
}
