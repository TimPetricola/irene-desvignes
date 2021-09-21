import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { promises as fs } from "fs";
import path from "path";
import { SRLWrapper } from "simple-react-lightbox";
import artworks from "../../artworks.json";

interface Props {
  serie: { slug: string; name: string; images: (number | string)[][] };
}

const Works: NextPage<Props> = ({ serie }) => {
  return (
    <section>
      <div className="works-list"></div>
      <SRLWrapper
        options={{
          settings: { autoplaySpeed: 0, overlayColor: "#587171" },
          buttons: {
            showAutoplayButton: false,
            sowDownloadButton: false,
            showFullscreenButton: false,
            showNextButton: true,
            showPrevButton: true,
            showThumbnailsButton: false,
          },
          caption: { showCaption: false },
          thumbnails: { showThumbnails: false },
        }}
      >
        {serie.images.map((row, index) => (
          <div key={index}>
            {row.map((image) => (
              <a
                href={`/images/works/${serie.slug}/${image}.jpg`}
                key={image}
                className="works-list-thumb"
              >
                <img
                  src={`/images/works/${serie.slug}/thumbs/${image}.jpg`}
                  className="works-list-img"
                />
              </a>
            ))}
          </div>
        ))}
      </SRLWrapper>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), "src/artworks.json");
  const artworks = JSON.parse(await fs.readFile(filePath, "utf8"));

  return {
    paths: artworks.series.map((serie: { slug: string }) => ({
      params: { slug: serie.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const serie = artworks.series.find(
    (serie: { slug: string }) => serie.slug === slug
  );
  return { props: { serie } };
};

export default Works;
