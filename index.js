function addProject(projectName, projectDescription, projectLink){
    let template = `<div class="project-box shadow">
    <div class="project-text">
        <div class="project-content p-2">
            <p class="projects-title">${projectName}</p>
            <p class="projects-content">${projectDescription}</p>
            <a href="${projectLink}" target="_blank"><button class="view-project-button btn btn-default">View Project</button></a>
        </div>
    </div>
    
    <div class="project-image"><img src="images/project2.png"></div>
    </div>`
    let projectsNode = document.getElementById("projectsSection");
    projectsNode.innerHTML = template + projectsNode.innerHTML;
}

function clearForm() {
    let projectName = document.getElementById("project-name");
    let projectDescription = document.getElementById("project-description");
    let projectLink = document.getElementById("project-link");
    projectName.value="";
    projectDescription.value="";
    if(projectLink){
        projectLink.value="";
    }

}

let addProjectAction = document.getElementById("addProjectForm");
addProjectAction.onsubmit = function(event) {
    event.preventDefault();
    let projectName = document.getElementById("project-name");
    let projectDescription = document.getElementById("project-description");
    let projectLink = document.getElementById("project-link");
    addProject(projectName?.value, projectDescription?.value, projectLink?.value);
    clearForm();
    document.getElementById("navItem2").click();
}




