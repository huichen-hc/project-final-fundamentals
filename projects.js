import projectsJson from "./projects.json";
import { singleProject } from "./singleProject";

export const projects = () => {
  const projectsSection = document.getElementById("projects-section");

  const projectsInfoTemplate = document.getElementById(
    "projects-info-template"
  );
  const cloneProjectsInfoTemplate =
    projectsInfoTemplate.content.cloneNode(true);
  projectsSection.appendChild(cloneProjectsInfoTemplate);

  const projectsInfoWrapper = document.querySelector(".projects-info-wrapper");
  const h2 = projectsInfoWrapper.querySelector("h2");
  h2.style.textTransform = "uppercase";

  const renderProject = () => {
    const projectsLinkTemplate = document.getElementById(
      "projects-link-template"
    );

    projectsJson.forEach((proj) => {
      const cloneProjectsLinkTemplate =
        projectsLinkTemplate.content.cloneNode(true);

      const projectLink =
        cloneProjectsLinkTemplate.querySelector(".projects-link");
      projectLink.dataset.id = proj.id;

      const projectTitle =
        cloneProjectsLinkTemplate.querySelector(".projs-title");
      projectTitle.textContent = proj.title;
      projectTitle.style.textTransform = "uppercase";

      const projectAuthor =
        cloneProjectsLinkTemplate.querySelector(".projs-author");
      projectAuthor.textContent = `- ${proj.author}`;
      projectAuthor.style.textTransform = "uppercase";

      projectLink.addEventListener("click", (event) => {
        event.preventDefault();

        const link = event.target.closest(".projects-link");
        console.log("link from click", link);

        if (link) {
          const projectId = link.dataset.id;
          console.log("id from link dataset", projectId);
          console.log(typeof projectId);
          singleProject(projectId);
        }
      });
      projectsSection.appendChild(cloneProjectsLinkTemplate);
    });
  };

  renderProject();
};
