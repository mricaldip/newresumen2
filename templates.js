// templates.js
const templates = {
  projectCard: Handlebars.compile(`
    <li class="project-card">
      <h3><a href="{{url}}" target="_blank">{{title}}</a></h3>
      <p>{{description}}</p>
      <a href="{{url}}" target="_blank" class="github-link">
        View on GitHub <i class="fab fa-github"></i>
      </a>
    </li>
  `),
  
  socialLink: Handlebars.compile(`
    <a 
      href="{{url}}" 
      target="_blank" 
      aria-label="{{platform}}"
      rel="noopener noreferrer"
    >
      <i class="fab fa-{{icon}}"></i>
    </a>
  `)
};

// Register custom Handlebars helpers
Handlebars.registerHelper('capitalize', function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});