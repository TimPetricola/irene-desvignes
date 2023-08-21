import { useTina } from "tinacms/dist/react";
import { SRLWrapper } from "simple-react-lightbox";
import client from "../../../tina/__generated__/client";

const Works = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const rows = Array.from(
    { length: 15 },
    (_, index) => data.serie[`images${index + 1}`]
  ).filter((row) => Array.isArray(row) && row.length > 0);

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
        {rows.map((row, index) => (
          <div key={index}>
            {row.map((image) => (
              <a href={image} key={image} className="works-list-thumb">
                <img src={image} className="works-list-img" />
              </a>
            ))}
          </div>
        ))}
      </SRLWrapper>
    </section>
  );
};

export const getStaticPaths = async () => {
  const { data } = await client.queries.serieConnection();
  const paths = data.serieConnection.edges.map((page) => ({
    params: { slug: page.node._sys.filename },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const { data, query, variables } = await client.queries.serie({
    relativePath: `${params.slug}.json`,
  });
  return {
    props: {
      variables: variables,
      data: data,
      query: query,
    },
  };
};

export default Works;
