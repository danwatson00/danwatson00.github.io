"use strict";

let blogPosts = require("./fetch-blog");

let x = require("./blog-publisher");

let loadedPosts = blogPosts.posts.loadPost()
.then(
    (resolve) => {
        console.log("resolve: ",resolve);
        x.showPosts(resolve);

    },
    (reject) => {
        console.error("OOPS", reject);
    }
);



