// This file exports the complete data structure for the Machine Learning domain.

import machinelearning from '../assets/machinelearning.JPG'
export const machineLearningDomain = {
  id: "machinelearning",
  title: "Machine Learning",
  imageUrl:machinelearning,
  description:
    "Machine Learning (ML) is a field of artificial intelligence (AI) that enables computers to learn from data and improve from experience without being explicitly programmed. It involves algorithms that can identify patterns, make predictions, and generate insights from complex datasets.",
  quizRoute: "/quiz/machinelearning",
  topics: [
    // 1️⃣ Introduction to ML & AI
    {
      id: "intro",
      title: "Introduction to ML & AI",
      route: "/domains/machinelearning/intro",
      summary:
        "Understand the fundamentals of Artificial Intelligence, Machine Learning, and Deep Learning, and how they differ.",
      freeResources: [
        {
          title: "What is Machine Learning? (IBM)",
          type: "text",
          link: "https://www.ibm.com/topics/machine-learning",
        },
        {
          title: "Intro to Machine Learning (Kaggle)",
          type: "course",
          link: "https://www.kaggle.com/learn/intro-to-machine-learning",
        },
        {
          title: "Machine Learning Explained (YouTube - StatQuest)",
          type: "video",
          link: "https://www.youtube.com/watch?v=Gv9_EiJpsoA",
        },
      ],
      paidResources: [
        {
          title: "Coursera — Machine Learning by Andrew Ng (Stanford)",
          link: "https://www.coursera.org/learn/machine-learning",
        },
        {
          title: "Udemy — Machine Learning A-Z",
          link: "https://www.udemy.com/course/machinelearning/",
        },
      ],
      projects: [
        {
          title: "ML Concepts Report",
          desc: "Write a short report explaining the difference between Supervised, Unsupervised, and Reinforcement Learning.",
        },
      ],
      organizations: [
        { name: "Google AI", desc: "Drives research and development in AI/ML" },
        { name: "OpenAI", desc: "AI research and deployment company" },
      ],
    },

    // 2️⃣ Python for Data Science
    {
      id: "python-datascience",
      title: "Python for Data Science",
      route: "/domains/machinelearning/python-datascience",
      summary:
        "Master the essential Python libraries for data manipulation and analysis: NumPy, Pandas, and Matplotlib.",
      freeResources: [
        {
          title: "Pandas 10-min Intro",
          type: "text",
          link: "https://pandas.pydata.org/docs/user_guide/10min.html",
        },
        {
          title: "NumPy Quickstart",
          type: "text",
          link: "https://numpy.org/doc/stable/user/quickstart.html",
        },
        {
          title: "Python for Data Science (YouTube - freeCodeCamp)",
          type: "video",
          link: "https://www.youtube.com/watch?v=LHJb_dM8-dE",
        },
      ],
      paidResources: [
        {
          title: "Coursera — Python for Data Science, AI & Development (IBM)",
          link: "https://www.coursera.org/learn/python-for-data-science",
        },
      ],
      projects: [
        {
          title: "Analyze a CSV file",
          desc: "Use Pandas to load a CSV, clean it, and calculate descriptive statistics.",
        },
      ],
      organizations: [
        { name: "Pandas Team", desc: "Maintainers of the open-source Pandas library" },
      ],
    },

    // 3️⃣ Math for Machine Learning
    {
      id: "math",
      title: "Math for Machine Learning",
      route: "/domains/machinelearning/math",
      summary:
        "Review the core mathematical concepts that power ML algorithms: Linear Algebra, Calculus, and Statistics.",
      freeResources: [
        {
          title: "Essence of Linear Algebra (YouTube - 3Blue1Brown)",
          type: "video",
          link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
        },
        {
          title: "Statistics & Probability (Khan Academy)",
          type: "course",
          link: "https://www.khanacademy.org/math/statistics-probability",
        },
      ],
      paidResources: [
        {
          title: "Coursera — Mathematics for Machine Learning",
          link: "https://www.coursera.org/specializations/mathematics-machine-learning",
        },
      ],
      projects: [
        {
          title: "Gradient Descent from Scratch",
          desc: "Implement a simple linear regression using only NumPy, calculating gradients manually.",
        },
      ],
      organizations: [
        { name: "3Blue1Brown", desc: "Creator of intuitive math visualizations" },
      ],
    },

    // 4️⃣ Data Preprocessing & EDA
    {
      id: "preprocessing-eda",
      title: "Data Preprocessing & EDA",
      route: "/domains/machinelearning/preprocessing-eda",
      summary:
        "Learn to clean, transform, and visualize data. Handle missing values, encode features, and perform Exploratory Data Analysis (EDA).",
      freeResources: [
        {
          title: "Kaggle — Data Cleaning Course",
          type: "course",
          link: "https://www.kaggle.com/learn/data-cleaning",
        },
        {
          title: "Scikit-learn — Preprocessing Guide",
          type: "text",
          link: "https://scikit-learn.org/stable/modules/preprocessing.html",
        },
      ],
      paidResources: [
        {
          title: "Udemy — Feature Engineering for Machine Learning",
          link: "https://www.udemy.com/course/feature-engineering-for-machine-learning/",
        },
      ],
      projects: [
        {
          title: "Titanic Dataset Analysis",
          desc: "Perform a full EDA on the classic Titanic dataset and visualize your findings.",
        },
      ],
      organizations: [
        { name: "Kaggle", desc: "A platform for data science competitions and datasets" },
      ],
    },

    // 5️⃣ Supervised Learning
    {
      id: "supervised",
      title: "Supervised Learning",
      route: "/domains/machinelearning/supervised",
      summary:
        "Build models that predict an output from labeled data. Covers Linear Regression, Logistic Regression, Decision Trees, and SVMs.",
      freeResources: [
        {
          title: "Scikit-learn Model Docs",
          type: "text",
          link: "https://scikit-learn.org/stable/supervised_learning.html",
        },
        {
          title: "StatQuest (YouTube Channel)",
          type: "video",
          link: "https://www.youtube.com/c/statquest",
        },
      ],
      paidResources: [
        {
          title: "Coursera — Supervised ML (Part of Andrew Ng's Spec.)",
          link: "https://www.coursera.org/learn/supervised-machine-learning-regression-and-classification",
        },
      ],
      projects: [
        {
          title: "House Price Prediction",
          desc: "Build a Linear Regression model to predict housing prices.",
        },
        {
          title: "Iris Flower Classification",
          desc: "Use a Decision Tree or SVM to classify species of Iris flowers.",
        },
      ],
      organizations: [
        { name: "Scikit-learn", desc: "The core open-source ML library for Python" },
      ],
    },

    // 6️⃣ Unsupervised Learning
    {
      id: "unsupervised",
      title: "Unsupervised Learning",
      route: "/domains/machinelearning/unsupervised",
      summary:
        "Find hidden patterns in unlabeled data using algorithms like K-Means Clustering, DBSCAN, and PCA.",
      freeResources: [
        {
          title: "Clustering Algorithms (Scikit-learn)",
          type: "text",
          link: "https://scikit-learn.org/stable/modules/clustering.html",
        },
        {
          title: "PCA Explained (StatQuest)",
          type: "video",
          link: "https://www.youtube.com/watch?v=FgakZw6K1QQ",
        },
      ],
      paidResources: [
        {
          title: "Coursera — Unsupervised Learning (Part of Andrew Ng's Spec.)",
          link: "https://www.coursera.org/learn/unsupervised-learning-recommenders-reinforcement-learning",
        },
      ],
      projects: [
        {
          title: "Customer Segmentation",
          desc: "Use K-Means to cluster customers from a shopping dataset.",
        },
      ],
      organizations: [
        { name: "Scikit-learn", desc: "Provides robust implementations of clustering/PCA" },
      ],
    },

    // 7️⃣ Model Evaluation & Metrics
    {
      id: "evaluation",
      title: "Model Evaluation & Metrics",
      route: "/domains/machinelearning/evaluation",
      summary:
        "Learn how to tell if your model is good. Understand Accuracy, Precision, Recall, F1-Score, R-Squared, and Cross-Validation.",
      freeResources: [
        {
          title: "Model Evaluation Docs (Scikit-learn)",
          type: "text",
          link: "https://scikit-learn.org/stable/modules/model_evaluation.html",
        },
        {
          title: "Cross-Validation Explained (StatQuest)",
          type: "video",
          link: "https://www.youtube.com/watch?v=fSGGodVoerg",
        },
      ],
      paidResources: [
        {
          title: "Kaggle — Model Validation Course",
          type: "course",
          link: "https://www.kaggle.com/learn/model-validation",
        },
      ],
      projects: [
        {
          title: "Compare Two Models",
          desc: "Train two different classifiers (e.g., Logistic Regression vs. Random Forest) and write a report on which is better and why, using proper metrics.",
        },
      ],
      organizations: [
        { name: "Kaggle", desc: "Platform focused on predictive modeling and metrics" },
      ],
    },

    // 8️⃣ Introduction to Deep Learning
    {
      id: "deeplearning",
      title: "Introduction to Deep Learning",
      route: "/domains/machinelearning/deeplearning",
      summary:
        "Explore the basics of Neural Networks and Deep Learning using libraries like TensorFlow and Keras.",
      freeResources: [
        {
          title: "Keras Basics",
          type: "text",
          link: "https://keras.io/guides/writing_a_training_loop_from_scratch/",
        },
        {
          title: "Deep Learning (YouTube - 3Blue1Brown)",
          type: "video",
          link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
        },
      ],
      paidResources: [
        {
          title: "Coursera — Deep Learning Specialization",
          link: "https://www.coursera.org/specializations/deep-learning",
        },
      ],
      projects: [
        {
          title: "MNIST Digit Classifier",
          desc: "Build a simple neural network to classify handwritten digits (0-9).",
        },
      ],
      organizations: [
        { name: "TensorFlow", desc: "Google's open-source deep learning library" },
        { name: "Keras", desc: "A high-level, user-friendly API for deep learning" },
      ],
    },

    // 9️⃣ ML Specializations
    {
      id: "specializations",
      title: "ML Specializations",
      route: "/domains/machinelearning/specializations",
      summary:
        "Get an overview of advanced fields like Natural Language Processing (NLP), Computer Vision (CV), and Reinforcement Learning.",
      freeResources: [
        {
          title: "Hugging Face (NLP)",
          type: "tool",
          link: "https://huggingface.co/learn/nlp-course",
        },
        {
          title: "OpenCV (Computer Vision)",
          type: "tool",
          link: "https://opencv.org/get-started/",
        },
      ],
      paidResources: [
        {
          title: "Coursera — Natural Language Processing (deeplearning.ai)",
          link: "https://www.coursera.org/specializations/natural-language-processing",
        },
        {
          title: "Coursera — Computer Vision (deeplearning.ai)",
          link: "https://www.coursera.org/specializations/computer-vision",
        },
      ],
      projects: [
        {
          title: "Simple Sentiment Analysis",
          desc: "Use a pre-trained model (like VADER) to classify text as positive or negative.",
        },
        {
          title: "Object Detection with YOLO",
          desc: "Use a pre-trained YOLO model to detect objects in an image.",
        },
      ],
      organizations: [
        { name: "Hugging Face", desc: "The leading platform for NLP models and tools" },
        { name: "OpenCV", desc: "The core library for open-source computer vision" },
      ],
    },

    // 1️⃣0️⃣ MLOps & Deployment
    {
      id: "mlops",
      title: "MLOps & Deployment",
      route: "/domains/machinelearning/mlops",
      summary:
        "Learn how to productionize your models. Covers model serving, monitoring, and MLOps principles.",
      freeResources: [
        {
          title: "What is MLOps? (Google Cloud)",
          type: "text",
          link: "https://cloud.google.com/mlops",
        },
        {
          title: "Introduction to Docker",
          type: "text",
          link: "https://docs.docker.com/get-started/overview/",
        },
        {
          title: "Building a simple API with FastAPI",
          type: "text",
          link: "https://fastapi.tiangolo.com/tutorial/",
        },
      ],
      paidResources: [
        {
          title: "Coursera — MLOps Specialization",
          link: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops",
        },
      ],
      projects: [
        {
          title: "Deploy Model with FastAPI",
          desc: "Wrap your trained model (e.g., the house price predictor) in a FastAPI endpoint.",
        },
        {
          title: "Dockerize your ML App",
          desc: "Containerize your FastAPI application using Docker.",
        },
      ],
      organizations: [
        { name: "Docker", desc: "The leading containerization platform" },
        { name: "Kubernetes", desc: "The leading platform for container orchestration" },
      ],
    },
  ],
};