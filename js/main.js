"use strict";
// let portfolios = 'portfolios.js';
let templates = require('./DOMBuilder'),
    db = require('./getData');

$(document).on("click", "#001", function () {
    db.loadProjectToDom("001");
});

var rubber = $('h1').blast({ delimiter: 'character' });

$('h2').blast({ delimiter: 'character', customClass: 'rubberBand'});

$(".blast").mouseenter(function () {
    var el = $(this);

    $(this).addClass('animated rubberBand');
    $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {

        el.removeClass('animated rubberBand');

    });

});



document.getElementById("first").addEventListener("click", loadProjectToDom);

// function loadCameraBag() {
//     console.log("clicked");
// }


// $("main").html(loadCameraBag);

// function printToDOM() {
//     document.getElementById(body).inner
// }


//LOAD USER ITEMS TO DOM
function loadProjectToDom(ID) {
    // templates.clearGearDiv();
    db.getItem(ID)
        .then((result) => {
            console.log("result", result);
            templates.projectBuilder(result);
        });
}


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



