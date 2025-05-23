// app.js
document.addEventListener('DOMContentLoaded', function() {
  // Portfolio Data - Easy to update
  const portfolioData = {
    personalInfo: {
      name: "Mauricio Ricaldi",
      location: "Montreal, QC, Canada",
      logoText: "MR",
      profession: "Full Stack Developer",
      from: "From Peru"
    },
    
    projects: [
      {
        title: "Personal Portfolio",
        description: "A responsive portfolio website showcasing my work and skills.",
        url: "https://github.com/mricaldip/mauportfolio.github.io/"
      },
      {
        title: "Healthy Recipes",
        description: "A collection of nutritious recipes with filtering capabilities.",
        url: "https://github.com/mricaldip/healthyRecipies.github.io/"
      },
      {
        title: "Ideal Sleep Calculator",
        description: "A tool that calculates optimal sleep times based on sleep cycles.",
        url: "https://github.com/mricaldip/idealhourssleep.github.io/"
      },
      {
        title: "Mystery Organism",
        description: "A JavaScript project simulating DNA manipulation of fictional organisms.",
        url: "https://github.com/mricaldip/mysteryOrganism.github.io/"
      }
    ],
    
    socialLinks: [
    { 
      platform: "Facebook", 
      url: "https://facebook.com/mauricio.ricaldi/", 
      icon: "facebook" 
    },
    { 
      platform: "LinkedIn", 
      url: "https://linkedin.com/in/mricaldip/", 
      icon: "linkedin" 
    },
    { 
      platform: "Instagram", 
      url: "https://instagram.com/mricaldip/", 
      icon: "instagram" 
    },
    { 
      platform: "YouTube", 
      url: "https://youtube.com/@mauricioricaldi4569", 
      icon: "youtube" 
    }
    ]
  };

  // DOM Elements
  const elements = {
    headerLogo: document.querySelector('.logo'),
    projectsContainer: document.querySelector('.projects-list'),
    socialIconsContainer: document.querySelector('.social-icons'),
    locationContainer: document.createElement('div') // Will add location dynamically
  };

  // Initialize the application
  function init() {
    setupHeader();
    renderProjects();
    renderSocialLinks();
    setupScrollEffects();
    setupAnimations();
    updateCopyrightYear();
  }

  // Set up header with personal info
  function setupHeader() {
    const { name, logoText, location } = portfolioData.personalInfo;
    
    // Update logo
    elements.headerLogo.textContent = name;
    elements.headerLogo.setAttribute('data-logo-text', logoText);
    
    // Add location
    elements.locationContainer.className = 'location';
    elements.locationContainer.innerHTML = `
      <i class="fas fa-map-marker-alt"></i>
      ${location}
      <span class="from">${portfolioData.personalInfo.from}</span>
    `;
    elements.headerLogo.parentNode.insertBefore(
      elements.locationContainer, 
      elements.headerLogo.nextSibling
    );
  }

  // Render projects using Handlebars templates
  function renderProjects() {
    elements.projectsContainer.innerHTML = '';
    
    portfolioData.projects.forEach(project => {
      const projectHTML = templates.projectCard({
        title: project.title,
        description: project.description,
        url: project.url
      });
      
      elements.projectsContainer.insertAdjacentHTML('beforeend', projectHTML);
    });
  }

  // Render social links
  function renderSocialLinks() {
    elements.socialIconsContainer.innerHTML = '';
    
    portfolioData.socialLinks.forEach(link => {
    // Add link validation
    if (!link.url || !link.icon) return;
    
    const socialHTML = templates.socialLink({
      platform: link.platform,
      url: encodeURI(link.url), // URL encoding for safety
      icon: link.icon.toLowerCase() // ensure lowercase for Font Awesome
    });
    
    elements.socialIconsContainer.insertAdjacentHTML('beforeend', socialHTML);
  });
}

  // Scroll effects for header
  function setupScrollEffects() {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.querySelector('header').classList.add('scrolled');
      } else {
        document.querySelector('header').classList.remove('scrolled');
      }
    });
  }

  // Animation triggers
  function setupAnimations() {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.social-icons a').forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.1)';
    });
    link.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
  }

  function updateCopyrightYear() {
  const yearElement = document.querySelector('.current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

  // Start the app
  init();
});