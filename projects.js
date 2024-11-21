const projects = [
  {
    title: "Trattoria da Vinci",
    tech: "Javascript, HTML, CSS",
    author: "Hui Chen",
    gitUrl: "https://github.com/huichen-hc/Restaurant-page",
    liveUrl: "https://huichen-hc.github.io/Restaurant-page/ ",
    description:
      "This project is to create a restaurant page by mainly using JavaScript and Webpack",
    id: "1",
  },
  {
    title: "Milestone",
    tech: "Javascript, HTML, CSS",
    author: "Ji Yoo",
    gitUrl: "https://github.com/jyy009/restaurant-page/tree/main",
    liveUrl: "https://jyy009.github.io/restaurant-page/",
    description:
      "A cafe homepage design using advanced CSS and HTML for responsiveness.",
    id: "2",
  },
  {
    title: "Restaurant page",
    tech: "Javascript, HTML, CSS",
    author: "Joseph",
    gitUrl: "https://github.com/huichen-hc/Restaurant-page",
    liveUrl: "https://huichen-hc.github.io/Restaurant-page/ ",
    description:
      "This project is to create a restaurant page by mainly using JavaScript and Webpack",
    id: "3",
  },
  {
    title: "Restaurant page",
    tech: "Javascript, HTML, CSS",
    author: "Yu",
    gitUrl: "https://github.com/huichen-hc/Restaurant-page",
    liveUrl: "https://huichen-hc.github.io/Restaurant-page/ ",
    description:
      "This project is to create a restaurant page by mainly using JavaScript and Webpack",
    id: "4",
  },
];

const projectsContainer = document.getElementById("projects");

projects.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.innerHTML = `
            <p>
                <a href="#" class="toggle-details">${project.title} by ${project.author}</a>
            </p>
            <div class="details">
                <p>Tech: ${project.tech}</p>
                <p>Git URL: ${project.gitUrl}</p>
                <p>Live URL: ${project.liveUrl}</p>
                <p>Description: ${project.description}</p>
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
