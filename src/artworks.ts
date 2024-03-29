export default {
  series: [
    {
      slug: "rouge-a-coeur",
      name: "Rouge À Coeur",
      images: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18],
      ],
    },
    // {
    //   slug: "enfances",
    //   name: "Enfances",
    //   images: [
    //     [1, 2, 3, 4, 5],
    //     [6, 7, 8, 9, 10],
    //     [11, 12, 13, 14],
    //     [15, 16, 17, 18, 19, 20],
    //     [21, 22, 23, 24, 25, 26],
    //   ],
    // },
    {
      slug: "flux-roses",
      name: "Flux Roses",
      images: [
        [1, 2, 3, 4],
        [5],
        [6, 7, 8],
        [9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20, 21],
        [22, 23],
      ],
    },
    {
      slug: "poupees",
      name: "Poupées",
      images: [
        [1, 2, 3],
        [4, 5, 6, 7, 8],
        [9, 10, 11, 12, 13, 14, 15, 16],
        [
          17,
          // 18,
          19,
          //  20,
          21, 22,
          // 23,
          24,
        ],
        [25, 26, 27, 28, 29, 30, 31, 32],
        // [33, 34, 35, 36],
      ],
    },
    {
      slug: "iles",
      name: "Îles",
      images: [
        ["lago-verde-1", "lago-verde-3", "lago-verde-2", "lago-verde-4"],
        ["isola-lobos-1", "isola-lobos-2"],
        [
          "paysages-lanzarote-1",
          "paysages-lanzarote-2",
          "paysages-lanzarote-3",
          "paysages-lanzarote-4",
        ],
        [
          "paysages-lanzarote-5",
          "paysages-lanzarote-6",
          "paysages-lanzarote-7",
          "paysages-lanzarote-8",
        ],
        [
          "paysages-lanzarote-9",
          "paysages-lanzarote-10",
          "paysages-lanzarote-11",
        ],
        ["ilots-zen-1", "ilots-zen-2", "ilots-zen-3", "ilots-zen-4"],
        ["ilots-zen-5", "ilots-zen-6"],
        // [
        //   "cartographie-sejours-1",
        //   "cartographie-sejours-2",
        //   "cartographie-sejours-3",
        //   "cartographie-sejours-4",
        // ],
        // [
        //   "cartographie-sejours-5",
        //   "cartographie-sejours-6",
        //   "cartographie-sejours-7",
        //   "cartographie-sejours-8",
        // ],
        // [
        //   "cartographie-sejours-9",
        //   "cartographie-sejours-10",
        //   "cartographie-sejours-11",
        //   "cartographie-sejours-12",
        // ],
        [
          "petits-volcans-apprivoises-1",
          "petits-volcans-apprivoises-2",
          "petits-volcans-apprivoises-3",
          "petits-volcans-apprivoises-4",
        ],
        [
          "petits-volcans-apprivoises-5",
          "petits-volcans-apprivoises-6",
          "petits-volcans-apprivoises-7",
        ],
      ],
    },
    {
      slug: "jardins",
      name: "Jardins",
      images: [
        [21, 10, 11, 7],
        [20, 9, 6],
        [15, 16, 17, 18],
        [
          // 12, 13, 14,
          5,
        ],
        [1, 3, 2],
      ],
    },
    {
      slug: "autoportraits",
      name: "Autoportraits",
      images: [[1, 2, 3]],
    },
    {
      slug: "eau",
      name: "Le bord de l'eau",
      images: [
        [1, 2, 3, 4],
        [5, 6, 7],
      ],
    },
    {
      slug: "dialogues",
      name: "Dialogues",
      images: [[1, 2, 3, 4], [5, 6, 7, 8], [9]],
    },
    {
      slug: "geographies",
      name: "Géo-graphies",
      images: [
        [1, 2, 3, 4],
        [5, 7, 6],
        [8, 9, 10],
      ],
    },
  ],
} satisfies {
  series: {
    slug: string;
    name: string;
    images: (number | string)[][];
  }[];
};
