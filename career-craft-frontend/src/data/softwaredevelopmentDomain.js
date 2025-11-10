// This file exports the complete data structure for the Software Development domain.
import development from '../assets/development.JPG'



export const softwareDevelopmentDomain = {
  id: "softwaredevelopment",
  title: "Software Development",
  imageUrl:development,
  description:
    "Software Development is the comprehensive process of conceiving, designing, building, testing, and deploying software. It's an engineering discipline that combines computer science, project management, and creative problem-solving to create applications for web, mobile, desktop, and more.",
  quizRoute: "/quiz/softwaredevelopment",
  topics: [
    // 1️⃣ SDLC & Agile
    {
      id: "sdlc-agile",
      title: "SDLC & Agile",
      route: "/domains/softwaredevelopment/sdlc-agile",
      summary:
        "Learn the 'how' of building software. Understand the Software Development Life Cycle (SDLC), from requirements gathering and design to testing and deployment. Master Agile, Scrum, and Kanban.",
      freeResources: [
        {
          title: "What is the SDLC? (IBM)",
          type: "text",
          link: "https://www.ibm.com/topics/sdlc",
        },
        {
          title: "What is Agile? (Atlassian)",
          type: "text",
          link: "https://www.atlassian.com/agile",
        },
        {
          title: "Intro to Scrum in 8 Minutes (YouTube)",
          type: "video",
          link: "https://www.youtube.com/watch?v=9T-D_VuA9N4",
        },
      ],
      paidResources: [
        {
          title: "Certified ScrumMaster (CSM) Certification",
          link: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster",
        },
        {
          title: "Agile Project Management (Coursera)",
          link: "https://www.coursera.org/specializations/agile-development",
        },
      ],
      projects: [
        {
          title: "Create a Project Trello Board",
          desc: "Plan a small project (e.g., a blog) using User Stories, a Backlog, and To Do/In Progress/Done columns.",
        },
      ],
      organizations: [
        { name: "Scrum Alliance", desc: "Global body for Scrum certification" },
        { name: "Atlassian", desc: "Creators of Jira and Trello (Agile tools)" },
      ],
    },

    // 2️⃣ Software Architecture & Design Patterns
    {
      id: "architecture",
      title: "Software Architecture",
      route: "/domains/softwaredevelopment/architecture",
      summary:
        "Learn to design the 'blueprint' of a system. Understand architectures like Monolith, Microservices, and 3-Tier. Study SOLID principles and common Design Patterns.",
      freeResources: [
        {
          title: "SOLID Principles Explained (freeCodeCamp)",
          type: "text",
          link: "https://www.freecodecamp.org/news/solid-principles-every-developer-should-know/",
        },
        {
          title: "Design Patterns (Refactoring.Guru)",
          type: "text",
          link: "https://refactoring.guru/design-patterns",
        },
        {
          title: "Microservices (YouTube - Fireship)",
          type: "video",
          link: "https://www.youtube.com/watch?v=S-n3g0Rq-5k",
        },
      ],
      paidResources: [
        {
          title: "Book: Clean Architecture (Robert C. Martin)",
          link: "https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164",
        },
        {
          title: "Grokking the System Design Interview (Educative)",
          link: "https://www.educative.io/courses/grokking-the-system-design-interview",
        },
      ],
      projects: [
        {
          title: "Diagram a System",
          desc: "Draw a simple component diagram for a ride-sharing app (User, Driver, API, Database, Payments).",
        },
      ],
      organizations: [
        { name: "Martin Fowler", desc: "Influential author on software architecture" },
      ],
    },

    // 3️⃣ Programming Fundamentals (DSA)
    {
      id: "dsa",
      title: "Data Structures & Algorithms",
      route: "/domains/softwaredevelopment/dsa",
      summary:
        "Master the core tools of programming. Learn Data Structures (Arrays, Maps, Stacks, Trees) and Algorithms (Sorting, Searching) to write efficient, scalable code.",
      freeResources: [
        {
          title: "Big O Notation (GeeksforGeeks)",
          type: "text",
          link: "https://www.geeksforgeeks.org/analysis-of-algorithms-big-o-analysis/",
        },
        {
          title: "LeetCode (Platform)",
          type: "course",
          link: "https://leetcode.com/",
        },
        {
          title: "Harvard CS50 - Data Structures (YouTube)",
          type: "video",
          link: "https://www.youtube.com/watch?v=4VqmShwxQyM",
        },
      ],
      paidResources: [
        {
          title: "Book: Cracking the Coding Interview (G.L. McDowell)",
          link: "https.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/",
        },
      ],
      projects: [
        {
          title: "Solve 10 LeetCode Easy",
          desc: "Solve 10 'Easy' problems on LeetCode using the language of your choice.",
        },
      ],
      organizations: [
        { name: "LeetCode", desc: "Platform for technical interview practice" },
        { name: "HackerRank", desc: "Platform for competitive programming" },
      ],
    },

    // 4️⃣ Version Control (Git)
    {
      id: "git",
      title: "Version Control (Git)",
      route: "/domains/softwaredevelopment/git",
      summary:
        "Learn how to manage and collaborate on code. Master the essentials: commit, push, pull, branch, merge, and handle merge conflicts using Git and GitHub.",
      freeResources: [
        {
          title: "Git Handbook (GitHub)",
          type: "text",
          link: "https://guides.github.com/introduction/git-handbook/",
        },
        {
          title: "Atlassian Git Tutorial (Interactive)",
          type: "course",
          link: "https://www.atlassian.com/git/tutorials",
        },
      ],
      paidResources: [
        {
          title: "Git Complete: The definitive guide (Udemy)",
          link: "https.com/course/git-complete/",
        },
      ],
      projects: [
        {
          title: "Create a GitHub Repo",
          desc: "Create a new repo, add a file, create a 'dev' branch, make a change, and merge it back to 'main'.",
        },
      ],
      organizations: [
        { name: "GitHub", desc: "The world's largest code hosting platform" },
        { name: "GitLab", desc: "A complete DevOps platform" },
      ],
    },

    // 5️⃣ Web Development: Frontend
    {
      id: "frontend",
      title: "Web Development: Frontend",
      route: "/domains/softwaredevelopment/frontend",
      summary:
        "Build the user-facing part of websites. Master HTML, CSS, and JavaScript, then learn modern frameworks like React, Vue, or Angular to build dynamic user interfaces.",
      freeResources: [
        {
          title: "MDN Web Docs (Mozilla)",
          type: "text",
          link: "https://developer.mozilla.org/en-US/",
        },
        {
          title: "React Official Docs (New)",
          type: "course",
          link: "https://react.dev/learn",
        },
        {
          title: "CSS-Tricks (Website)",
          type: "text",
          link: "https://css-tricks.com/",
        },
      ],
      paidResources: [
        {
          title: "The Odin Project (Free, but comprehensive)",
          link: "https://www.theodinproject.com/",
        },
        {
          title: "Full-Stack Web Dev (Udemy - Angela Yu)",
          link: "https.com/course/the-complete-web-development-bootcamp/",
        },
      ],
      projects: [
        {
          title: "Personal Portfolio Website",
          desc: "Build a responsive portfolio website using HTML, CSS, and JavaScript.",
        },
        {
          title: "React To-Do List",
          desc: "Create a simple To-Do list app where users can add and remove tasks.",
        },
      ],
      organizations: [
        { name: "Vercel", desc: "Creators of Next.js (React framework)" },
        { name: "Meta", desc: "Creators of React" },
      ],
    },

    // 6️⃣ Web Development: Backend
    {
      id: "backend",
      title: "Web Development: Backend",
      route: "/domains/softwaredevelopment/backend",
      summary:
        "Build the 'server-side' logic. Learn to create REST APIs, manage databases, and handle user authentication using languages/frameworks like Node.js, Python (Django/FastAPI), or Java (Spring).",
      freeResources: [
        {
          title: "Node.js Official Docs",
          type: "text",
          link: "https://nodejs.org/en/docs",
        },
        {
          title: "Building a REST API with Express (Guide)",
          type: "text",
          link: "https://www.freecodecamp.org/news/create-a-rest-api-with-express-js-in-4-minutes/",
        },
        {
          title: "FastAPI Official Docs (Python)",
          type: "course",
          link: "https://fastapi.tiangolo.com/",
        },
      ],
      paidResources: [
        {
          title: "Node.js, Express, MongoDB (Udemy - Jonas S.)",
          link: "https.com/course/nodejs-express-mongodb-bootcamp/",
        },
        {
          title: "Python and Django Full Stack (Udemy)",
          link: "https.com/course/python-and-django-full-stack-web-developer-bootcamp/",
        },
      ],
      projects: [
        {
          title: "Blog API",
          desc: "Create a REST API with endpoints to Create, Read, Update, and Delete blog posts.",
        },
      ],
      organizations: [
        { name: "Node.js Foundation", desc: "Manages the Node.js open-source project" },
        { name: "Microsoft", desc: "Maintains .NET framework" },
      ],
    },

    // 7️⃣ Mobile App Development
    {
      id: "mobile",
      title: "Mobile App Development",
      route: "/domains/softwaredevelopment/mobile",
      summary:
        "Build applications for iOS and Android. Choose between Native (Swift for iOS, Kotlin for Android) or Cross-Platform (React Native, Flutter) development.",
      freeResources: [
        {
          title: "Flutter Official Docs",
          type: "course",
          link: "https.com/docs",
        },
        {
          title: "React Native Official Docs",
          type: "course",
          link: "https://reactnative.dev/docs/getting-started",
        },
        {
          title: "SwiftUI (Apple Developer)",
          type: "text",
          link: "https://developer.apple.com/xcode/swiftui/",
        },
      ],
      paidResources: [
        {
          title: "Flutter & Dart (Udemy - Angela Yu)",
          link: "https.com/course/flutter-bootcamp-with-dart/",
        },
        {
          title: "React Native (Udemy - Academind)",
          link: "https.com/course/react-native-the-practical-guide/",
        },
      ],
      projects: [
        {
          title: "Simple Weather App",
          desc: "Build a mobile app in Flutter or React Native that pulls data from a free weather API and displays it.",
        },
      ],
      organizations: [
        { name: "Google", desc: "Creators of Flutter and Android/Kotlin" },
        { name: "Apple", desc: "Creators of Swift and iOS" },
      ],
    },

    // 8️⃣ Databases
    {
      id: "databases",
      title: "Databases",
      route: "/domains/softwaredevelopment/databases",
      summary:
        "Learn how to store and retrieve data. Understand relational SQL databases (PostgreSQL, MySQL) and non-relational NoSQL databases (MongoDB, Firestore, Redis).",
      freeResources: [
        {
          title: "SQLBolt (Interactive SQL)",
          type: "course",
          link: "https://sqlbolt.com/",
        },
        {
          title: "MongoDB University (Free Courses)",
          type: "course",
          link: "https://learn.mongodb.com/",
        },
        {
          title: "PostgreSQL Tutorial",
          type: "text",
          link: "https.com/docs/current/tutorial-start.html",
        },
      ],
      paidResources: [
        {
          title: "The Ultimate MySQL Bootcamp (Udemy)",
          link: "https.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/",
        },
      ],
      projects: [
        {
          title: "E-commerce Schema",
          desc: "Design the SQL database schema (tables and relationships) for an e-commerce store with Users, Products, and Orders.",
        },
      ],
      organizations: [
        { name: "MongoDB Inc.", desc: "Creators of MongoDB" },
        { name: "Oracle", desc: "Maintainers of MySQL" },
      ],
    },

    // 9️⃣ Testing & Quality Assurance
    {
      id: "testing",
      title: "Testing & Quality Assurance",
      route: "/domains/softwaredevelopment/testing",
      summary:
        "Ensure your code works. Learn about the 'Testing Pyramid' (Unit, Integration, E2E tests) using tools like Jest, Pytest, or Selenium.",
      freeResources: [
        {
          title: "Jest Docs (JavaScript Testing)",
          type: "text",
          link: "https.com/docs",
        },
        {
          title: "Pytest Docs (Python Testing)",
          type: "text",
          link: "https.com/docs/stable/",
        },
        {
          title: "Intro to Testing (freeCodeCamp)",
          type: "text",
          link: "https.com/news/testing-in-software-development-a-guide-for-beginners/",
        },
      ],
      paidResources: [
        {
          title: "ISTQB Foundation Level (Certification)",
          link: "https://www.istqb.org/certifications/certified-tester-foundation-level",
        },
      ],
      projects: [
        {
          title: "Write Unit Tests",
          desc: "For your 'Blog API' project, write unit tests to verify that your 'Create Post' endpoint works correctly.",
        },
      ],
      organizations: [
        { name: "ISTQB", desc: "Global board for software testing certification" },
      ],
    },

    // 1️⃣0️⃣ DevOps & Deployment
    {
      id: "devops",
      title: "DevOps & Deployment",
      route: "/domains/softwaredevelopment/devops",
      summary:
        "Automate your workflow. Learn to containerize apps with Docker, set up CI/CD pipelines (GitHub Actions), and deploy to cloud platforms (AWS, Vercel, Heroku).",
      freeResources: [
        {
          title: "Docker Get Started",
          type: "text",
          link: "https.com/get-started/overview/",
        },
        {
          title: "GitHub Actions Docs",
          type: "text",
          link: "https.com/actions/learn-github-actions",
        },
        {
          title: "What is DevOps? (Amazon AWS)",
          type: "text",
          link: "https://aws.amazon.com/devops/what-is-devops/",
        },
      ],
      paidResources: [
        {
          title: "Docker and Kubernetes (Udemy - Stephen Grider)",
          link: "https.com/course/docker-and-kubernetes-the-complete-guide/",
        },
      ],
      projects: [
        {
          title: "Dockerize your API",
          desc: "Create a Dockerfile for your backend API, build an image, and run it in a container.",
        },
      ],
      organizations: [
        { name: "Docker", desc: "The leading containerization platform" },
        { name: "Amazon Web Services", desc: "The leading cloud provider" },
      ],
    },
  ],
};