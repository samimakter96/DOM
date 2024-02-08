const fruitColor = document.getElementsByClassName("fruit");
fruitColor[2].style.backgroundColor = "yellow";

const listFont = document.getElementsByClassName("fruit");
// listFont[0].style.fontWeight = "bold";
// listFont[1].style.fontWeight = "bold";
// listFont[2].style.fontWeight = "bold";
// listFont[3].style.fontWeight = "bold";


// we make the element bold using loop and class name

for(let i = 0; i < listFont.length; i++) {
    listFont[i].style.fontWeight = "bold";
}