// This file exports the complete data structure for the DevOps domain.

import devops from '../assets/devops.JPG'
export const devopsDomain = {
  id: "devops",
  title: "DevOps",
  imageUrl:devops,
  description:
    "DevOps is a culture and set of practices that combines software development (Dev) and IT operations (Ops) to shorten the software development life cycle. It emphasizes automation, collaboration, and monitoring to build, test, and release software faster and more reliably.",
  quizRoute: "/quiz/devops",
  topics: [
    // 1️⃣ Foundations: Linux & Scripting
    {
      id: "foundations",
      title: "Foundations: Linux & Scripting",
      route: "/domains/devops/foundations",
      summary:
        "The bedrock of DevOps. Master the Linux command line, file systems, permissions, and shell scripting (Bash) to automate tasks.",
      freeResources: [
        {
          title: "The Linux Command Handbook",
          type: "text",
          link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
        },
        {
          title: "Bash Scripting Cheat Sheet",
          type: "text",
          link: "https://devhints.io/bash",
        },
        {
          title: "Introduction to Networking (GeeksforGeeks)",
          type: "text",
          link: "https://www.geeksforgeeks.org/computer-network-tutorials/",
        },
      ],
      paidResources: [
        {
          title: "Linux+ (CompTIA) Certification",
          link: "https://www.comptia.org/certifications/linux",
        },
        {
          title: "Linux Administration Bootcamp (Udemy)",
          link: "https://www.udemy.com/course/linux-administration-bootcamp/",
        },
      ],
      projects: [
        {
          title: "Automation Script",
          desc: "Write a Bash script that backs up a directory and deletes backups older than 7 days.",
        },
        {
          title: "Setup a Web Server",
          desc: "Manually install and configure an Nginx web server on a Linux VM.",
        },
      ],
      organizations: [
        { name: "The Linux Foundation", desc: "Supports the growth of Linux" },
      ],
    },

    // 2️⃣ Git & Source Code Management
    {
      id: "git",
      title: "Git & Source Code Management",
      route: "/domains/devops/git",
      summary:
        "Master version control. Go beyond 'commit' and 'push' to learn branching strategies (GitFlow), merging, rebasing, and managing pull requests (PRs).",
      freeResources: [
        {
          title: "Atlassian Git Tutorial (Interactive)",
          type: "course",
          link: "https://www.atlassian.com/git/tutorials",
        },
        {
          title: "Gitflow Workflow (Atlassian)",
          type: "text",
          link: "https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow",
        },
      ],
      paidResources: [
        {
          title: "Git Complete: The definitive guide (Udemy)",
          link: "https://www.udemy.com/course/git-complete/",
        },
      ],
      projects: [
        {
          title: "Fix a Merge Conflict",
          desc: "Intentionally create and then resolve a merge conflict between two branches.",
        },
      ],
      organizations: [
        { name: "GitHub", desc: "The world's largest code hosting platform" },
        { name: "GitLab", desc: "A complete DevOps platform" },
      ],
    },

    // 3️⃣ CI/CD Pipelines
    {
      id: "ci-cd",
      title: "CI/CD Pipelines",
      route: "/domains/devops/ci-cd",
      summary:
        "The 'automation engine' of DevOps. Learn Continuous Integration (CI) and Continuous Delivery (CD) principles. Build pipelines with tools like Jenkins, GitHub Actions, or GitLab CI.",
      freeResources: [
        {
          title: "What is CI/CD? (Red Hat)",
          type: "text",
          link: "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
        },
        {
          title: "Get started with GitHub Actions",
          type: "course",
          link: "https://docs.github.com/en/actions/learn-github-actions",
        },
        {
          title: "Jenkins Documentation",
          type: "tool",
          link: "https://www.jenkins.io/doc/",
        },
      ],
      paidResources: [
        {
          title: "Jenkins, From A to Z (Udemy)",
          link: "https://www.udemy.com/course/jenkins-from-a-to-z/",
        },
      ],
      projects: [
        {
          title: "Simple CI Pipeline",
          desc: "Create a GitHub Action that automatically runs 'npm install' and 'npm test' on every push.",
        },
      ],
      organizations: [
        { name: "Jenkins", desc: "The leading open-source automation server" },
        { name: "Cloud Native Computing Foundation", desc: "Manages many CI/CD tools" },
      ],
    },

    // 4️⃣ Containerization (Docker)
    {
      id: "docker",
      title: "Containerization (Docker)",
      route: "/domains/devops/docker",
      summary:
        "Package your applications. Learn to create, manage, and run lightweight, portable containers using Docker. Master Dockerfiles, Docker Compose, and image registries.",
      freeResources: [
        {
          title: "Docker Get Started",
          type: "course",
          link: "https://docs.docker.com/get-started/",
        },
        {
          title: "What is a Dockerfile? (Docker Docs)",
          type: "text",
          link: "https://docs.docker.com/engine/reference/builder/",
        },
        {
          title: "Docker Compose Overview",
          type: "text",
          link: "https://docs.docker.com/compose/",
        },
      ],
      paidResources: [
        {
          title: "Docker & Kubernetes: The Complete Guide (Udemy)",
          link: "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/",
        },
      ],
      projects: [
        {
          title: "Dockerize an Application",
          desc: "Write a Dockerfile for a simple web app (e.g., Node.js or Python) and build the image.",
        },
        {
          title: "Docker Compose Stack",
          desc: "Use Docker Compose to launch your web app and a database (e.g., Postgres) with one command.",
        },
      ],
      organizations: [
        { name: "Docker", desc: "The company behind the container platform" },
      ],
    },

    // 5️⃣ Container Orchestration (Kubernetes)
    {
      id: "kubernetes",
      title: "Container Orchestration (Kubernetes)",
      route: "/domains/devops/kubernetes",
      summary:
        "Manage containers at scale. Learn the complex but powerful Kubernetes (k8s) ecosystem. Understand Pods, Services, Deployments, ConfigMaps, and Helm charts.",
      freeResources: [
        {
          title: "Kubernetes Documentation",
          type: "text",
          link: "https://kubernetes.io/docs/home/",
        },
        {
          title: "What is Kubernetes? (YouTube - IBM)",
          type: "video",
          link: "https://www.youtube.com/watch?v=s_oV-pFeMMw",
        },
        {
          title: "Helm (The k8s package manager)",
          type: "tool",
          link: "https://helm.sh/docs/",
        },
      ],
      paidResources: [
        {
          title: "Certified Kubernetes Administrator (CKA) Certification",
          link: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/",
        },
        {
          title: "Kubernetes for the Absolute Beginners (Udemy)",
          link: "https://www.udemy.com/course/learn-kubernetes/",
        },
      ],
      projects: [
        {
          title: "Deploy a k8s App",
          desc: "Use Minikube (local k8s) to deploy your Dockerized app using a Deployment and expose it with a Service.",
        },
      ],
      organizations: [
        { name: "CNCF", desc: "Cloud Native Computing Foundation (hosts Kubernetes)" },
      ],
    },

    // 6️⃣ Infrastructure as Code (IaC)
    {
      id: "iac",
      title: "Infrastructure as Code (IaC)",
      route: "/domains/devops/iac",
      summary:
        "Manage infrastructure with code. Learn to provision and manage servers, databases, and networks using code. Master Terraform (declarative) and Ansible (procedural).",
      freeResources: [
        {
          title: "Terraform Get Started (HashiCorp)",
          type: "course",
          link: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started",
        },
        {
          title: "Ansible Documentation",
          type: "text",
          link: "https://docs.ansible.com/ansible/latest/index.html",
        },
        {
          title: "Ansible vs. Terraform (Fireship)",
          type: "video",
          link: "https://www.youtube.com/watch?v=y38-m-zO6t8",
        },
      ],
      paidResources: [
        {
          title: "Terraform Associate Certification (HashiCorp)",
          link: "https://www.hashicorp.com/certification/terraform-associate",
        },
        {
          title: "Ansible for the Absolute Beginner (Udemy)",
          link: "https://www.udemy.com/course/ansible-for-the-absolute-beginner-hands-on-devops/",
        },
      ],
      projects: [
        {
          title: "Provision AWS S3 with Terraform",
          desc: "Write a Terraform file to create an S3 bucket and an IAM user with access to it.",
        },
        {
          title: "Configure Nginx with Ansible",
          desc: "Write an Ansible playbook to install, configure, and start Nginx on a VM.",
        },
      ],
      organizations: [
        { name: "HashiCorp", desc: "Creators of Terraform" },
        { name: "Red Hat", desc: "Maintains Ansible" },
      ],
    },

    // 7️⃣ Monitoring & Observability
    {
      id: "monitoring",
      title: "Monitoring & Observability",
      route: "/domains/devops/monitoring",
      summary:
        "If you can't see it, you can't fix it. Learn to collect metrics (Prometheus), visualize them (Grafana), and manage logs (ELK Stack/Loki). Understand the 3 pillars: Metrics, Logs, Traces.",
      freeResources: [
        {
          title: "Prometheus Docs",
          type: "text",
          link: "https://prometheus.io/docs/introduction/overview/",
        },
        {
          title: "Grafana Docs",
          type: "tool",
          link: "https://grafana.com/docs/grafana/latest/",
        },
        {
          title: "What is the ELK Stack? (Elastic)",
          type: "text",
          link: "https://www.elastic.co/what-is/elk-stack",
        },
      ],
      paidResources: [
        {
          title: "Prometheus, the Complete Guide (Udemy)",
          link: "https://www.udemy.com/course/prometheus-the-complete-guide/",
        },
      ],
      projects: [
        {
          title: "Prometheus+Grafana",
          desc: "Install Prometheus and Grafana, scrape metrics from a simple app, and build a dashboard.",
        },
      ],
      organizations: [
        { name: "Grafana Labs", desc: "Creators of Grafana and Loki" },
        { name: "Datadog", desc: "A leading (paid) observability platform" },
      ],
    },

    // 8️⃣ Cloud Platform (AWS, Azure, GCP)
    {
      id: "cloud",
      title: "Cloud Platform (AWS, Azure, GCP)",
      route: "/domains/devops/cloud",
      summary:
        "Master the platform where everything runs. Learn the core services of one major cloud provider (e.g., AWS: EC2, S3, VPC, IAM, RDS) and their managed DevOps services.",
      freeResources: [
        {
          title: "AWS Cloud Practitioner Essentials",
          type: "course",
          link: "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/",
        },
        {
          title: "Azure Fundamentals (Microsoft Learn)",
          type: "course",
          link: "https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/",
        },
      ],
      paidResources: [
        {
          title: "AWS Certified DevOps Engineer - Professional",
          link: "https://aws.amazon.com/certification/devops-engineer-professional/",
        },
        {
          title: "Microsoft Certified: DevOps Engineer Expert (AZ-400)",
          link: "https://learn.microsoft.com/en-us/certifications/devops-engineer/",
        },
      ],
      projects: [
        {
          title: "Full Cloud-Native Pipeline",
          desc: "Use AWS CodePipeline (or Azure DevOps) to build and deploy a containerized app to a managed service (EKS/AKS or ECS/ACI).",
        },
      ],
      organizations: [
        { name: "Amazon Web Services", desc: "The market-leading cloud provider" },
        { name: "Microsoft Azure", desc: "The second-largest cloud provider" },
      ],
    },

    // 9️⃣ Advanced: GitOps & Service Mesh
    {
      id: "advanced-gitops",
      title: "Advanced: GitOps & Service Mesh",
      route: "/domains/devops/advanced-gitops",
      summary:
        "Move to pro-level. Learn GitOps (using Git as the 'source of truth' for infrastructure) with tools like ArgoCD. Understand Service Mesh (Istio, Linkerd) for managing microservices.",
      freeResources: [
        {
          title: "What is GitOps? (GitLab)",
          type: "text",
          link: "https://about.gitlab.com/topics/devops/gitops/",
        },
        {
          title: "ArgoCD Documentation",
          type: "tool",
          link: "https://argo-cd.readthedocs.io/en/stable/",
        },
        {
          title: "What is Istio? (Service Mesh)",
          type: "text",
          link: "httpss.io/latest/docs/concepts/what-is-istio/",
        },
      ],
      paidResources: [
        {
          title: "GitOps Certification (CNCF)",
          link: "https://training.linuxfoundation.org/certification/gitops-associate-cgoa/",
        },
      ],
      projects: [
        {
          title: "ArgoCD Sync",
          desc: "Install ArgoCD on k8s and configure it to automatically sync a 'Hello World' app from a GitHub repo.",
        },
      ],
      organizations: [
        { name: "Argo Project", desc: "Provides GitOps tools for Kubernetes" },
      ],
    },

    // 1️⃣0️⃣ Advanced: SRE & FinOps
    {
      id: "advanced-sre",
      title: "Advanced: SRE & FinOps",
      route: "/domains/devops/advanced-sre",
      summary:
        "Adopt the 'Pro' mindset. Learn Site Reliability Engineering (SRE) principles (SLOs, SLIs, Error Budgets) from Google. Understand FinOps to manage and optimize cloud costs.",
      freeResources: [
        {
          title: "The SRE Book (Google)",
          type: "text",
          link: "https.com/landing",
        },
        {
          title: "What is FinOps? (FinOps Foundation)",
          type: "text",
          link: "https://www.finops.org/introduction/what-is-finops/",
        },
      ],
      paidResources: [
        {
          title: "FinOps Certified Practitioner (FOCP)",
          link: "https.com/certification/finops-certified-practitioner/",
        },
      ],
      projects: [
        {
          title: "Define SLOs/SLIs",
          desc: "For your simple web app, define a Service Level Objective (SLO) (e.g., 99.9% uptime) and a Service Level Indicator (SLI) (e.g., HTTP 200 response rate).",
        },
      ],
      organizations: [
        { name: "Google SRE", desc: "Defined the SRE practice" },
        { name: "FinOps Foundation", desc: "Standardizes cloud financial management" },
      ],
    },
  ],
};