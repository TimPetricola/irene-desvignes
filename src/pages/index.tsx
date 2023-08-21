import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../tina/__generated__/client";

const Home = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <section id="home">
      <div className="center">
        <TinaMarkdown content={data.intro.body} />
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.intro({
    relativePath: "intro.md",
  });

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
    },
  };
};

export default Home;
