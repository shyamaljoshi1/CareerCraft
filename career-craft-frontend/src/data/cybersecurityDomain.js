
import { machineLearningDomain } from "./machinelearningDomain";
import { softwareDevelopmentDomain } from "./softwaredevelopmentDomain";
import { cloudComputingDomain } from "./cloudcomputingDomain";
import {blockchainDomain} from "./blockchainDomain"
import {iotDomain} from "./iotDomain"
import {devopsDomain} from "./devopsDomain"
import { dataScienceDomain } from "./datascienceDomain";
import cybersecurity from '../assets/cybersecurity.jpg'



export const cybersecurityDomain = {
  id: "cybersecurity",
  title: "Cybersecurity",
  quizRoute:"/quiz/cybersecurity",
  imageUrl:cybersecurity,
  description:
    "Cybersecurity protects systems, networks, and data from digital threats. It combines technology, processes, and human expertise to prevent attacks, detect breaches, and ensure data integrity. The field spans areas such as ethical hacking, forensics, SIEM, and cloud security.",
  quizRoute: "/quiz/cybersecurity",
  topics: [
    // 1️⃣ Introduction to Cybersecurity
    {
      id: "intro",
      title: "Introduction to Cybersecurity",
      route: "/domains/cybersecurity/intro",
      summary:
        "Get a complete overview of the cybersecurity landscape — its importance, threats, goals, and career paths.",
      freeResources: [
        {
          title: "Cybersecurity Basics (IBM)",
          type: "text",
          link: "https://www.ibm.com/topics/cybersecurity",
        },
        {
          title: "Introduction to Cybersecurity (Cisco Networking Academy)",
          type: "course",
          link: "https://www.netacad.com/courses/security/introduction-cybersecurity",
        },
        {
          title: "Cybersecurity 101 (YouTube - Simplilearn)",
          type: "video",
          link: "https://www.youtube.com/watch?v=inWWhr5tnEA",
        },
      ],
      paidResources: [
        {
          title: "Coursera — Introduction to Cybersecurity by NYU",
          link: "https://www.coursera.org/learn/intro-cyber-security",
        },
        {
          title: "Udemy — Cybersecurity for Beginners",
          link: "https://www.udemy.com/course/cybersecurity-for-beginners/",
        },
      ],
      projects: [
        {
          title: "Cyber Threat Report",
          desc: "Research and summarize top global cyber threats of the past year.",
        },
      ],
      organizations: [
        { name: "CISA", desc: "Cybersecurity and Infrastructure Security Agency" },
        { name: "CERT", desc: "Computer Emergency Response Team" },
      ],
    },

    // 2️⃣ Networking Fundamentals
    {
      id: "networking",
      title: "Networking Fundamentals",
      route: "/domains/cybersecurity/networking",
      summary:
        "Learn how data travels through networks, key protocols, and how attackers exploit network weaknesses.",
      freeResources: [
        {
          title: "Computer Networking Basics (GeeksforGeeks)",
          type: "text",
          link: "https://www.geeksforgeeks.org/computer-network-tutorials/",
        },
        {
          title: "OSI Model Explained (YouTube - PowerCert)",
          type: "video",
          link: "https://www.youtube.com/watch?v=vv4y_uOneC0",
        },
      ],
      paidResources: [
        {
          title: "Udemy — Networking Fundamentals",
          link: "https://www.udemy.com/course/comptia-network-certification-n10-008/",
        },
      ],
      projects: [
        {
          title: "Packet Sniffer using Python",
          desc: "Capture and analyze network packets using Scapy or Wireshark.",
        },
      ],
      organizations: [
        { name: "Cisco", desc: "Global leader in networking and network security" },
      ],
    },

    // 3️⃣ Linux for Security
    {
      id: "linux",
      title: "Linux for Security",
      route: "/domains/cybersecurity/linux",
      summary:
        "Linux is the backbone of cybersecurity. Learn essential commands, file permissions, and server hardening.",
      freeResources: [
        {
          title: "Linux Command Handbook",
          type: "text",
          link: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
        },
        {
          title: "Linux Security Basics (YouTube - NetworkChuck)",
          type: "video",
          link: "https://www.youtube.com/watch?v=ivlTiwUhn5I",
        },
      ],
      paidResources: [
        {
          title: "Linux Administration Bootcamp (Udemy)",
          link: "https://www.udemy.com/course/linux-administration-bootcamp/",
        },
      ],
      projects: [
        {
          title: "Bash Script for Log Monitoring",
          desc: "Automate security log monitoring using Bash and grep.",
        },
      ],
      organizations: [
        { name: "Kali Linux", desc: "Popular OS for penetration testing and forensics" },
      ],
    },

    // 4️⃣ Cryptography
    {
      id: "crypto",
      title: "Cryptography",
      route: "/domains/cybersecurity/crypto",
      summary:
        "Understand the science of securing communication through encryption, hashing, and key management.",
      freeResources: [
        {
          title: "Cryptography Tutorial (GeeksforGeeks)",
          type: "text",
          link: "https://www.geeksforgeeks.org/cryptography-and-network-security/",
        },
        {
          title: "Introduction to Cryptography (YouTube - Computerphile)",
          type: "video",
          link: "https://www.youtube.com/watch?v=NmM9HA2MQGI",
        },
      ],
      paidResources: [
        {
          title: "Coursera — Cryptography I (Stanford University)",
          link: "https://www.coursera.org/learn/crypto",
        },
      ],
      projects: [
        {
          title: "RSA Encryption Tool",
          desc: "Implement RSA encryption and decryption in Python.",
        },
        {
          title: "File Integrity Checker",
          desc: "Verify file integrity using SHA256 hashing.",
        },
      ],
      organizations: [
        { name: "NIST", desc: "Defines global cryptographic standards" },
        { name: "OWASP", desc: "Provides cryptography best practices for web apps" },
      ],
    },

    // 5️⃣ Web Application Security
    {
      id: "web-security",
      title: "Web Application Security",
      route: "/domains/cybersecurity/web-security",
      summary:
        "Explore vulnerabilities like SQL Injection, XSS, and CSRF, and learn to protect web applications using OWASP guidelines.",
      freeResources: [
        {
          title: "OWASP Top 10",
          type: "text",
          link: "https://owasp.org/www-project-top-ten/",
        },
        {
          title: "Web Security Basics (YouTube - HackerSploit)",
          type: "video",
          link: "https://www.youtube.com/watch?v=k1zGz55EQ7I",
        },
      ],
      paidResources: [
        {
          title: "PortSwigger Academy (Free + Paid Labs)",
          link: "https://portswigger.net/web-security",
        },
      ],
      projects: [
        {
          title: "Vulnerable Web App Lab",
          desc: "Setup and exploit DVWA to practice real-world attacks.",
        },
      ],
      organizations: [
        { name: "OWASP", desc: "Global non-profit focused on web security awareness" },
      ],
    },

    // 6️⃣ Ethical Hacking & PenTesting
    {
      id: "pentesting",
      title: "Ethical Hacking & PenTesting",
      route: "/domains/cybersecurity/pentesting",
      summary:
        "Learn to ethically find and exploit vulnerabilities in systems to strengthen their defenses.",
      freeResources: [
        {
          title: "TryHackMe (Free Labs)",
          link: "https://tryhackme.com/",
        },
        {
          title: "Penetration Testing Basics (YouTube - HackerSploit)",
          link: "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
        },
      ],
      paidResources: [
        {
          title: "EC-Council — CEH Certification",
          link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
        },
      ],
      projects: [
        {
          title: "Vulnerability Assessment Report",
          desc: "Scan a test network using Nmap and prepare an assessment report.",
        },
      ],
      organizations: [
        { name: "Offensive Security", desc: "Creators of Kali Linux and OSCP certification" },
      ],
    },

    // 7️⃣ Incident Response & Forensics
    {
      id: "forensics",
      title: "Incident Response & Digital Forensics",
      route: "/domains/cybersecurity/forensics",
      summary:
        "Learn how to respond to security incidents and analyze digital evidence using forensic tools.",
      freeResources: [
        {
          title: "NIST Incident Response Guidelines",
          type: "text",
          link: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf",
        },
        {
          title: "Digital Forensics Basics (YouTube - DFIRScience)",
          type: "video",
          link: "https://www.youtube.com/watch?v=6eLr1K9J1Sg",
        },
      ],
      paidResources: [
        {
          title: "Coursera — Digital Forensics Essentials",
          link: "https://www.coursera.org/learn/digital-forensics",
        },
      ],
      projects: [
        {
          title: "Log-based Intrusion Detection",
          desc: "Create a script to detect anomalies in system logs.",
        },
      ],
      organizations: [
        { name: "SANS Institute", desc: "Global leader in digital forensics training" },
      ],
    },

    // 8️⃣ Cloud & Network Security
    {
      id: "cloud",
      title: "Cloud & Network Security",
      route: "/domains/cybersecurity/cloud",
      summary:
        "Protect cloud-based infrastructure and network environments using modern tools and policies.",
      freeResources: [
        {
          title: "AWS Cloud Security Fundamentals",
          link: "https://aws.amazon.com/security/",
        },
      ],
      paidResources: [
        {
          title: "Udemy — AWS Certified Security Specialty",
          link: "https://www.udemy.com/course/aws-certified-security-specialty/",
        },
      ],
      projects: [
        {
          title: "Secure AWS Environment",
          desc: "Set up IAM roles, security groups, and monitor logs for a cloud instance.",
        },
      ],
      organizations: [
        { name: "AWS Security", desc: "Offers security best practices for cloud users" },
        { name: "Microsoft Defender", desc: "Cloud-native threat protection platform" },
      ],
    },

    // 9️⃣ SIEM & Log Analysis
    {
      id: "siem",
      title: "SIEM & Log Analysis",
      route: "/domains/cybersecurity/siem",
      summary:
        "Understand how Security Information and Event Management tools help detect and analyze threats in real time.",
      freeResources: [
        {
          title: "Introduction to SIEM (LogRhythm Blog)",
          link: "https://logrhythm.com/blog/what-is-siem/",
        },
        {
          title: "ELK Stack Tutorial for Beginners (YouTube - Tech TFQ)",
          link: "https://www.youtube.com/watch?v=pgWSdVt8__Y",
        },
      ],
      paidResources: [
        {
          title: "SIEM Administration (Udemy)",
          link: "https://www.udemy.com/course/siem-administration/",
        },
      ],
      projects: [
        {
          title: "SIEM Log Dashboard",
          desc: "Build a log visualization dashboard using the ELK Stack.",
        },
      ],
      organizations: [
        { name: "Splunk", desc: "Leading SIEM platform for log analysis" },
        { name: "IBM QRadar", desc: "Enterprise-grade SIEM for threat detection" },
      ],
    },

    // 🔟 Certifications & Career Prep
    {
      id: "certifications",
      title: "Certifications & Career Prep",
      route: "/domains/cybersecurity/certifications",
      summary:
        "Plan your career path with key certifications, skill-building resources, and interview prep guides.",
      freeResources: [
        {
          title: "Cybersecurity Career Roadmap (NIST NICE Framework)",
          link: "https://www.nist.gov/itl/applied-cybersecurity/nice/resources/framework",
        },
      ],
      paidResources: [
        {
          title: "CompTIA Security+",
          link: "https://www.comptia.org/certifications/security",
        },
        {
          title: "Certified Information Systems Security Professional (CISSP)",
          link: "https://www.isc2.org/Certifications/CISSP",
        },
      ],
      projects: [
        {
          title: "Cybersecurity Resume + Portfolio",
          desc: "Create a professional cybersecurity portfolio with GitHub projects and certifications.",
        },
      ],
      organizations: [
        { name: "(ISC)²", desc: "Provides CISSP and other global cybersecurity certifications" },
        { name: "CompTIA", desc: "Offers Security+, Network+, and related certifications" },
      ],
    },
  ],
};


// ... (The big 'cybersecurityDomain' JSON object is above this) ...

// We also create a helper to easily find data.
// Add your other domains (machineLearningDomain, etc.) to this object.
const allDomains = {
  cybersecurity: cybersecurityDomain,
  machinelearning: machineLearningDomain,
  softwaredevelopment: softwareDevelopmentDomain,
  cloudcomputing:cloudComputingDomain,
  blockchain:blockchainDomain,
  devops:devopsDomain,
  datascience:dataScienceDomain,
};

 export const getDomainData = (domainId) => {
  return allDomains[domainId] || null;
};

// --- THIS IS THE FUNCTION YOU ARE ASKING ABOUT ---
// It finds a specific topic (like 'intro') inside a specific domain
// (like 'cybersecurity')
export const getTopicData = (domainId, topicId) => {
  const domain = getDomainData(domainId);
  if (!domain) return null;
  // This looks through the domain's 'topics' array to find the one with the matching id
  return domain.topics.find((topic) => topic.id === topicId) || null;
};

