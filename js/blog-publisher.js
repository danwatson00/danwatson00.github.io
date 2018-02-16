"use strict";

console.log("blog-publisher.js");

let db = require("./fetch-blog");

let blogPostPromise = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("DanTEST");
        }, 100);
    }).then((resolve) => {
        console.log("resolve", resolve);
    });
};

blogPostPromise();
console.log("Hello");

module.exports = { blogPostPromise };