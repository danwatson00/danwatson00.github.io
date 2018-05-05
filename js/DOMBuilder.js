"use strict";
// $ = require('jquery');

function projectBuilder(item) {
    console.log("projectBuilder Item", item);
    let projectCardDiv = 
            `<div>
                <div class="proj-div">
                    <h1>${item.title}</h1>
                    <h2>${item.subtitle}</h2>
                </div>
                <div class="proj-div">
                    <h3>About This Project</h3>
                    <p>${item.brief}</p>
                </div>
                <div class="proj-div">
                    <h3>Tech</h3>
                    <p>${item.tech}</p>
                </div>
                <div class="proj-div">
                    <h3>Screenshots</h3>
                    <img src="${item.imageHome}" class="project-img" alt="website sample image" />
                    <img src="${item.image1}" class="project-img" alt="a second website sample image" />
                </div>
                <div class="proj-div">
                    <h3>Project Links</h3>
                    <div class="proj-links">
                        <div class="proj-link-obj">
                            <a href="${item.github}" class="proj-link" target="_blank"><img src="/img/github.png" class="proj-link-icon"/></a>
                            <a  href="${item.github}">Github Repo</a>
                        </div>
                        <div class="proj-link-obj">
                            <a href="${item.url}" target="_blank"><img src="/img/internet.png" class="proj-link-icon"/></a>
                            <a  href="${item.url}">Live Site</a>
                        </div>
                        <div class="proj-link-obj">
                            <a href="${item.designBrief}" target="_blank"><img src="/img/briefcase.png" class="proj-link-icon"/></a>
                            <a  href="${item.designBrief}">Design Case Study</a>
                        </div>
                    </div>
                </div>
            </div>`;

        $("main").html(projectCardDiv);
    // document.getElementById("main").innerHTML = projectCardDiv;
}


module.exports = {projectBuilder};