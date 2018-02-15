"use strict";

var blogPosts = {};

let blogPostData = [];

let parseData = (data) => {
    data.blog-data.forEach((element) => {
        blogPostData.push(element);
    });
    return blogPostData;
};

blogPosts.getPost = () => {
    return blogPostData;
};

blogPosts.loadPost = () => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.onload = function () {
            if (request.status === 200) {
                //sucess
                let data = JSON.parse(request.responseText);
                // console.log("data", data);
                // console.log("new data", parseData(data));
                resolve(parseData(data));
                //default
                // resolve(request.responseText);
            } else {
                //something went wrong
                reject(new Error("XMLHttpRequest Error ", request.statusText));
            }
        };
        request.open('GET', "./blog-data.json");
        request.send();
    });
};

module.exports = { blogPosts };