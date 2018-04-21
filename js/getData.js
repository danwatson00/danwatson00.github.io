"use strict";


function getItems() {
    return $.ajax({
        url: `/project-data.json`
    }).done((allItems) => {
        return allItems;
    });
}

function getItem(ID) {
    return $.ajax({
        url: `/project-data/projects/${ID}.json`
    }).done((allItems) => {
        return allItems;
    });
}
module.exports = { getItems, getItem };