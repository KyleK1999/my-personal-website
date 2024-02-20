// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('.top-nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
      }
  });
});

// Example projects data
const projectsData = [
  {
      title: "MonsterHunter",
      description: "Text-based adventure game with SQL database integration and CLI interaction.",
      link: "https://github.com/KyleK1999/MonsterHunter"
  },
  {
      title: "Musicle",
      description: "Spotify-like clone using external API for music artist documentation. Collaborated with Jonathan Reuben.",
      link: "https://github.com/KyleK1999/Musicle"
  },
  {
      title: "EZPC",
      description: "Capstone project for helping novices build computers easily using Bootstrap, Chart.js, Python, and React.",
      link: "https://github.com/KyleK1999/EZPC"
  }
];

const educationData = [
  {
      institution: "Flatiron School",
      degree: "Full Stack Web Development Certificate",
      duration: "06/2023 - 10/2023"
  },
  {
      institution: "San Francisco State University",
      degree: "BA in Political Science, Minor in International Relations",
      duration: "Graduated: 05/2022"
  }
];

// Function to dynamically load projects
function loadProjects() {
  const projectsContainer = document.getElementById('projects');
  projectsData.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.className = 'project';
      projectElement.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View on GitHub</a>
      `;
      projectsContainer.appendChild(projectElement);
  });
}

// Function to dynamically load experiences
function loadExperiences() {
  const experienceContainer = document.getElementById('experience');
  experienceData.forEach(exp => {
      const expElement = document.createElement('div');
      expElement.className = 'experience';
      expElement.innerHTML = `
          <h3>${exp.title} - ${exp.company}</h3>
          <p>${exp.period}, ${exp.location}</p>
          <p>${exp.description}</p>
          ${exp.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join(' ')}
      `;
      experienceContainer.appendChild(expElement);
  });
}

// Function to dynamically load education
function loadEducation() {
  const educationContainer = document.getElementById('education');
  educationData.forEach(edu => {
      const eduElement = document.createElement('div');
      eduElement.className = 'education-entry';
      eduElement.innerHTML = `
          <h3>${edu.institution}</h3>
          <p>${edu.degree} - ${edu.period}</p>
      `;
      educationContainer.appendChild(eduElement);
  });
}

// Call the loadExperiences and loadEducation functions when the document is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  loadProjects();
  loadExperiences();
  loadEducation();
});
