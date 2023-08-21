import { Form, TinaCMS, TinaField, defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

const exhibitionFields: TinaField<false>[] = [
  {
    type: "string",
    name: "name",
    label: "Name",
    isTitle: true,
    required: true,
  },
  {
    type: "string",
    name: "month",
    label: "Mois",
    required: true,
  },
  {
    type: "number",
    name: "year",
    label: "Année",
    required: true,
  },
];

export default defineConfig({
  branch,
  clientId: "3b6d0aa1-1e3f-4f0a-b614-f5cf54dcf739", // Get this from tina.io
  token: "d95ca2bba48d6ef57fb0b17eb299c7ab1afd979c", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "intro",
        label: "Intro",
        path: "content/intro",
        format: "md",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Texte",
            isBody: true,
          },
        ],
        ui: {
          allowedActions: { create: false, delete: false },
          router: async () => {
            return `/`;
          },
        },
      },
      {
        name: "serie",
        label: "Oeuvres",
        path: "content/series",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "number",
            name: "priority",
            label: "Priorité",
            ui: {
              validate: (val) => {
                if (val < 0) return "the number must be positive";
              },
            },
          },
          ...Array.from(
            { length: 15 },
            (_, index) =>
              ({
                type: "image",
                name: `images${index + 1}`,
                label: `Images (bloc ${index + 1})`,
                list: true,
              } as TinaField<false>)
          ),
        ],
        ui: {
          router: async ({ document }) => {
            return `/series/${document._sys.filename}`;
          },
        },
      },
      {
        name: "exhibitions",
        label: "Expositions",
        path: "content/exhibitions",
        format: "json",
        fields: [
          {
            type: "object",
            name: "individual",
            label: "Personnelles",
            list: true,
            fields: exhibitionFields,
            ui: {
              itemProps: (item) => {
                return { label: item?.name };
              },
            },
          },
          {
            type: "object",
            name: "group",
            label: "Collectives",
            list: true,
            fields: exhibitionFields,
            ui: {
              itemProps: (item) => {
                return { label: item?.name };
              },
            },
          },
        ],
        ui: {
          allowedActions: { create: false, delete: false },
          router: async () => {
            return `/exhibitions`;
          },
        },
      },
    ],
  },
});
