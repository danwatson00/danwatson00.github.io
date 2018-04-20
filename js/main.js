"use strict";

let $ = require('jquery'),
    blogPosts = require("./fetch-blog"),
    blast = require("./blast-text"),
    x = require("./blog-publisher");

$("#intro").blast({ delimiter: "character" });


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



