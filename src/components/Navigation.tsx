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

const Navigation: React.FC<NavigationProps> = ({ currentPath, groupedSeries }) => {
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
              onMouseEnter={() => preloadPage("/")}
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
                <li>
                  <span className="category-title">Peintures</span>
                  <ul>
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
                  </li>
                )}
              </ul>
            )}
          </li>
          <li>
            <a
              href="/press"
              className={currentPath === "/press" ? "active" : ""}
              onMouseEnter={() => preloadPage("/press")}
            >
              Presse
            </a>
          </li>
          <li>
            <a
              href="/exhibitions"
              className={currentPath === "/exhibitions" ? "active" : ""}
              onMouseEnter={() => preloadPage("/exhibitions")}
            >
              Expos
            </a>
          </li>
          <li>
            <a
              href="/background"
              className={currentPath === "/background" ? "active" : ""}
              onMouseEnter={() => preloadPage("/background")}
            >
              Formation
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={currentPath === "/contact" ? "active" : ""}
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