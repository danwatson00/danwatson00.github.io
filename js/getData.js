"use strict";


function getItems() {
    return $.ajax({
        url: `./project-data.json`
    }).done((allItems) => {
        console.log("allItems", allItems);
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


// function getItem(ID) {
//     return $.ajax({
//         url: `./project-data.json`,
//         type: "GET",
//         data: {
//             ID: {ID}
//         },
//         dataType: "json"
//     }).done(function (result) {
//         return result;
//     }).fail(function () {
//             console.log("Ajax Request Error");
//     });
module.exports = { getItems, getItem };
