"use strict";

// let portfolios = 'portfolios.js';
let templates = require('./DOMBuilder'),
    db = require('./getData');


function selectProject(items) {
    items.forEach((item) => {
        console.log("items", items);
        console.log("this.id", this.id);
    if (this.id === item.ID) {
        templates.projectBuilder(item);
    }
    });
}



$(document).on("click", ".port-card", function () {
    db.getItem(this.id)
    .then((items) => {
        // items.forEach((item) => {
        //     if (this.id === item.ID) {
        //         let data = templates.projectBuilder(item);
        //         console.log("inside forEach data", data);
        //         return data;
        //     }
        // });
        selectProject(items);

    })
    .then((data) => {
        console.log("outside forEach data", data);
        history.pushState(data, this.id, this.id);
    });
});

db.getItems();

//Browser History Back Button Fix
window.addEventListener('popstate', e => {
    window.history.back();

});




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



