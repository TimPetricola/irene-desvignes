import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { promises as fs } from "fs";
import path from "path";
import artworks from "../../artworks.json";

interface Props {
  serie: { slug: string; name: string; images: (number | string)[][] };
}

const Works: NextPage<Props> = ({ serie }) => {
  return (
    <section>
      <div className="works-list">
        {serie.images.map((row, index) => (
          <div key={index}>
            {row.map((image) => (
              <a href="#">
                <img src={`/images/works/${serie.slug}/${image}.jpg`} />
              </a>
            ))}
          </div>
        ))}
      </div>
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
