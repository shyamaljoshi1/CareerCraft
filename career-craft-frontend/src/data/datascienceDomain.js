// This file exports the complete data structure for the Data Science domain.

import datascience from '../assets/datascience.JPG'

export const dataScienceDomain = {
  id: "datascience",
  title: "Data Science",
  imageUrl:datascience,
  description:
    "Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It combines statistics, data analysis, machine learning, and business domain knowledge to turn raw data into actionable insights.",
  quizRoute: "/quiz/datascience",
  topics: [
    // 1️⃣ Foundations of Data Science
    {
      id: "intro",
      title: "Foundations of Data Science",
      route: "/domains/datascience/intro",
      summary:
        "Understand the data science lifecycle: asking the right questions, data collection, data wrangling, exploratory data analysis (EDA), modeling, and communication.",
      freeResources: [
        {
          title: "What is Data Science? (IBM)",
          type: "text",
          link: "https://www.ibm.com/topics/data-science",
        },
        {
          title: "The Data Science Lifecycle",
          type: "text",
          link: "https://www.wgu.edu/blog/what-is-data-science-lifecycle2007.html",
        },
        {
          title: "Introduction to Data Science (YouTube - freeCodeCamp)",
          type: "video",
          link: "https://www.youtube.com/watch?v=ua-a7aJ-9bA",
        },
      ],
      paidResources: [
        {
          title: "Coursera — What is Data Science? (IBM)",
          link: "https://www.coursera.org/learn/what-is-data-science",
        },
      ],
      projects: [
        {
          title: "Kaggle Dataset Exploration",
          desc: "Pick a simple dataset from Kaggle (like the Titanic) and write down the questions you would try to answer.",
        },
      ],
      organizations: [
        { name: "Kaggle", desc: "The world's largest data science community" },
      ],
    },

    // 2️⃣ Statistics & Probability
    {
      id: "statistics",
      title: "Statistics & Probability",
      route: "/domains/datascience/statistics",
      summary:
        "Master the core of data analysis. Learn descriptive statistics (mean, median, mode), inferential statistics, hypothesis testing (A/B testing), and core probability concepts.",
      freeResources: [
        {
          title: "Statistics & Probability (Khan Academy)",
          type: "course",
          link: "https://www.khanacademy.org/math/statistics-probability",
        },
        {
          title: "StatQuest (YouTube Channel)",
          type: "video",
          link: "https://www.youtube.com/c/statquest",
        },
        {
          title: "Hypothesis Testing Explained",
          type: "text",
          link: "https://www.investopedia.com/terms/h/hypothesistesting.asp",
        },
      ],
      paidResources: [
        {
          title: "Coursera — Statistics with R (Duke University)",
          link: "https://www.coursera.org/specializations/statistics",
        },
      ],
      projects: [
        {
          title: "A/B Test Analysis",
          desc: "Given a sample A/B test dataset, determine if the new version is a statistically significant improvement.",
        },
      ],
      organizations: [
        { name: "American Statistical Association", desc: "Professional stats organization" },
      ],
    },

    // 3️⃣ Programming for Data
    {
      id: "programming",
      title: "Programming for Data (Python/R)",
      route: "/domains/datascience/programming",
      summary:
        "Learn the tools to manipulate data. Master Python (with Pandas, NumPy, Matplotlib) or R (with dplyr, tidyr, ggplot2).",
      freeResources: [
        {
          title: "Pandas User Guide (Python)",
          type: "text",
          link: "https://pandas.pydata.org/docs/user_guide/index.html",
        },
        {
          title: "R for Data Science (Book - Free Online)",
          type: "course",
          link: "https://r4ds.had.co.nz/",
        },
        {
          title: "NumPy Quickstart",
          type: "text",
          link: "https://numpy.org/doc/stable/user/quickstart.html",
        },
      ],
      paidResources: [
        {
          title: "Data Scientist with Python (DataCamp)",
          link: "https://www.datacamp.com/tracks/data-scientist-with-python",
        },
      ],
      projects: [
        {
          title: "Analyze a CSV with Pandas",
          desc: "Use Pandas to load a CSV, find the min/max/mean of a column, and filter for specific values.",
        },
      ],
      organizations: [
        { name: "Posit (formerly RStudio)", desc: "Creators of RStudio and Tidyverse" },
      ],
    },

    // 4️⃣ Data Wrangling & Cleaning
    {
      id: "wrangling",
      title: "Data Wrangling & Cleaning",
      route: "/domains/datascience/wrangling",
      summary:
        "The most important job. Learn to handle missing values, correct data types, merge and join datasets, and reshape data into a 'tidy' format.",
      freeResources: [
        {
          title: "Data Cleaning (Kaggle)",
          type: "course",
          link: "https://www.kaggle.com/learn/data-cleaning",
        },
        {
          title: "Tidy Data (R for Data Science)",
          type: "text",
          link: "https://r4ds.had.co.nz/tidy-data.html",
        },
      ],
      paidResources: [
        {
          title: "Data Wrangling, Analysis, and AB Testing (Udemy)",
          link: "https://www.udemy.com/course/data-wrangling-ab-testing-and-analysis-in-python/",
        },
      ],
      projects: [
        {
          title: "Clean a 'Dirty' Dataset",
          desc: "Find a messy dataset online and write a script to clean it (impute missing values, fix formats, remove duplicates).",
        },
      ],
      organizations: [
        { name: "Kaggle", desc: "Provides many messy, real-world datasets" },
      ],
    },

    // 5️⃣ Exploratory Data Analysis (EDA)
    {
      id: "eda",
      title: "Exploratory Data Analysis (EDA)",
      route: "/domains/datascience/eda",
      summary:
        "Get to know your data. Learn to use statistics and visualizations to find patterns, identify anomalies, and formulate hypotheses.",
      freeResources: [
        {
          title: "EDA Guide (GeeksforGeeks)",
          type: "text",
          link: "https://www.geeksforgeeks.org/exploratory-data-analysis-in-python/",
        },
        {
          title: "Kaggle — EDA Course",
          type: "course",
          link: "https://www.kaggle.com/learn/exploratory-data-analysis",
        },
      ],
      paidResources: [
        {
          title: "Data Science: EDA (Coursera - Johns Hopkins)",
          link: "https://www.coursera.org/learn/exploratory-data-analysis",
        },
      ],
      projects: [
        {
          title: "Titanic EDA",
          desc: "Perform a full EDA on the Titanic dataset. Find correlations (e.g., class vs. survival) and visualize them.",
        },
      ],
      organizations: [
        { name: "Kaggle", desc: "Hosts thousands of public notebooks with EDA" },
      ],
    },

    // 6️⃣ Data Visualization
    {
      id: "visualization",
      title: "Data Visualization",
      route: "/domains/datascience/visualization",
      summary:
        "Learn to tell a story with data. Master libraries (Matplotlib, Seaborn, Plotly) for code-based charts and BI tools (Tableau, Power BI) for dashboards.",
      freeResources: [
        {
          title: "Seaborn Tutorial (Python)",
          type: "text",
          link: "https://seaborn.pydata.org/tutorial.html",
        },
        {
          title: "Tableau Public (Free Tool)",
          type: "tool",
          link: "https://public.tableau.com/en-us/s/",
        },
        {
          title: "Data Visualization (Kaggle)",
          type: "course",
          link: "https://www.kaggle.com/learn/data-visualization",
        },
      ],
      paidResources: [
        {
          title: "Tableau A-Z (Udemy)",
          link: "https://www.udemy.com/course/tableau10/",
        },
        {
          title: "Data Visualization with Python (DataCamp)",
          link: "https://www.datacamp.com/tracks/data-visualization-with-python",
        },
      ],
      projects: [
        {
          title: "Build an Interactive Dashboard",
          desc: "Use Tableau Public or Power BI to create a dashboard for a dataset of your choice.",
        },
      ],
      organizations: [
        { name: "Tableau", desc: "Leading business intelligence platform" },
        { name: "Microsoft Power BI", desc: "Leading business intelligence platform" },
      ],
    },

    // 7️⃣ Machine Learning
    {
      id: "machinelearning",
      title: "Machine Learning",
      route: "/domains/datascience/machinelearning",
      summary:
        "Learn to make predictions. Understand Supervised (Regression, Classification) and Unsupervised (Clustering) models. Use Scikit-learn to train and evaluate models.",
      freeResources: [
        {
          title: "Scikit-learn User Guide",
          type: "text",
          link: "https://scikit-learn.org/stable/user_guide.html",
        },
        {
          title: "Intro to ML (Kaggle)",
          type: "course",
          link: "https://www.kaggle.com/learn/intro-to-machine-learning",
        },
        {
          title: "StatQuest ML (YouTube)",
          type: "video",
          link: "https://www.youtube.com/playlist?list=PLblh5JKoVwRCl-tYl-9-fN-0-Dqg2T-xP",
        },
      ],
      paidResources: [
        {
          title: "Coursera — Machine Learning (Andrew Ng)",
          link: "https://www.coursera.org/learn/machine-learning",
        },
      ],
      projects: [
        {
          title: "House Price Prediction",
          desc: "Use Scikit-learn to build a linear regression model to predict house prices from a dataset.",
        },
      ],
      organizations: [
        { name: "Scikit-learn", desc: "The foundational ML library for Python" },
      ],
    },

    // 8️⃣ Big Data & SQL
    {
      id: "bigdata-sql",
      title: "Big Data & SQL",
      route: "/domains/datascience/bigdata-sql",
      summary:
        "Learn to get data from databases. Master SQL (SELECT, JOIN, GROUP BY). Understand Big Data concepts (Hadoop, Spark) and cloud data warehouses (Snowflake, BigQuery).",
      freeResources: [
        {
          title: "SQLBolt (Interactive SQL)",
          type: "course",
          link: "https://sqlbolt.com/",
        },
        {
          title: "Intro to Spark (Databricks)",
          type: "text",
          link: "https://www.databricks.com/discover/introduction-to-apache-spark",
        },
      ],
      paidResources: [
        {
          title: "The Complete SQL Bootcamp (Udemy)",
          link: "https://www.udemy.com/course/the-complete-sql-bootcamp/",
        },
        {
          title: "Data Engineering with Google Cloud (Coursera)",
          link: "https://www.coursera.org/professional-certificates/google-data-engineering",
        },
      ],
      projects: [
        {
          title: "Analyze a Database",
          desc: "Download a sample SQL database (e.g., Chinook) and write queries to answer business questions.",
        },
      ],
      organizations: [
        { name: "Snowflake", desc: "Leading cloud data warehouse" },
        { name: "Databricks", desc: "Company behind Apache Spark" },
      ],
    },

    // 9️⃣ Data Ethics & Communication
    {
      id: "ethics-communication",
      title: "Data Ethics & Communication",
      route: "/domains/datascience/ethics-communication",
      summary:
        "The most crucial step. Learn to present your findings as a compelling story. Understand data ethics, privacy, and how to avoid bias in your models and conclusions.",
      freeResources: [
        {
          title: "Data Ethics Framework (data.org)",
          type: "text",
          link: "https://data.org/resources/data-ethics-framework/",
        },
        {
          title: "Data Storytelling (freeCodeCamp)",
          type: "text",
          link: "https://www.freecodecamp.org/news/data-storytelling-a-step-by-step-guide-for-beginners/",
        },
      ],
      paidResources: [
        {
          title: "Data-Driven Decision Making (Coursera)",
          link: "https://www.coursera.org/learn/data-driven-decision-making",
        },
      ],
      projects: [
        {
          title: "Create a Project Presentation",
          desc: "Take your EDA project and create a 5-slide presentation for a non-technical audience.",
        },
      ],
      organizations: [
        { name: "Data for Good", desc: "Movement for using data in the social sector" },
      ],
    },

    // 1️⃣0️⃣ Deployment & MLOps (Basics)
    {
      id: "deployment",
      title: "Deployment & MLOps (Basics)",
      route: "/domains/datascience/deployment",
      summary:
        "Put your model to work. Learn to save your model (pickle/joblib), wrap it in an API (FastAPI, Flask), and containerize it (Docker).",
      freeResources: [
        {
          title: "FastAPI Docs",
          type: "course",
          link: "https://fastapi.tiangolo.com/tutorial/",
        },
        {
          title: "Docker Get Started",
          type: "text",
          link: "https://docs.docker.com/get-started/",
        },
        {
          title: "What is MLOps? (MLOps.community)",
          type: "text",
          link: "https://mlops.community/",
        },
      ],
      paidResources: [
        {
          title: "MLOps (Coursera - deeplearning.ai)",
          link: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops",
        },
      ],
      projects: [
        {
          title: "Deploy a Model API",
          desc: "Wrap your house price model in a FastAPI file so it can make predictions from API calls.",
        },
      ],
      organizations: [
        { name: "Docker", desc: "Containerization platform" },
      ],
    },
  ],
};