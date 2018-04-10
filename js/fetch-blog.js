"use strict";
console.log("fetch-blog.js");

//creates an empty object
let posts = {};
console.log("posts", posts);

//creates an empty array
let blogPostData = [];
console.log(blogPostData);

//parses the data and pushes it all to blogPostData
let parseData = (data) => {
    /* console.log(data);
    let keys = Object.keys(data);
    keys.forEach(function(element) { */
        data.blogPosts.forEach( (element) => {
            blogPostData.push(element); 
        });
        console.log("parse", blogPostData);
        return blogPostData;
    };

posts.getPost = () => {
    console.log("getPost: ", blogPostData);
    return blogPostData;  
};

posts.loadPost = () => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', "./blog-data.json");
        request.onload = function () {
            if (request.status === 200) {
                //sucess
                let data = JSON.parse(request.responseText);
                console.log("data", data);
                console.log("new data", parseData(data));
                resolve(data);
                //default
                // resolve(request.responseText);
            } else {
                //something went wrong
                reject(new Error("XMLHttpRequest Error ", request.statusText));
            }
        };
        
        request.send();
    });
};

module.exports = {posts};