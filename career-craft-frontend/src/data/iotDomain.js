// This file exports the complete data structure for the Internet of Things (IoT) domain.

import iot from '../assets/iot.JPG'
export const iotDomain = {
  id: "iot",
  title: "Internet of Things (IoT)",
  imageUrl:iot,
  description:
    "The Internet of Things (IoT) is a network of interconnected, embedded devices ('things') that collect and share data over the internet. This domain blends hardware engineering, networking, cloud computing, and data analytics to build smart systems, from home thermostats to industrial machinery.",
  quizRoute: "/quiz/iot",
  topics: [
    // 1️⃣ Introduction to IoT
    {
      id: "intro",
      title: "Introduction to IoT",
      route: "/domains/iot/intro",
      summary:
        "Learn the fundamental concepts, architecture (Device -> Gateway -> Cloud -> Application), and real-world applications of IoT in smart homes, cities, and industry.",
      freeResources: [
        {
          title: "What is IoT? (IBM)",
          type: "text",
          link: "https://www.ibm.com/topics/internet-of-things",
        },
        {
          title: "The 4 Stages of IoT Architecture",
          type: "text",
          link: "https://www.i-scoop.eu/internet-of-things-guide/iot-architecture-frameworks/",
        },
        {
          title: "IoT Full Course (YouTube - Simplilearn)",
          type: "video",
          link: "https://www.youtube.com/watch?v=h0gWfVCSG9E",
        },
      ],
      paidResources: [
        {
          title: "Coursera — Introduction to the Internet of Things (UCI)",
          link: "https://www.coursera.org/specializations/internet-of-things",
        },
      ],
      projects: [
        {
          title: "IoT System Design",
          desc: "On paper, diagram the 4-stage architecture for a 'smart refrigerator' (what it senses, how it connects, etc.).",
        },
      ],
      organizations: [
        { name: "IoT World Today", desc: "News and analysis on the IoT industry" },
      ],
    },

    // 2️⃣ IoT Hardware & Sensors
    {
      id: "hardware-sensors",
      title: "IoT Hardware & Sensors",
      route: "/domains/iot/hardware-sensors",
      summary:
        "Get hands-on with the 'Things.' Learn about microcontrollers (Arduino, ESP32), single-board computers (Raspberry Pi), sensors (temp, motion, light), and actuators (relays, motors).",
      freeResources: [
        {
          title: "Arduino Official Getting Started",
          type: "text",
          link: "https://www.arduino.cc/en/Guide",
        },
        {
          title: "ESP32 vs. Raspberry Pi (MakeUseOf)",
          type: "text",
          link: "https://www.makeuseof.com/esp32-vs-raspberry-pi-which-is-better/",
        },
        {
          title: "Top 10 IoT Sensors (TutorialsPoint)",
          type: "text",
          link: "https://www.tutorialspoint.com/iot/iot_sensors.htm",
        },
      ],
      paidResources: [
        {
          title: "Arduino Starter Kit (Hardware)",
          link: "https://store.arduino.cc/products/arduino-starter-kit-multi-language",
        },
        {
          title: "Raspberry Pi Full Course (Udemy)",
          link: "https://www.udemy.com/course/raspberry-pi-workshop/",
        },
      ],
      projects: [
        {
          title: "Blink an LED",
          desc: "The 'Hello World' of hardware: Use an Arduino or ESP32 to make an LED blink.",
        },
        {
          title: "Read a Sensor",
          desc: "Connect a DHT11 sensor to your microcontroller to read temperature and humidity data.",
        },
      ],
      organizations: [
        { name: "Arduino", desc: "Open-source electronics prototyping platform" },
        { name: "Raspberry Pi Foundation", desc: "Provides low-cost, high-performance computers" },
      ],
    },

    // 3️⃣ IoT Networking & Protocols
    {
      id: "networking-protocols",
      title: "IoT Networking & Protocols",
      route: "/domains/iot/networking-protocols",
      summary:
        "Learn how devices communicate. Understand device-level protocols (WiFi, Bluetooth, Zigbee, LoRaWAN) and application-layer protocols (MQTT, CoAP, HTTP).",
      freeResources: [
        {
          title: "What is MQTT? (HiveMQ)",
          type: "text",
          link: "https://www.hivemq.com/blog/what-is-mqtt/",
        },
        {
          title: "LoRaWAN vs. Zigbee (Semtech)",
          type: "text",
          link: "https://www.semtech.com/lora/lorawan-vs-zigbee",
        },
        {
          title: "MQTT Crash Course (YouTube - Fireship)",
          type: "video",
          link: "https://www.youtube.com/watch?v=E_3A0v-A-c8",
        },
      ],
      paidResources: [
        {
          title: "IoT Communication Protocols (Udemy)",
          link: "https://www.udemy.com/course/iot-communication-protocols/",
        },
      ],
      projects: [
        {
          title: "MQTT Publisher/Subscriber",
          desc: "Use an ESP32 to publish your sensor data to a public MQTT broker (like HiveMQ) and subscribe to it with a desktop client.",
        },
      ],
      organizations: [
        { name: "HiveMQ", desc: "A leading MQTT broker and platform" },
        { name: "LoRa Alliance", desc: "Manages the LoRaWAN standard" },
      ],
    },

    // 4️⃣ IoT Cloud Platforms
    {
      id: "cloud-platforms",
      title: "IoT Cloud Platforms",
      route: "/domains/iot/cloud-platforms",
      summary:
        "Learn where to send your data. Understand the role of IoT platforms for device management, data ingestion, and security (e.g., AWS IoT Core, Azure IoT Hub, Google Cloud IoT).",
      freeResources: [
        {
          title: "What is AWS IoT Core?",
          type: "text",
          link: "https://aws.amazon.com/iot-core/",
        },
        {
          title: "What is Azure IoT Hub?",
          type: "text",
          link: "https://learn.microsoft.com/en-us/azure/iot-hub/about-iot-hub",
        },
        {
          title: "Blynk (Simple IoT Platform)",
          type: "tool",
          link: "https://blynk.io/",
        },
      ],
      paidResources: [
        {
          title: "AWS IoT Core (Udemy)",
          link: "https://www.udemy.com/course/aws-iot-core/",
        },
        {
          title: "Azure IoT Developer (AZ-220) Certification",
          link: "https://learn.microsoft.com/en-us/certifications/exams/az-220/",
        },
      ],
      projects: [
        {
          title: "Connect to AWS IoT Core",
          desc: "Provision your ESP32 as a 'Thing' in AWS IoT Core and securely send your MQTT data to the cloud.",
        },
      ],
      organizations: [
        { name: "Amazon Web Services", desc: "Provides AWS IoT services" },
        { name: "Microsoft Azure", desc: "Provides Azure IoT services" },
      ],
    },

    // 5️⃣ Data Processing & Visualization
    {
      id: "data-visualization",
      title: "Data Processing & Visualization",
      route: "/domains/iot/data-visualization",
      summary:
        "Make your data useful. Learn to store time-series data (InfluxDB), route it (Node-RED), and build real-time dashboards (Grafana, Databox).",
      freeResources: [
        {
          title: "Node-RED Official Docs",
          type: "tool",
          link: "https://nodered.org/docs/",
        },
        {
          title: "What is Grafana?",
          type: "tool",
          link: "https://grafana.com/docs/grafana/latest/introduction/",
        },
        {
          title: "What is InfluxDB? (Time-Series DB)",
          type: "text",
          link: "https://www.influxdata.com/what-is-influxdb/",
        },
      ],
      paidResources: [
        {
          title: "Node-RED (Udemy)",
          link: "https://www.udemy.com/course/node-red-essentials/",
        },
        {
          title: "Grafana Dashboards (Udemy)",
          link: "https://www.udemy.com/course/grafana-dashboards-from-beginner-to-advanced-fast/",
        },
      ],
      projects: [
        {
          title: "Build a Weather Dashboard",
          desc: "Use Node-RED to get your sensor data, store it in InfluxDB, and build a Grafana dashboard to visualize it.",
        },
      ],
      organizations: [
        { name: "Grafana Labs", desc: "Creators of Grafana dashboards" },
        { name: "InfluxData", desc: "Creators of InfluxDB" },
      ],
    },

    // 6️⃣ Edge Computing
    {
      id: "edge-computing",
      title: "Edge Computing",
      route: "/domains/iot/edge-computing",
      summary:
        "Learn to process data *before* the cloud. Understand the need for edge computing (latency, bandwidth, cost) and tools like AWS Greengrass, Azure IoT Edge, and TinyML.",
      freeResources: [
        {
          title: "What is Edge Computing? (Cloudflare)",
          type: "text",
          link: "https://www.cloudflare.com/learning/serverless/what-is-edge-computing/",
        },
        {
          title: "AWS IoT Greengrass",
          type: "text",
          link: "https://aws.amazon.com/greengrass/",
        },
        {
          title: "TinyML (Machine Learning on Microcontrollers)",
          type: "text",
          link: "https://www.tinyml.org/",
        },
      ],
      paidResources: [
        {
          title: "TinyML (Coursera - Harvard)",
          link: "https://www.coursera.org/learn/tinyml",
        },
      ],
      projects: [
        {
          title: "Local MQTT Broker",
          desc: "Install an MQTT broker (like Mosquitto) on a Raspberry Pi to act as a local gateway for your devices.",
        },
      ],
      organizations: [
        { name: "TinyML Foundation", desc: "Promotes machine learning on edge devices" },
      ],
    },

    // 7️⃣ IoT Security
    {
      id: "security",
      title: "IoT Security",
      route: "/domains/iot/security",
      summary:
        "Learn to secure your devices. Understand the IoT attack surface, device hardening, secure boot, network encryption (TLS), and managing device certificates (PKI).",
      freeResources: [
        {
          title: "OWASP IoT Top 10",
          type: "text",
          link: "https://owasp.org/www-project-iot-top-10/",
        },
        {
          title: "The Mirai Botnet Explained (Wired)",
          type: "text",
          link: "https://www.wired.com/story/mirai-botnet-wired-guide/",
        },
        {
          title: "Securing IoT with X.509 Certificates (HiveMQ)",
          type: "text",
          link: "https://www.hivemq.com/blog/iot-security-basics-x509-certificates/",
        },
      ],
      paidResources: [
        {
          title: "IoT Security (Udemy)",
          link: "https://www.udemy.com/course/iot-security-and-privacy/",
        },
      ],
      projects: [
        {
          title: "Secure your MQTT Broker",
          desc: "Configure your Mosquitto broker to require a username, password, and TLS encryption.",
        },
      ],
      organizations: [
        { name: "OWASP", desc: "Manages the Top 10 IoT security vulnerabilities" },
      ],
    },

    // 8️⃣ Industrial IoT (IIoT)
    {
      id: "iiot",
      title: "Industrial IoT (IIoT)",
      route: "/domains/iot/iiot",
      summary:
        "Explore IoT in industry. Learn about SCADA, PLCs, predictive maintenance, and 'Digital Twins' for manufacturing, logistics, and agriculture.",
      freeResources: [
        {
          title: "What is IIoT? (IBM)",
          type: "text",
          link: "https://www.ibm.com/topics/iiot",
        },
        {
          title: "What is a Digital Twin?",
          type: "text",
          link: "https://www.twi-global.com/technical-knowledge/faqs/what-is-a-digital-twin",
        },
      ],
      paidResources: [
        {
          title: "IIoT (Coursera - University of Virginia)",
          link: "https://www.coursera.org/learn/iiot",
        },
      ],
      projects: [
        {
          title: "Predictive Maintenance Analysis",
          desc: "Research a case study of how IIoT sensors are used to predict motor failure in a factory.",
        },
      ],
      organizations: [
        { name: "Siemens", desc: "A leader in industrial automation and IIoT" },
      ],
    },

    // 9️⃣ Consumer IoT
    {
      id: "consumer-iot",
      title: "Consumer IoT",
      route: "/domains/iot/consumer-iot",
      summary:
        "Explore IoT for people. Learn about smart home ecosystems (Alexa, Google Home, Apple HomeKit), wearables (Fitbit), and user-centric design.",
      freeResources: [
        {
          title: "How Alexa Skills Work (Amazon)",
          type: "text",
          link: "https://developer.amazon.com/en-US/alexa/skills-kit/how-it-works",
        },
        {
          title: "Home Assistant (Open Source Home Automation)",
          type: "tool",
          link: "https://www.home-assistant.io/",
        },
      ],
      paidResources: [
        {
          title: "Build an Alexa Skill",
          link: "https://www.udemy.com/course/alexa-skill-development-bootcamp/",
        },
      ],
      projects: [
        {
          title: "Smart Light Project",
          desc: "Use an ESP32 and a relay to control a lamp by sending an MQTT command from your phone or PC.",
        },
      ],
      organizations: [
        { name: "Amazon", desc: "Creator of Alexa and the Echo ecosystem" },
      ],
    },

    // 1️⃣0️⃣ IoT Lifecycle & Management
    {
      id: "lifecycle",
      title: "IoT Lifecycle & Management",
      route: "/domains/iot/lifecycle",
      summary:
        "Learn to manage devices at scale. Understand device provisioning, Over-the-Air (OTA) firmware updates, and device fleet management.",
      freeResources: [
        {
          title: "What are OTA Updates? (ESP32 Docs)",
          type: "text",
          link: "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/system/ota.html",
        },
        {
          title: "The IoT Device Lifecycle (AWS)",
          type: "text",
          link: "https.com/whitepapers/aws-iot-device-management-and-the-iot-device-lifecycle/",
        },
      ],
      paidResources: [
        {
          title: "Full IoT Course (Udemy)",
          link: "https://www.udemy.com/course/complete-guide-to-build-iot-things/",
        },
      ],
      projects: [
        {
          title: "Perform an OTA Update",
          desc: "Follow a tutorial to update the code on your ESP32 over WiFi instead of using a USB cable.",
        },
      ],
      organizations: [
        { name: "Espressif", desc: "Creators of the popular ESP32 and ESP8266" },
      ],
    },
  ],
};