// This file exports the complete data structure for the Cloud Computing domain.

import cloudcomputing from '../assets/cloudcomputing.JPG'

export const cloudComputingDomain = {
  id: "cloudcomputing",
  title: "Cloud Computing",
  imageUrl:cloudcomputing,
  description:
    "Cloud Computing is the on-demand delivery of IT resources—including servers, storage, databases, networking, and software—over the Internet ('the cloud') with pay-as-you-go pricing. It allows companies to innovate faster and be more flexible without managing physical hardware.",
  quizRoute: "/quiz/cloudcomputing",
  topics: [
    // 1️⃣ Introduction to Cloud
    {
      id: "intro",
      title: "Introduction to Cloud Computing",
      route: "/domains/cloudcomputing/intro",
      summary:
        "Learn the fundamental concepts: What is the cloud? What are the service models (IaaS, PaaS, SaaS) and deployment models (Public, Private, Hybrid)?",
      freeResources: [
        {
          title: "What is Cloud Computing? (AWS)",
          type: "text",
          link: "https://aws.amazon.com/what-is-cloud-computing/",
        },
        {
          title: "IaaS, PaaS, SaaS Explained (YouTube - Fireship)",
          type: "video",
          link: "https://www.youtube.com/watch?v=kga1-G8118A",
        },
        {
          title: "Azure Fundamentals (Microsoft Learn)",
          type: "course",
          link: "https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/",
        },
      ],
      paidResources: [
        {
          title: "AWS Cloud Practitioner Essentials (Coursera)",
          link: "https://www.coursera.org/learn/aws-cloud-practitioner-essentials",
        },
        {
          title: "Introduction to Cloud Computing (Udemy)",
          link: "https://www.udemy.com/course/introduction-to-cloud-computing-on-amazon-aws-for-beginners/",
        },
      ],
      projects: [
        {
          title: "Service Model Analysis",
          desc: "For a given app (e.g., email), describe how you would build it using IaaS vs. PaaS vs. buying it as SaaS.",
        },
      ],
      organizations: [
        { name: "Amazon Web Services", desc: "The dominant public cloud provider" },
        { name: "Microsoft Azure", desc: "The second-largest cloud provider" },
        { name: "Google Cloud Platform", desc: "A major cloud provider strong in data/ML" },
      ],
    },

    // 2️⃣ Core Compute Services
    {
      id: "compute",
      title: "Core Compute Services",
      route: "/domains/cloudcomputing/compute",
      summary:
        "Learn how to run code in the cloud, from Virtual Machines (VMs) to Containers and Serverless functions.",
      freeResources: [
        {
          title: "What is Amazon EC2? (VMs)",
          type: "text",
          link: "https://aws.amazon.com/ec2/what-is-ec2/",
        },
        {
          title: "What is Serverless? (Cloudflare)",
          type: "text",
          link: "https://www.cloudflare.com/learning/serverless/what-is-serverless/",
        },
        {
          title: "What are Containers & Kubernetes? (AWS)",
          type: "text",
          link: "https://aws.amazon.com/containers/",
        },
      ],
      paidResources: [
        {
          title: "A Practical Guide to AWS Lambda (Udemy)",
          link: "https://www.udemy.com/course/aws-lambda-a-practical-guide/",
        },
      ],
      projects: [
        {
          title: "Launch a Web Server",
          desc: "Launch a simple 't2.micro' EC2 instance (or Azure VM) and host a static HTML page.",
        },
        {
          title: "Deploy a Serverless Function",
          desc: "Create an AWS Lambda (or Azure Function) that returns 'Hello World' when called.",
        },
      ],
      organizations: [
        { name: "Docker", desc: "The standard for containerization" },
        { name: "CNCF", desc: "Cloud Native Computing Foundation (hosts Kubernetes)" },
      ],
    },

    // 3️⃣ Cloud Storage & Databases
    {
      id: "storage-databases",
      title: "Cloud Storage & Databases",
      route: "/domains/cloudcomputing/storage-databases",
      summary:
        "Learn where to store your data. Understand Object Storage (S3, Blob), Block Storage (EBS), and managed SQL (RDS) & NoSQL (DynamoDB) databases.",
      freeResources: [
        {
          title: "What is Amazon S3? (Object Storage)",
          type: "text",
          link: "https://aws.amazon.com/s3/",
        },
        {
          title: "What is Amazon RDS? (Managed SQL)",
          type: "text",
          link: "https://aws.amazon.com/rds/",
        },
        {
          title: "What is DynamoDB? (Managed NoSQL)",
          type: "text",
          link: "https://aws.amazon.com/dynamodb/",
        },
      ],
      paidResources: [
        {
          title: "Azure Storage Fundamentals (Microsoft Learn)",
          link: "https://learn.microsoft.com/en-us/training/modules/azure-storage-fundamentals/",
        },
      ],
      projects: [
        {
          title: "Host a Static Website on S3",
          desc: "Create an S3 bucket, upload your HTML/CSS files, and configure it for static website hosting.",
        },
      ],
      organizations: [
        { name: "MongoDB", desc: "Popular NoSQL database, offered as a cloud service" },
      ],
    },

    // 4️⃣ Cloud Networking
    {
      id: "networking",
      title: "Cloud Networking",
      route: "/domains/cloudcomputing/networking",
      summary:
        "Learn to build your own private network in the cloud. Understand Virtual Private Clouds (VPC/VNet), Subnets, Security Groups, and Load Balancers.",
      freeResources: [
        {
          title: "What is a VPC? (AWS)",
          type: "text",
          link: "https.com/vpc/",
        },
        {
          title: "What is a Load Balancer? (AWS)",
          type: "text",
          link: "https://aws.amazon.com/elastic-load-balancing/",
        },
        {
          title: "Azure Networking (YouTube - John Savill)",
          type: "video",
          link: "https://www.youtube.com/watch?v=02-9bX-g7-o",
        },
      ],
      paidResources: [
        {
          title: "AWS Certified Advanced Networking (Specialty)",
          link: "https://aws.amazon.com/certification/certified-advanced-networking-specialty/",
        },
      ],
      projects: [
        {
          title: "Build a 2-Tier VPC",
          desc: "Design a VPC with a public subnet (for a web server) and a private subnet (for a database).",
        },
      ],
      organizations: [
        { name: "Cloudflare", desc: "Major provider of cloud networking and security services" },
      ],
    },

    // 5️⃣ Identity & Access Management (IAM)
    {
      id: "iam",
      title: "Identity & Access Management (IAM)",
      route: "/domains/cloudcomputing/iam",
      summary:
        "Control who can do what in your cloud. Learn about Users, Groups, Roles, Policies, and the Principle of Least Privilege.",
      freeResources: [
        {
          title: "What is IAM? (AWS)",
          type: "text",
          link: "https://aws.amazon.com/iam/",
        },
        {
          title: "Azure Active Directory (Microsoft)",
          type: "text",
          link: "https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-whatis",
        },
      ],
      paidResources: [
        {
          title: "AWS Certified Security - Specialty (Certification)",
          link: "https://aws.amazon.com/certification/certified-security-specialty/",
        },
      ],
      projects: [
        {
          title: "Create a 'Read-Only' User",
          desc: "Create an IAM policy and user that has read-only access to your S3 buckets, but no write permissions.",
        },
      ],
      organizations: [
        { name: "Okta", desc: "A leading identity management provider" },
      ],
    },

    // 6️⃣ Cloud Architecture & Design
    {
      id: "architecture",
      title: "Cloud Architecture & Design",
      route: "/domains/cloudcomputing/architecture",
      summary:
        "Learn how to design robust systems. Understand the 'Well-Architected Framework' (Cost, Performance, Security, etc.), High Availability, and Fault Tolerance.",
      freeResources: [
        {
          title: "AWS Well-Architected Framework",
          type: "text",
          link: "https://aws.amazon.com/architecture/well-architected/",
        },
        {
          title: "Azure Well-Architected Framework",
          type: "text",
          link: "https://learn.microsoft.com/en-us/azure/architecture/framework/",
        },
      ],
      paidResources: [
        {
          title: "AWS Certified Solutions Architect - Associate (SAA-C03)",
          link: "https.com/certification/certified-solutions-architect-associate/",
        },
      ],
      projects: [
        {
          title: "Design a High-Availability App",
          desc: "Draw an architecture diagram for a website that can survive one server failing (Hint: use a load balancer and multiple servers).",
        },
      ],
      organizations: [
        { name: "Gartner", desc: "Analyst firm that defines cloud architecture best practices" },
      ],
    },

    // 7️⃣ Cloud Security
    {
      id: "security",
      title: "Cloud Security",
      route: "/domains/cloudcomputing/security",
      summary:
        "Learn to secure your cloud. Understand the 'Shared Responsibility Model', encryption (at-rest/in-transit), key management (KMS), and DDoS protection.",
      freeResources: [
        {
          title: "Shared Responsibility Model (AWS)",
          type: "text",
          link: "https.com/compliance/shared-responsibility-model/",
        },
        {
          title: "AWS Key Management Service (KMS)",
          type: "text",
          link: "https://aws.amazon.com/kms/",
        },
        {
          title: "Azure Security Center (Microsoft)",
          type: "text",
          link: "https.com/services/security-center/",
        },
      ],
      paidResources: [
        {
          title: "(ISC)² CCSP Certification",
          link: "https.com/Certifications/CCSP",
        },
      ],
      projects: [
        {
          title: "Secure an S3 Bucket",
          desc: "Configure an S3 bucket to be fully private, enable server-side encryption, and block all public access.",
        },
      ],
      organizations: [
        { name: "Palo Alto Networks", desc: "Leader in cloud security solutions" },
      ],
    },

    // 8️⃣ DevOps & Infrastructure as Code (IaC)
    {
      id: "devops-iac",
      title: "DevOps & Infrastructure as Code",
      route: "/domains/cloudcomputing/devops-iac",
      summary:
        "Manage your cloud with code. Learn Infrastructure as Code (IaC) with Terraform or CloudFormation, and build CI/CD pipelines.",
      freeResources: [
        {
          title: "What is Infrastructure as Code? (HashiCorp)",
          type: "text",
          link: "https://www.hashicorp.com/overview/infrastructure-as-code",
        },
        {
          title: "Terraform Get Started (HashiCorp)",
          type: "course",
          link: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started",
        },
        {
          title: "What is CI/CD? (GitHub Actions)",
          type: "text",
          link: "https://github.com/features/actions",
        },
      ],
      paidResources: [
        {
          title: "Terraform Associate Certification (HashiCorp)",
          link: "https://www.hashicorp.com/certification/terraform-associate",
        },
      ],
      projects: [
        {
          title: "Deploy an S3 Bucket with Terraform",
          desc: "Write a simple Terraform file to create and configure an S3 bucket instead of using the console.",
        },
      ],
      organizations: [
        { name: "HashiCorp", desc: "Creators of Terraform" },
        { name: "GitHub", desc: "Provides GitHub Actions for CI/CD" },
      ],
    },

    // 9️⃣ Cloud Monitoring & Cost Management
    {
      id: "monitoring-cost",
      title: "Monitoring & Cost Management",
      route: "/domains/cloudcomputing/monitoring-cost",
      summary:
        "Learn to watch your apps and your wallet. Understand logging (CloudWatch, Azure Monitor), create alerts, and use cost calculators & budgets.",
      freeResources: [
        {
          title: "Amazon CloudWatch (Monitoring)",
          type: "text",
          link: "https.com/cloudwatch/",
        },
        {
          title: "AWS Cost Management",
          type: "text",
          link: "https://aws.amazon.com/cost-management/",
        },
        {
          title: "Azure Cost Management (Microsoft)",
          type: "text",
          link: "https.com/services/cost-management/",
        },
      ],
      paidResources: [
        {
          title: "Datadog (Monitoring Platform)",
          link: "https.com/product/",
        },
      ],
      projects: [
        {
          title: "Create a Billing Alert",
          desc: "Set up a billing alert in AWS or Azure to notify you via email if your spending is projected to exceed $10.",
        },
      ],
      organizations: [
        { name: "Datadog", desc: "A leading 3rd-party monitoring platform" },
        { name: "Splunk", desc: "A leading platform for log analysis" },
      ],
    },

    // 1️⃣0️⃣ Certifications & Careers
    {
      id: "certifications",
      title: "Certifications & Careers",
      route: "/domains/cloudcomputing/certifications",
      summary:
        "Plan your career. Learn the certification paths for AWS, Azure, and GCP, and understand roles like Cloud Engineer, Solutions Architect, and DevOps Engineer.",
      freeResources: [
        {
          title: "AWS Certification Paths",
          type: "text",
          link: "https.com/certification/",
        },
        {
          title: "Azure Certification Paths",
          type: "text",
          link: "https://learn.microsoft.com/en-us/certifications/",
        },
        {
          title: "Google Cloud Certification Paths",
          type: "text",
          link: "https.com/certification",
        },
      ],
      paidResources: [
        {
          title: "Ultimate AWS SAA-C03 (Udemy - Stephane Maarek)",
          link: "https.com/course/aws-certified-solutions-architect-associate-saa-c03/",
        },
        {
          title: "AZ-900 Azure Fundamentals (Udemy)",
          link: "https://www.udemy.com/course/microsoft-azure-az-900-certification-exam-prep/",
        },
      ],
      projects: [
        {
          title: "Build Your Career Plan",
          desc: "Choose one cloud platform (AWS, Azure, or GCP) and map out the first two certifications you would take.",
        },
      ],
      organizations: [
        { name: "A Cloud Guru", desc: "Popular platform for cloud certification training" },
      ],
    },
  ],
};