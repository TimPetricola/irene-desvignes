import React, { useState, useEffect } from "react";

const preloadPage = (url: string) => {
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = url;
  document.head.appendChild(link);
};

interface NavigationProps {
  currentPath: string;
  groupedSeries: {
    peintures: Array<{
      slug: string;
      name: string;
      category: string;
    }>;
    dessins: Array<{
      slug: string;
      name: string;
      category: string;
    }>;
  };
}

<<<<<<< HEAD
const Navigation: React.FC<NavigationProps> = ({
  currentPath,
  groupedSeries,
}) => {
  // Helper function to check if a path matches (handles trailing slashes)
  const isPathActive = (expectedPath: string) => {
    const normalizedCurrent = currentPath.replace(/\/$/, "") || "/";
    const normalizedExpected = expectedPath.replace(/\/$/, "") || "/";
    return normalizedCurrent === normalizedExpected;
  };

  const [isSeriesNavOpen, setIsSeriesNavOpen] = useState(
    currentPath.startsWith("/series")
=======
const Navigation: React.FC<NavigationProps> = ({ currentPath, groupedSeries }) => {
  const [isPeinturesNavOpen, setIsPeinturesNavOpen] = useState(
    currentPath.startsWith("/series") && 
    groupedSeries.peintures.some(s => currentPath === `/series/${s.slug}`)
  );
  const [isDessinsNavOpen, setIsDessinsNavOpen] = useState(
    currentPath.startsWith("/series") && 
    groupedSeries.dessins.some(s => currentPath === `/series/${s.slug}`)
>>>>>>> 85a6444 (more)
  );

  useEffect(() => {
    if (!currentPath.startsWith("/series")) {
      setIsPeinturesNavOpen(false);
      setIsDessinsNavOpen(false);
    }
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
              className={isPathActive("/") ? "active" : ""}
              onMouseEnter={() => preloadPage("/")}
            >
              Intro
            </a>
          </li>
          <li>
            <a
              href="/series"
              className={isPeinturesNavOpen ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setIsPeinturesNavOpen(!isPeinturesNavOpen);
              }}
            >
              Peintures
            </a>
            {isPeinturesNavOpen && (
              <ul>
<<<<<<< HEAD
                <li>
                  <span className="category-title">Peintures</span>
                  <ul>
                    {groupedSeries.peintures.map((serie) => (
                      <li key={serie.slug}>
                        <a
                          href={`/series/${serie.slug}`}
                          className={`work ${
                            isPathActive(`/series/${serie.slug}`)
                              ? "active"
                              : ""
                          }`}
                          onMouseEnter={() =>
                            preloadPage(`/series/${serie.slug}`)
                          }
                        >
                          {serie.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {groupedSeries.dessins.length > 0 && (
                  <li>
                    <span className="category-title">Dessins</span>
                    <ul>
                      {groupedSeries.dessins.map((serie) => (
                        <li key={serie.slug}>
                          <a
                            href={`/series/${serie.slug}`}
                            className={`work ${
                              isPathActive(`/series/${serie.slug}`)
                                ? "active"
                                : ""
                            }`}
                            onMouseEnter={() =>
                              preloadPage(`/series/${serie.slug}`)
                            }
                          >
                            {serie.name}
                          </a>
                        </li>
                      ))}
                    </ul>
=======
                {groupedSeries.peintures.map((serie) => (
                  <li key={serie.slug}>
                    <a
                      href={`/series/${serie.slug}`}
                      className={`work ${
                        currentPath === `/series/${serie.slug}`
                          ? "active"
                          : ""
                      }`}
                      onMouseEnter={() => preloadPage(`/series/${serie.slug}`)}
                    >
                      {serie.name}
                    </a>
>>>>>>> 85a6444 (more)
                  </li>
                ))}
              </ul>
            )}
          </li>
          {groupedSeries.dessins.length > 0 && (
            <li>
              <a
                href="/series"
                className={isDessinsNavOpen ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setIsDessinsNavOpen(!isDessinsNavOpen);
                }}
              >
                Dessins
              </a>
              {isDessinsNavOpen && (
                <ul>
                  {groupedSeries.dessins.map((serie) => (
                    <li key={serie.slug}>
                      <a
                        href={`/series/${serie.slug}`}
                        className={`work ${
                          currentPath === `/series/${serie.slug}`
                            ? "active"
                            : ""
                        }`}
                        onMouseEnter={() => preloadPage(`/series/${serie.slug}`)}
                      >
                        {serie.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )}
          <li>
            <a
              href="/press"
              className={isPathActive("/press") ? "active" : ""}
              onMouseEnter={() => preloadPage("/press")}
            >
              Presse
            </a>
          </li>
          <li>
            <a
              href="/exhibitions"
              className={isPathActive("/exhibitions") ? "active" : ""}
              onMouseEnter={() => preloadPage("/exhibitions")}
            >
              Expos
            </a>
          </li>
          <li>
            <a
              href="/background"
              className={isPathActive("/background") ? "active" : ""}
              onMouseEnter={() => preloadPage("/background")}
            >
              Formation
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={isPathActive("/contact") ? "active" : ""}
              onMouseEnter={() => preloadPage("/contact")}
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
