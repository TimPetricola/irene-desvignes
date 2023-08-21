import { tinaField, useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";

const Table: React.FC<{ exhibitions: any[] }> = ({ exhibitions }) => (
  <table className="expos">
    {exhibitions.map((expo) => (
      <tr key={JSON.stringify(expo)} data-tina-field={tinaField(expo)}>
        <td data-tina-field={tinaField(expo, "month")}>{expo.month}</td>
        <td data-tina-field={tinaField(expo, "year")}>{expo.year}</td>
        <td
          style={{ width: "100%", paddingLeft: 20 }}
          data-tina-field={tinaField(expo, "name")}
        >
          {expo.name}
        </td>
      </tr>
    ))}
  </table>
);

const Exhibitions = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <section>
      <h3>Expos personnelles</h3>
      <Table exhibitions={data.exhibitions.individual} />

      <h3>Expos collectives</h3>
      <Table exhibitions={data.exhibitions.group} />
    </section>
  );
};

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.exhibitions({
    relativePath: "exhibitions.json",
  });

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
    },
  };
};

export default Exhibitions;
