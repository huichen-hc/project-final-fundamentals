const projects = [
  {
    title: "Trattoria da Vinci",
    tech: "Javascript, HTML, CSS",
    author: "Hui Chen",
    gitUrl: "https://github.com/huichen-hc/Restaurant-page",
    liveUrl: "https://huichen-hc.github.io/Restaurant-page/ ",
    description:
      "This project is to create a restaurant page by mainly using JavaScript and Webpack",
  },
  {
    title: "Milestone",
    tech: "Javascript, HTML, CSS",
    author: "Ji Yoo",
    gitUrl: "https://github.com/jyy009/restaurant-page/tree/main",
    liveUrl: "https://jyy009.github.io/restaurant-page/",
    description:
      "A cafe homepage design using advanced CSS and HTML for responsiveness.",

  },
  {
    title: "About us",
    tech: "Javascript, HTML, CSS",
    author: "Joseph",
    gitUrl: "https://github.com/huichen-hc/project-final-fundamentals",
    liveUrl: "https://huichen-hc.github.io/Restaurant-page/ ",
    description:
      "This project is to create a restaurant page by mainly using JavaScript and Webpack",

  },
  {
    title: "Restaurant page",
    tech: "Javascript, HTML, CSS",
    author: "Yu Sun",
    gitUrl: "https://github.com/yusun-lab/My-home-page",
    liveUrl: "https://github.com/yusun-lab/My-home-page",
    description:
      "This project is to create a restaurant page by mainly using JavaScript and Webpack",

  },
];

const projectsContainer = document.getElementById("projects");

projects.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.innerHTML = `

              <div class="link-details">
                  <a href="#" class="toggle-details">
                    <p class="toggle-details-title">${project.title}</p>
                    <p class="toggle-details-author">-${project.author}</p>
                  </a>
              </div>
              <div class="details">
                  <p>${project.description}</p>
                  <div>
                    <p class="tech">Tech</p>
                    <p class="tech-p">${project.tech}</p>
                  </div>
                  <div class="proj-url-wrapper">
                    <p class="proj-tech-url">URL</p>
                    <a class="proj-git" href="#" target="_blank" rel="noopener noreferrer"
                    >Code</a>
                    <a
                    class="proj-live"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Live</a>
                  </div>
                </div>

        `;
  projectsContainer.appendChild(projectElement);
});

document.querySelectorAll(".toggle-details").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const details = this.parentNode.nextElementSibling;
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 500);

});