(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";
// $ = require('jquery');

function projectBuilder(item, index) {
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
                    <img class="project-img" src="${item.image01}" alt="website sample image">
                    <img class="project-img" src="${item.image02}" alt="website sample image">
                    <img class="project-img" src="${item.image03}" alt="website sample image">
                    <img class="project-img" src="${item.image04}" alt="website sample image">
                    <img class="project-img" src="${item.image05}" alt="website sample image">
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
},{}],2:[function(require,module,exports){
"use strict";


function getItems() {
    return $.ajax({
        url: `./project-data.json`
    }).done((allItems) => {
        return allItems;
    });
}


function getItem(ID) {
    // let item;
    return $.ajax({
        url: `./project-data.json`
    }).done((items) => {
        return items;
        } 
        
    );
}

function getDropdownItem(id) {
    return $.ajax({
        url: `./project-data.json`
    }).done((items) => {
        return items;
        }
    );
}

module.exports = { getItems, getItem, getDropdownItem };

},{}],3:[function(require,module,exports){
"use strict";

// let portfolios = 'portfolios.js';
let templates = require('./DOMBuilder'),
    db = require('./getData');


// function selectProject(items) {
//     items.forEach((item) => {
//         console.log("items", items);
//         console.log("this.id", this.id);
//     if (this.id === item.ID) {
//         templates.projectBuilder(item);
//     }
//     });
// }
db.getItems();


$(document).on("click", ".port-card", function () {
    db.getItem(this.id)
    .then((items) => {
        items.forEach((item) => {
            if (this.id === item.ID) {
                templates.projectBuilder(item);
            }
        });
    })
    .then((item) => {
        history.pushState({
            ID: item.ID,
            title: item.title,
            subtitle: item.subtitle,
            projectType: item.projectType,
            brief: item.brief,
            tech: item.tech,
            github: item.github,
            url: item.url,
            designBrief: item.designBrief,
            logo: item.logo,
            image01: item.image01,
            image02: item.image02,
            image03: item.image03,
            image04: item.image04,
            image05: item.image05
        }, item.title, item.ID);
    });
});

window.onpopstate = function (item) {
    let content = "";
    if (item.state) {
        content = item.state.project;
    }
    templates.projectBuilder(content);
};


$(document).on("click", ".dropdown-item", function () {
    console.log("drop clicked", this.id);
    db.getDropdownItem(this.id)
    .then((items) => {
        console.log("then items", items);
        items.forEach((item) => {
            let str = this.id.substring(0, this.id.length - 1);
            if (str === item.ID) {
                templates.projectBuilder(item);
            }
        });
    });

});



// $(document).on("click", ".port-card", function () {
//     console.log("clicked");
//     history.pushState(null, this.id, this.id);
//     db.getItem(this.id)
//     .then((items) => {
//         // items.forEach((item) => {
//         //     if (this.id === item.ID) {
//         //         let data = templates.projectBuilder(item);
//         //         console.log("inside forEach data", data);
//         //         return data;
//         //     }
//         // });
//         selectProject(items);

//     });
// });

db.getItems();

//Browser History Back Button Fix
// window.addEventListener('popstate', e => {
//     window.history.back();

// });




//blast is used to separate characters
var rubber = $('h1').blast({ delimiter: 'character' });

$('h2').blast({ delimiter: 'character', customClass: 'rubberBand'});

$(".blast").mouseenter(function () {
    var el = $(this);

    $(this).addClass('animated rubberBand');
    $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {

        el.removeClass('animated rubberBand');

    });

});


//LOAD PROJECT TO DOM
function loadProjectToDom(ID) {
    // templates.clearGearDiv();
    db.getItem(ID)
        .then((result) => {
            console.log("result", result);
            templates.projectBuilder(result);
        });
}

$(function () {
    $("div.port-card").bind("tap", tapHandler);

    //This allows taps on portfolio cards to act like clicks
    function tapHandler(ID) {
        history.pushState(null, null, ID);
        db.getItem(ID)
            .then((result) => {
                console.log("result", result);
                templates.projectBuilder(result);
    }
);
}
});

// let blogPosts = require("./fetch-blog"),
//     blast = require("./blast-text"),
//     x = require("./blog-publisher");

// $("#intro").blast({ delimiter: "character" });


// let loadedPosts = blogPosts.posts.loadPost()
// .then(
//     (resolve) => {
//         console.log("resolve: ",resolve);
//         x.showPosts(resolve);

//     },
//     (reject) => {
//         console.error("OOPS", reject);
//     }
// );




},{"./DOMBuilder":1,"./getData":2}]},{},[3]);
