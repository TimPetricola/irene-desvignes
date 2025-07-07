type Exhibition = {
  month: string;
  year: number;
  location: string;
};

const EXHIBITIONS: { INDIVIDUAL: Exhibition[]; GROUP: Exhibition[] } = {
  INDIVIDUAL: [
    {
      month: "Mars",
      year: 2025,
      location: "CONDITION DES SOIES / Bibliothèque 1er. Lyon",
    },
    { month: "Juin", year: 2023, location: "HANGAR 717. Villefranche-Gleizé" },
    { month: "Sept", year: 2021, location: "Galerie B+. Lyon" },
    {
      month: "Juil",
      year: 2019,
      location: "ETAC- Eglise St Valérien/ Tournus",
    },
    { month: "Avril", year: 2015, location: "POLARIS. Corbas" },
    {
      month: "Avril",
      year: 2011,
      location: "Galerie IL TRITTICO. Rome",
    },
    {
      month: "Déc",
      year: 2010,
      location: "Galerie SONGE D’ICARE. Marseille",
    },
    {
      month: "Mai",
      year: 2007,
      location: "Casino- Hauteville-Lompnes/Centre d’art contemporain. LACOUX",
    },
    {
      month: "Sept",
      year: 2006,
      location: "Nouveau PALAIS DE JUSTICE. Lyon",
    },
    {
      month: "Juin",
      year: 2005,
      location: "Galerie ART DEALER. St Etienne",
    },
    { month: "Sept", year: 2004, location: "SHOW ROOM. Lyon" },
    {
      month: "Nov",
      year: 2001,
      location: "Cité  SEMBAT-SEGUIN. Vénissieux",
    },
    {
      month: "Avril",
      year: 1998,
      location: "ESPACE ARTS PLASTIQUES. Vénissieux",
    },
    {
      month: "Mars",
      year: 1993,
      location: "Œuvres récentes dans l’atelier. Lyon",
    },
    {
      month: "Juin",
      year: 1992,
      location: "Galerie PLAN DE TRAVAIL. Lyon",
    },
  ],
  GROUP: [
    {
      month: "Oct",
      year: 2025,
      location: "MUSEE Paul DINI. Villefranche sur Saône",
    },
    {
      month: "Oct",
      year: 2023,
      location: "LYON ART PAPER - Salon de dessin contemporain",
    },
    { month: "Juin", year: 2023, location: "18 Le Bourg. Aigueperse" },
    { month: "Avril", year: 2008, location: "IDS. Paris" },
    {
      month: "Avril",
      year: 2008,
      location: "Hôpital Bretonneau. Paris",
    },
    { month: "Avril", year: 2007, location: "Salon de MONTROUGE" },
    {
      month: "Juill",
      year: 2006,
      location: "WARTSAAL 3. « Passage ». Bern",
    },
    { month: "Avril", year: 2006, location: "Salon de MONTROUGE" },
    {
      month: "Juill",
      year: 2005,
      location: "MAC-Pérouges. « le souffle »",
    },
    { month: "Juill", year: 2005, location: "MAPRA. Lyon" },
    { month: "Janv", year: 2005, location: "Galerie SWAP. Lyon" },
    {
      month: "Sept",
      year: 2003,
      location: "MAC-Pérouges. « la figure de l’ange »",
    },
    { month: "Janv", year: 1994, location: "L’EMBARCADERE. Lyon " },
  ],
};

const Table: React.FC<{ exhibitions: Exhibition[] }> = ({ exhibitions }) => (
  <table className="expos">
    {exhibitions.map((expo) => (
      <tr key={JSON.stringify(expo)}>
        <td>{expo.month}</td>
        <td>{expo.year}</td>
        <td style={{ width: "100%", paddingLeft: 20 }}>{expo.location}</td>
      </tr>
    ))}
  </table>
);

const Exhibitions = () => {
  return (
    <section>
      <h3>Expos personnelles</h3>
      <Table exhibitions={EXHIBITIONS.INDIVIDUAL} />

      <h3>Expos collectives</h3>
      <Table exhibitions={EXHIBITIONS.GROUP} />
    </section>
  );
};

export default Exhibitions;
