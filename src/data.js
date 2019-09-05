const appData = {};

appData.categories = [
  {
    name: "Computer Vision",
    description: `Allows computers to "see" and understand the content of images and photographs`,
    longDescription:
      "Computer vision is a field of computer science that works on enabling computers to see, identify and process images in the same way that human vision does, and then provide appropriate output. It is like imparting human intelligence and instincts to a computer. In reality though, it is a difficult task to enable computers to recognize images of different objects.",
    link: "/vision",
    logo: "Eye",
    class: "vision",
    color: "#2ecc71",
    apps: [
      {
        name: "Classify Bear Images 🐻",
        description:
          "Upload an image of a teddy bear, black bear or grizzly bears and our model will tell you which one it uploaded",
        link: "/vision/bearimages",
        endPoint: "http://prakash.ai:3000/analyze",
        imageSet: "bearImages"
      },
      {
        name: "Age Detector 🧓",
        description: "Predicting age using artificial intelligence.",
        link: "/vision/agedetector",
        endPoint: "http://prakash.ai:3001/analyze",
        imageSet: "ageImages"
      },
      {
        name: "Food Classifier 🍔",
        description: "Detects what type of food is in a picture.",
        link: "/vision/foodclassifier",
        endPoint: "http://prakash.ai:2998/api/classify",
        imageSet: "foodImages",
        resultsHeight: "120px"
      }
    ]
  },
  {
    name: "Healthcare",
    description:
      "Examples of how Machine Learning is transforming the healthcare industry.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien quam, efficitur sed nibh tempus, efficitur iaculis lacus. Curabitur ut hendrerit velit. Ut iaculis ligula mauris, ac porttitor tellus vehicula semper. Nam vitae risus lectus. Nam pellentesque sit amet dui sit amet vehicula.",
    link: "/healthcare",
    logo: "Thumb",
    class: "healthcare",
    color: "#e74c3c",
    apps: [
      {
        name: "Breast Cancer Detector",
        icon: "/img/breast-cancer.362569fd.png",
        description: "Detects breast cancer based off an iamge.",
        link: "/healthcare/breastcancer",
        endPoint: "http://prakash.ai:2997/analyze"
      },
      {
        name: "Melanoma Detector ☀️",
        description: "Detects melanoma based off an image.",
        link: "/healthcare/melanoma",
        endPoint: "http://prakash.ai:2996/image"
      },
      {
        name: "Malaria Detector",
        icon: "/img/mosquito.3333bfb6.png",
        description: "Detects malaria based off an image.",
        link: "/healthcare/malaria",
        endPoint: "http://prakash.ai:2995/analyze"
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
    color: "#3498db",
    apps: []
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
    color: "#e67e22",
    apps: []
  },
  {
    name: "Tabular",
    description: "Train models using traditional table based data sets.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien quam, efficitur sed nibh tempus, efficitur iaculis lacus. Curabitur ut hendrerit velit. Ut iaculis ligula mauris, ac porttitor tellus vehicula semper. Nam vitae risus lectus. Nam pellentesque sit amet dui sit amet vehicula.",
    link: "/tabular",
    logo: "Thumb",
    class: "tabular",
    color: "#9b59b6",
    apps: []
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

appData.members = [
  {
    name: "Prakash Parvateneni",
    title: "",
    image: "none"
  },
  {
    name: "Philip Wisner",
    title: "",
    image: "none"
  },
  {
    name: "Sam Depretis",
    title: "",
    image: "none"
  }
];

appData.imageSets = [
  {
    category: "bearImages",
    images: [
      {
        name: "Grizzly Bear",
        path: "/img/grizzly.376cfa67.jpg"
      },
      {
        name: "Black Bear",
        path: "/img/blackbear.7f53b5c2.jpg"
      },
      {
        name: "Teddy Bear",
        path: "/img/teddy.6f0650a6.jpg"
      }
    ]
  },
  {
    category: "ageImages",
    images: [
      {
        name: "Paul",
        path: "/img/grizzly.376cfa67.jpg"
      },
      {
        name: "Obama",
        path: "/img/blackbear.7f53b5c2.jpg"
      },
    ]
  }
];



module.exports = appData;
