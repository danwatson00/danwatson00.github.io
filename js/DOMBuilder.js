"use strict";
// $ = require('jquery');

function projectBuilder(item) {
    console.log("projectBuilder Item", item);
    let projectCardDiv = 
            `<div>
                <h1>${item.title}</h1>
                <h2>${item.subtitle}</h2>
                <h3>${item.projectType}/h3>
                <img src="${item.imageHome}" alt="website sample image" />
                <p>${item.brief}</p>
                <a>View the Github Repo</a>
                <a href="${item.github}"><img src="github-logo.png"/>Github Repo</a>
                <a href="${item.url}"><img src="github-logo.png"/>Live Site</a>
                <a href="${item.designBrief}"><img src="github-logo.png"/>Design Case Study</a>
            </div>`;

        $("main").html(projectCardDiv);
    // document.getElementById("main").innerHTML = projectCardDiv;
}


module.exports = {projectBuilder};