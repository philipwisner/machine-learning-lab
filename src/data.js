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
          "Upload an image of a teddy bear, black bear or grizzly bear and our model will tell you which one it uploaded.",
        link: "/vision/bearimages",
        endPoint: "http://prakash.ai:3000/analyze",
        imageSet: "",
        accuracy: ""
      },
      {
        name: "Age Detector 🧓",
        description: "Predicting age using artificial intelligence.",
        longDescription:
          "This model was trained by using 500,000 images from IMDB and Wikipedia. This model is still being trained, accuracy is not reliable.",
        link: "/vision/agedetector",
        endPoint: "http://prakash.ai:3001/analyze",
        imageSet: "https://storage.googleapis.com/dicetestmlbucket/Age.zip",
        accuracy: "Not reliable"
      },
      {
        name: "Food Classifier 🍔",
        description: "Detects what type of food is in a picture.",
        longDescription:
          "This model was trained using 100,000 images from 101 classes from Food-101 (ethz.cz). This model currently has 75% accuracy.",
        link: "/vision/foodclassifier",
        endPoint: "http://prakash.ai:2998/api/classify",
        imageSet: "",
        resultsHeight: "120px",
        accuracy: "75%"
      }
    ]
  },
  {
    name: "Healthcare",
    description:
      "Examples of how Machine Learning is transforming the healthcare industry.",
    longDescription:
      "Healthcare is an industry where certainty is crucial. The growth of Machine Learning in the medical community will allow doctors to make more informed decisions by supplementing their medical expertise with trained models. The more data that is gathered and verified the stronger the prediction power will be. This has the potential to drastically change the way we interact with healthcare. These models are NOT approved for medical diagnosis, they are demos of potential use cases only.",
    link: "/healthcare",
    logo: "Thumb",
    class: "healthcare",
    color: "#e74c3c",
    apps: [
      {
        name: "Breast Cancer Detector",
        icon:
          "https://storage.googleapis.com/dicetestmlbucket/breast-cancer.png",
        description: "Detects breast cancer based off a mammogram.",
        longDescription:
          "This model was trained using 200,000 images from Breast Histopathology (Kaggle). This model currently has 90% accuracy.",
        link: "/healthcare/breastcancer",
        endPoint: "http://prakash.ai:2992/analyze",
        accuracy: "90%",
        imageSet:
          "https://storage.googleapis.com/dicetestmlbucket/BreastCancer.zip"
      },
      /*
      {
        name: "Melanoma Detector ☀️",
        description: "Detects melanoma based off an image.",
        longDescription: "This model was trained using 18,000 images from Dermoscopic Pigmented Skin Lesions (Kaggle). This model currently has 96% accuracy",
        link: "/healthcare/melanoma",
        endPoint: "http://prakash.ai:2993/image",
        accuracy: "",
      },
      */
      {
        name: "Malaria Detector",
        icon: "https://storage.googleapis.com/dicetestmlbucket/mosquito.png",
        description: "Detects malaria based off human tissue images.",
        longDescription:
          "This model was trained using 38,000 Malaria Cell Images (National Institutes of Health. This model currently has 97% accuracy.",
        link: "/healthcare/malaria",
        endPoint: "http://prakash.ai:2994/analyze",
        accuracy: "97%",
        imageSet: "https://storage.googleapis.com/dicetestmlbucket/Malaria.zip"
      },
      {
        name: "MURA (Musculoskeletal Radiographs) 💪",
        icon: "",
        description: "Determines whether an X-ray study is normal or abnormal.",
        longDescription:
          "This model was trained using 40,000 Bone X-Ray DL Competition (Stanford). This model currently has 80.5% accuracy.",
        link: "/healthcare/mura",
        endPoint: "http://prakash.ai:2999/analyze",
        accuracy: "80.5%",
        imageSet:
          "https://storage.googleapis.com/dicetestmlbucket/MURA.zip",
      },
      {
        name: "Pneumonia Detector",
        icon: "https://storage.googleapis.com/dicetestmlbucket/lungs.png",
        description:
          "Determines whether a chest X-ray shows signs of pneumonia.",
        longDescription:
          "This model was trained using 6,000 Chest X-rays (Kaggle). This model currently has 97% accuracy.",
        link: "/healthcare/pneumonia",
        endPoint: "http://prakash.ai:2993/analyze",
        accuracy: "97%",
        imageSet:
          "https://storage.googleapis.com/dicetestmlbucket/Pneumonia.zip"
      }
    ]
  },
  {
    name: "NLP/NLU - COMING SOON",
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
    name: "GAN - COMING SOON",
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
    name: "Tabular - COMING SOON",
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
    image: "https://storage.googleapis.com/dicetestmlbucket/prakash.jpg"
  },
  {
    name: "Philip Wisner",
    title: "",
    image: "https://storage.googleapis.com/dicetestmlbucket/phil.jpg"
  },
  {
    name: "Sam Depretis",
    title: "",
    image: "https://storage.googleapis.com/dicetestmlbucket/sam.jpg"
  }
];

appData.imageSets = [
  {
    category: "bearImages",
    images: [
      {
        name: "GrizzlyBear",
        path: "/img/grizzly.376cfa67.jpg",
        type: "image/jpeg",
      },
      {
        name: "BlackBear",
        path: "/img/blackbear.7f53b5c2.jpg"
      },
      {
        name: "TeddyBear",
        path: "/img/teddy.6f0650a6.jpg"
      }
    ]
  },
  {
    category: "ageImages",
    images: [
      {
        name: "Paul",
        path: "/img/paul.6a00af87.jpg"
      },
      {
        name: "Obama",
        path: "/img/obama.9e8956cb.jpg"
      }
    ]
  },
  {
    category: "foodImages",
    images: [
      {
        name: "Hamburger",
        path: "/img/hamburger.705102ee.jpeg"
      },
      {
        name: "Steak",
        path: "/img/steak.f6051360.jpg"
      },
      {
        name: "Yogurt",
        path: "/img/yogurt.ea39b77b.jpg"
      }
    ]
  }
];



module.exports = appData;
