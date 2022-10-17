const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://martinklapacz.org',
  title: 'Hello',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Martin Klapacz',
  role: "Master's degree student at TUM",
  description: '',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/martin-klapacz-b68280218/',
    github: 'https://github.com/MartinKlapacz',
  },
}

const projects = [
  // projects can be added and removed
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
  // todo: add more
]

const skills = [
  // skills can be added or removed
  'Java Spring',
  'Docker',
  'Nginx',
  'Rust',
  'gRPC',
  'Hibernate',
  'Node.js (Express)',
  'Postgres',
  'MongoDB',
  'Docker',
  'React.js',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'klapacz.martin@gmail.com',
}

export { header, about, projects, skills, contact }
