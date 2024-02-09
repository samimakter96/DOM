const liColor = document.getElementsByTagName("li");
liColor[4].style.color = "blue";


// let liTags = document.getElementsByTagName("li");
// liTags[0].style.fontStyle = "italic";
// liTags[1].style.fontStyle = "italic";
// liTags[2].style.fontStyle = "italic";
// liTags[3].style.fontStyle = "italic";
// liTags[4].style.fontStyle = "italic";


// We do the same things using loops

let listItems = document.getElementsByTagName("li");

for(let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontStyle = "italic";
}