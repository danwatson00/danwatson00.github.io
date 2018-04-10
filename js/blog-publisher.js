"use strict";

console.log("blog-publisher.js");

var blogHolder = document.getElementById("blog-holder");

//write publish to DOM and call function showPosts

let showPosts = (postsArray) => {
    document.getElementById("blog-holder").innerHTML = postsArray;
    for (var i = 0; i < postsArray; i++ ) {
        // let postElement = `<div class="blogCard"><article><img class="blogImage" src="${blogPosts.imageURL}><br><h2>${blogPosts.title}</h2><p>${blogPosts.publishDate}</p><p><small>${blogPosts.author}</small></p>${blogPosts.content}<br></article></div>`;
        // blogHolder.innerHTML += postElement;
    }
};


console.log("Hello");

module.exports = {showPosts};