const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://martinklapacz.org',
  title: 'Hi',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Martin Klapacz',
  role: "Full-stack software engineer @ Check24 Financial Services",
  description: '',
  resume: 'https://martinklapacz.org/resume',
  social: {
    linkedin: 'https://www.linkedin.com/in/martin-klapacz-b68280218/',
    github: 'https://github.com/MartinKlapacz',
  },
}

const projects = [
  {
    name: 'Master Thesis: Implementation of a Billing Optimization Framework for Clinics',
    description: 'Implemented a framework and rule engine embedded into a Java spring boot microservice that I built from scratch. The framework is powered by a JSON based rule language automating medical billing (in cooperation with Avelios Medical Gmbh)',
    stack: ['Spring boot', 'Spring JPA', 'gRPC', 'Pydantic'],
  },
  {
    name: 'University Project: Making clinical data accessible through SnomedCT',
    description: 'Implemented a system allowing querying medical data with SnomedCT codes making use of the SnomedCT ontology. Designed and implemented an object rule language enabling automatic derivation of SnomedCT codes from medical data (in cooperation with Avelios Medical Gmbh)',
    stack: ['Rust', 'Elasticsearch', 'Spring boot', 'Spring JPA', 'gRPC'],
  },
  {
    name: "Rust Chord Network",
    description: "This is a fully functional implementation of a distributed hash table. Nodes of a Chord cluster form a ring where nodes can freely join and leave. Each node manages a key-value-storage and exposes a Tcp interface for PUT and GET requests. ",
    stack: [
        "Rust", "Tokio", "gRPC", "AsyncIO", "Tonic"
    ],
    sourceCode: "https://github.com/MartinKlapacz/Chord"
  },
  {
    name: 'Bachelor Thesis: Multifidelity Gaussian Processes for Uncertainty Quantification',
    description:
      "This project was part of my Bachelor's thesis and provides parameterized implementations of various multi-fidelity Gaussian Process Regression algorithms.",
    stack: [
      'Gaussian Processes',
      'Uncertainty Quantification',
      'Statistics',
      'Python',
    ],
    sourceCode: 'https://github.com/MartinKlapacz/multifidelity-datafusion-GPs',
  },
  {
    name: 'Interactive Linear Regression',
    description:
        "A little game to play around with Linear Regression. You can add points and see how this affects the current curve.",
    stack: ['Numpy'],
    sourceCode: 'https://github.com/MartinKlapacz/np-array-maps',
  },
  {
    name: 'My Dockerized Cloud Setup',
    description:
        "This is the configuration of some private services I host on my Strato instance (Linux v10-8).",
    stack: ['Docker, Nginx, MakeFile'],
    sourceCode: 'https://github.com/MartinKlapacz/my-cloud-server-setup',
  },
  {
    name: 'Pacman Hunter',
    description:
        "My very first Python project I created when I started to learn coding",
    stack: ['Pygame'],
    sourceCode: 'https://github.com/MartinKlapacz/PacManHunter',
  }
]

const skills = [
  // skills can be added or removed
  ['Spring Framework', 'https://docs.spring.io/spring-framework/reference/index.html'],
  ['Spring Data JDBC', 'https://docs.spring.io/spring-data/relational/reference/'],
  ['Spring Data JPA', 'https://docs.spring.io/spring-data/jpa/reference/'],
  ['GraphQl Java', 'https://www.graphql-java.com/'],
  ['React', 'https://react.dev/'],
  ['Django', 'https://www.djangoproject.com/'],
  ['Django REST Framework', 'https://www.django-rest-framework.org/'],
  ['Docker', 'https://www.docker.com/'],
  ['Tokio (Rust)', 'https://tokio.rs/'],
  ['gRPC (Java, Rust)', 'https://grpc.io/'],
  ['Statistics', ''],
  ['Postgres', 'https://www.postgresql.org/'],
  ['MongoDB', 'https://www.mongodb.com/'],
]


const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'klapacz.martin@gmail.com',
}

export { header, about, projects, skills, contact }
