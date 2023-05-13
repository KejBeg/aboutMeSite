// Declaring DOM variables
let skillsList = document.getElementById("my-skills-list")
let contactList = document.getElementById("contact-list")
let projectsListRow1 = document.getElementById("projects-list-row1")
let projectsListRow2 = document.getElementById("projects-list-row2")


// Declaring variables
let mySkills = ["C", "C++", "Java", "Python", "Javascript", "HTML", "CSS"]
let projectList = [
    ["Triot", "A site containing my Projects, Contacts and info about me.", "https://github.com/KejBeg/aboutMeSite"],
    ["Medieval", "A pokemon-like text based game in JAVA. Based in medieval times", "https://github.com/KejBeg/Medieval"],

]


function addSkill(name){
    skillsList.innerHTML += `<li class="my-skills-list-item">${name}</li>`
}

function addProject(name, description, githubLink, row){
    row.innerHTML += 
    `<li class="project-list-item">
        <header class="projects-header">${name}</header>
        <p class="project-description">${description}</p>
        <a href="${githubLink}" class="project-icon-anchor">
            <img src="images/github-mark-white.png" alt="github logo" class="projects-icon">
        </a>
    </li>`;

}

function addContact(media, name, image){
    contactList.innerHTML += ``
}


// Adding the skills
mySkills.forEach(element => {
    addSkill(element)
});

let iNum = 0
// Adding the projects
projectList.forEach(i =>{
    iNum++
    let row;
    if (iNum%2 == 1){
        row = projectsListRow1
    } else {
        row = projectsListRow2
    }
    console.log(row)
    addProject(i[0], i[1], i[2], row)
})