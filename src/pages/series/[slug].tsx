import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { SRLWrapper } from "simple-react-lightbox";
import artworks from "../../artworks";

interface Props {
  serie: {
    slug: string;
    name: string;
    optimize?: boolean;
    images: (number | string)[][];
  };
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
