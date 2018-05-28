"use strict";


function getItems() {
    return $.ajax({
        url: `./project-data.json`
    }).done((allItems) => {
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

function getDropdownItem(id) {
    return $.ajax({
        url: `./project-data.json`
    }).done((items) => {
        return items;
        }
    );
}

module.exports = { getItems, getItem, getDropdownItem };
