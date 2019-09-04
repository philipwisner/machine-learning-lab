const appData = {};

appData.categories = [
  {
    name: "Computer Vision",
    description: `Allows computers to "see" and understand the content of images and photographs`,
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien quam, efficitur sed nibh tempus, efficitur iaculis lacus. Curabitur ut hendrerit velit. Ut iaculis ligula mauris, ac porttitor tellus vehicula semper. Nam vitae risus lectus. Nam pellentesque sit amet dui sit amet vehicula.",
    link: "/vision",
    logo: "Eye",
    class: "vision",
    apps: [
      {
        name: "Bear Image",
        link: "vision/bearimages"
      },
      {
        name: "Sample App 2",
        link: "vision/"
      },
      {
        name: "Sample App 3",
        link: "vision/"
      }
    ]
  },
  {
    name: "NLP/NLU",
    fullName: "Natural Language Processing/Understanding",
    description:
      "Allows computers to understand, analyze, manipulate and potentially generate human language.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien quam, efficitur sed nibh tempus, efficitur iaculis lacus. Curabitur ut hendrerit velit. Ut iaculis ligula mauris, ac porttitor tellus vehicula semper. Nam vitae risus lectus. Nam pellentesque sit amet dui sit amet vehicula.",
    link: "/nlp",
    logo: "Graph",
    class: "nlp",
    apps: [
      {
        name: "NLP Child App",
        link: "nlp/nlpchild"
      },
      {
        name: "Sample App 2",
        link: "nlp/"
      },
      {
        name: "Sample App 3",
        link: "nlp/"
      }
    ]
  },
  {
    name: "GAN",
    fullName: "General Adversarial Network",
    description:
      "Two neural networks compete with each other to become more accurate in their predictions.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien quam, efficitur sed nibh tempus, efficitur iaculis lacus. Curabitur ut hendrerit velit. Ut iaculis ligula mauris, ac porttitor tellus vehicula semper. Nam vitae risus lectus. Nam pellentesque sit amet dui sit amet vehicula.",
    link: "/gan",
    logo: "Person",
    class: "gan",
    apps: [
      {
        name: "GAN Child App",
        link: "gan/ganchild"
      },
      {
        name: "Sample App 2",
        link: "gan/"
      },
      {
        name: "Sample App 3",
        link: "gan/"
      }
    ]
  },
  {
    name: "Tabular",
    description: "Train models using traditional table based data sets.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien quam, efficitur sed nibh tempus, efficitur iaculis lacus. Curabitur ut hendrerit velit. Ut iaculis ligula mauris, ac porttitor tellus vehicula semper. Nam vitae risus lectus. Nam pellentesque sit amet dui sit amet vehicula.",
    link: "/tabular",
    logo: "Thumb",
    class: "tabular",
    apps: [
      {
        name: "Tabular Child App",
        link: "tabular/tabularchild"
      },
      {
        name: "Sample App 2",
        link: "tabular/"
      },
      {
        name: "Sample App 3",
        link: "tabular/"
      }
    ]
  },
  {
    name: "Healthcare",
    description:
      "Machine Learning and AI are transforming the healthcare industry.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien quam, efficitur sed nibh tempus, efficitur iaculis lacus. Curabitur ut hendrerit velit. Ut iaculis ligula mauris, ac porttitor tellus vehicula semper. Nam vitae risus lectus. Nam pellentesque sit amet dui sit amet vehicula.",
    link: "/healthcare",
    logo: "Thumb",
    class: "healthcare",
    apps: [
      {
        name: "Healthcare Child App",
        link: "healthcare/healthcarechild"
      },
      {
        name: "Sample App 2",
        link: "healthcare/"
      },
      {
        name: "Sample App 3",
        link: "healthcare/"
      }
    ]
  }
];

appData.reasons = [
  {
    heading: 'Sample Reason 1',
    content: 'Ut iaculis ligula mauris, ac porttitor tellus vehicula semper.'
  },
  {
    heading: 'Sample Reason 2',
    content: 'Ut iaculis ligula mauris, ac porttitor tellus vehicula semper.'
  },
  {
    heading: 'Sample Reason 3',
    content: 'Ut iaculis ligula mauris, ac porttitor tellus vehicula semper.'
  }
]

module.exports = appData;
