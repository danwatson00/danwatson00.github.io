var postImg = 

var postTitle = 

var postDate = 

var postDesc =

var cardContent = [postImg, postTitle, postDate, postDesc];

var card = "";

for (var i = 0; i < 8; i += 1) {
    card += `<div class="blog-cards"><img class="card-img" src="${cardContent[i].URL}"><br><p>${cardContent[i].postTitle}<br>${cardContent[i].postDate}<br>${cardContent[i].postDesc}</p></div>`;
}


document.getElementById("container").innerHTML = card; 