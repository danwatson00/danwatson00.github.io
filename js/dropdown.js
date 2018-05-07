"use strict";

let templates = require('./DOMBuilder'),
    db = require('./getData');

$(function () {
    $("a.dropdown-item").bind("tap", tapHandler);

    function tapHandler(ID) {
        db.getItem(ID)
            .then((result) => {
                console.log("result", result);
                templates.projectBuilder(result);
            }
            );
    }
});