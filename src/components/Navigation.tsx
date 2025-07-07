import React, { useState, useEffect } from "react";
import artworks from "../artworks";

interface NavigationProps {
  currentPath: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPath }) => {
  const [isSeriesNavOpen, setIsSeriesNavOpen] = useState(
    currentPath.startsWith("/series")
  );

  useEffect(() => {
    if (!currentPath.startsWith("/series")) setIsSeriesNavOpen(false);
  }, [currentPath]);

  return (
    <aside id="sidebar">
      <h1 id="header">
        <a href="/">
          <span className="firstname">Irène</span>{" "}
          <span className="lastname">Desvignes</span>
        </a>
      </h1>

      <nav id="navigation">
        <ul className="main">
          <li>
            <a
              href="/"
              className={currentPath === "/" ? "active" : ""}
            >
              Intro
            </a>
          </li>
          <li>
            <a
              href="/series"
              className={currentPath.startsWith("/series") ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setIsSeriesNavOpen(!isSeriesNavOpen);
              }}
            >
              Oeuvres
            </a>
            {isSeriesNavOpen && (
              <ul>
                {artworks.series.map((serie) => (
                  <li key={serie.slug}>
                    <a
                      href={`/series/${serie.slug}`}
                      className={`work ${
                        currentPath === `/series/${serie.slug}`
                          ? "active"
                          : ""
                      }`}
                    >
                      {serie.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <a
              href="/press"
              className={currentPath === "/press" ? "active" : ""}
            >
              Presse
            </a>
          </li>
          <li>
            <a
              href="/exhibitions"
              className={currentPath === "/exhibitions" ? "active" : ""}
            >
              Expos
            </a>
          </li>
          <li>
            <a
              href="/background"
              className={currentPath === "/background" ? "active" : ""}
            >
              Formation
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={currentPath === "/contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navigation;