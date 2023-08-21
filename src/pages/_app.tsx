import React, { useEffect, useState } from "react";
import App, { type AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import SimpleReactLightbox from "simple-react-lightbox";
import client from "../../tina/__generated__/client";

import "../styles/application.sass";

const MyApp = ({ Component, pageProps, ...props }: AppProps) => {
  const router = useRouter();

  // @ts-ignore
  const series = props.series;

  const [isSeriesNavOpen, setIsSeriesNavOpen] = useState(
    router.asPath.startsWith("/series")
  );

  useEffect(() => {
    if (!router.asPath.startsWith("/series")) setIsSeriesNavOpen(false);
  }, [router]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Irène Desvignes</title>
      </Head>
      <SimpleReactLightbox>
        <div id="container">
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
                  <Link
                    href="/"
                    className={router.asPath === "/" ? "active" : ""}
                  >
                    Intro
                  </Link>
                </li>
                <li>
                  <Link
                    href="/series"
                    className={
                      router.asPath.startsWith("/series") ? "active" : ""
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setIsSeriesNavOpen(!isSeriesNavOpen);
                    }}
                  >
                    Oeuvres
                  </Link>
                  {isSeriesNavOpen && (
                    <ul>
                      {series.map((serie) => (
                        <li key={serie.slug}>
                          <Link
                            href={`/series/${serie.slug}`}
                            className={`work ${
                              router.asPath === `/series/${serie.slug}`
                                ? "active"
                                : ""
                            }`}
                          >
                            {serie.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <Link
                    href="/press"
                    className={router.asPath === "/press" ? "active" : ""}
                  >
                    Presse
                  </Link>
                </li>
                <li>
                  <Link
                    href="/exhibitions"
                    className={router.asPath === "/exhibitions" ? "active" : ""}
                  >
                    Expos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/background"
                    className={router.asPath === "/background" ? "active" : ""}
                  >
                    Formation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={router.asPath === "/contact" ? "active" : ""}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          <main id="main">
            <Component {...pageProps} />
          </main>
        </div>
      </SimpleReactLightbox>
    </>
  );
};

export default MyApp;

MyApp.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context);

  const { data } = await client.queries.serieConnection({
    sort: "priority",
    last: -1,
  });

  const series = data.serieConnection.edges.map((edge) => ({
    slug: edge.node._sys.filename,
    title: edge.node.title,
  }));

  return { ...ctx, series };
};
