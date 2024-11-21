import projectsJson from "./projects.json";

export const singleProject = (projectId) => {
  console.log("ProjectId received:", projectId);

  const project = projectsJson.find((proj) => proj.id === projectId);
  console.log(project);

  if (project) {
    const clickedProjectLink = document.querySelector(
      `.projects-link[data-id = "${projectId}"]`
    );
    console.log("clicked project link:", clickedProjectLink);

    //check if details container exists
    let detailsContainer = clickedProjectLink.nextSibling;
    console.log("next sibling of link:", detailsContainer);

    while (
      detailsContainer &&
      detailsContainer.nodeType !== Node.ELEMENT_NODE
    ) {
      detailsContainer = detailsContainer.nextSibling;
    }

    if (
      detailsContainer &&
      detailsContainer.classList.contains("proj-details-container")
    ) {
      detailsContainer.remove();
    } else {
      const projDetailsTemplate = document.getElementById(
        "proj-details-template"
      );
      const cloneProjDetailsTemplate =
        projDetailsTemplate.content.cloneNode(true);

      const projDescription =
        cloneProjDetailsTemplate.querySelector(".proj-description");
      projDescription.textContent = project.description;

      const projTech = cloneProjDetailsTemplate.querySelector(".proj-tech");
      projTech.textContent = project.tech;
      const techH4 = cloneProjDetailsTemplate.querySelector(".proj-tech-h4");
      techH4.style.textTransform = "uppercase";

      const urlH4 = cloneProjDetailsTemplate.querySelector(".proj-tech-url");
      urlH4.style.textTransform = "uppercase";

      const projGit = cloneProjDetailsTemplate.querySelector(".proj-git");
      projGit.href = project.gitUrl;
      console.log("git link:", project.gitUrl);

      const projLive = cloneProjDetailsTemplate.querySelector(".proj-live");
      projLive.href = project.liveUrl;
      console.log("live link:", project.liveUrl);

      const detailsContainer = document.createElement("div");
      detailsContainer.classList.add("proj-details-container");
      detailsContainer.appendChild(cloneProjDetailsTemplate);

      const parentNode = clickedProjectLink.parentNode;
      parentNode.insertBefore(detailsContainer, clickedProjectLink.nextSibling);
    }
  }
};
