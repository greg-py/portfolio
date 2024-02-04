export const projects = [
  {
    title: "Apache Kafka Consumer Service",
    location: "XSOLIS, 2023",
    skills: ["Apache Kafka", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    accomplishments: [
      "Developed a service in Node.js with TypeScript for consuming messages on a Kafka event stream for healthcare data",
      "Configured a PostgreSQL connection to the service and wrote CRUD operations with Kafka message data",
      "Assisted in the deployment of the consumer service to Elastic Container Service (ECS) in AWS",
    ],
    link: null,
    linkText: null,
  },
  {
    title: "Arbitrator Intelligence Web Application",
    location: "Arbitrator Intelligence, 2021",
    skills: ["React", "Next.js", "PostgreSQL", "Auth0 SSO"],
    accomplishments: [
      "Developed a web application to host the marketing material, account management, and product features for a legal-tech startup",
      "Integrated user accounts with distinct plans using Auth0",
      "Built dashboards and data querying features with advanced filtering options using React",
      "Maintained API endpoints with authorization and business logic and data tables in PostgreSQL",
    ],
    link: "https://arbitratorintelligence.vercel.app/",
    linkText: "Archived Website",
  },
  {
    title: "PA State Legislature Analysis Web Application",
    location: "Personal, 2021",
    skills: [
      "Python",
      "Django",
      "Web Scraping",
      "JavaScript",
      "NLP",
      "PostgreSQL",
    ],
    accomplishments: [
      "Wrote scripts to scrape the Pennsylvania State Legislature website using Beautiful Soup and RabbitMQ to collect data on bills proposed",
      "Created a web application with Django to display recent bill data and used ChartJS to display visualizations of state legislature data",
      "Used topic analysis in Natural Language Processing with Python libraries to process bill text and descriptions and display topics of recent bills",
    ],
    link: "https://github.com/npmigreg/pa-general-assembly",
    linkText: "Github Repository",
  },
];
