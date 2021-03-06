"use strict";
// $ = require('jquery');

function projectBuilder(item, index) {
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
                    <img class="project-img" src="${item.image01}" onerror="this.style.display='none'; alt="website sample image">
                    <img class="project-img" src="${item.image02}" onerror="this.style.display='none'; alt="website sample image">
                    <img class="project-img" src="${item.image03}" onerror="this.style.display='none'; alt="website sample image">
                    <img class="project-img" src="${item.image04}" onerror="this.style.display='none'; alt="website sample image">
                    <img class="project-img" src="${item.image05}" onerror="this.style.display='none'; alt="website sample image">
                </div>
                <div class="proj-div">
                    <h3>Project Links</h3>
                    <div class="proj-links">
                        <div class="proj-link-obj">
                            <a href="${item.github}" class="proj-link" target="_blank"><img src="/img/github-01.png" class="proj-link-icon"/></a>
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
}


module.exports = {projectBuilder};