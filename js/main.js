"use strict";

// let portfolios = 'portfolios.js';
let templates = require('./DOMBuilder'),
    db = require('./getData');


db.getItems();


$(document).on("click", ".port-card", function () {
    db.getItem(this.id)
    .then((items) => {
        items.forEach((item) => {
            if (this.id === item.ID) {
                templates.projectBuilder(item);
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
            }
        });
    });
});

window.onpopstate = function (event) {
    let content = "";
    if (event.state) {
        content = event.state;
        templates.projectBuilder(content);
    }else {
        window.location.href = "/";
    }
    
};


$(document).on("click", ".dropdown-item", function () {
    db.getItem(this.id)
    .then((items) => {
        items.forEach((item) => {
            let str = this.id.substring(0, this.id.length - 1);
            if (str === item.ID) {
                templates.projectBuilder(item);
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
                }, null, item.ID);
            }
        });
    });
});


db.getItems();


//LOAD PROJECT TO DOM
function loadProjectToDom(ID) {
    // templates.clearGearDiv();
    db.getItem(ID)
        .then((result) => {
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
                templates.projectBuilder(result);
    }
);
}
});


//blast is used to separate characters
var rubber = $('h1').blast({ delimiter: 'character' });

$('h2').blast({ delimiter: 'character', customClass: 'rubberBand' });

$(".blast").mouseenter(function () {
    var el = $(this);

    $(this).addClass('animated rubberBand');
    $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {

        el.removeClass('animated rubberBand');

    });

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



