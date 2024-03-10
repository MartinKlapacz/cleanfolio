const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://martinklapacz.org',
  title: 'Hi',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Martin Klapacz',
  role: "Master's degree student at TUM",
  description: '',
  resume: 'https://martinklapacz.org/resume',
  social: {
    linkedin: 'https://www.linkedin.com/in/martin-klapacz-b68280218/',
    github: 'https://github.com/MartinKlapacz',
  },
}

const projects = [
  // projects can be added and removed
  {
    name: "Chord Network",
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
  ['Spring Boot (Java, Kotlin)', 'https://spring.io/projects/spring-boot'],
  ['Docker', 'https://www.docker.com/'],
  ['Tokio (Rust)', 'https://tokio.rs/'],
  ['gRPC (Java, Rust)', 'https://grpc.io/'],
  ['Hibernate', 'https://hibernate.org/'],
  ['Django', 'https://www.djangoproject.com/'],
  ['Django REST Framework', 'https://www.django-rest-framework.org/'],
  ['React', 'https://react.dev/'],
  ['Nginx', 'https://www.nginx.com/'],
  ['Statistics', ''],
  ['Postgres', 'https://www.postgresql.org/'],
  ['Elasticsearch', 'https://www.elastic.co/'],
]


const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'klapacz.martin@gmail.com',
}

export { header, about, projects, skills, contact }
