// The following example querySelector finds the first element with the main-heading id:

const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "center";

const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "gray";
fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.width = "50%";
fruits.style.borderRadius = "5px";
fruits.style.listStyleType = "none";


// The following example querySelector finds the first element with the basket-heading id:

const basketHeading = document.querySelector("#basket-heading");
basketHeading.style.color = "green";

// And the following example finds all elements with the fruit pseudo class:
const OddFruitItems = document.querySelectorAll(".fruit:nth-child(odd)");
for(let i = 0; i < OddFruitItems.length; i++){
    OddFruitItems[i].style.backgroundColor = "white";
}


const EvenFruitItems = document.querySelectorAll(".fruit:nth-child(even)");
for(let i = 0; i < EvenFruitItems.length; i++) {
    EvenFruitItems[i].style.backgroundColor = "brown";
    EvenFruitItems[i].style.color = "white";
}
