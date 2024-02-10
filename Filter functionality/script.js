// Step 1: Get a reference to the form element
const form = document.querySelector('form');

// Step 2: Create a new input element for the fruit description
const descriptionInput = document.createElement('input');

// Step 3: Set attributes for the new input element
descriptionInput.setAttribute('type', 'text');
descriptionInput.setAttribute('name', 'description');
descriptionInput.setAttribute('id', 'fruit-description');
descriptionInput.setAttribute('placeholder', 'Enter fruit description');

// Step 4: Insert the new input element before the button inside the form
const addButton = form.querySelector('button');
form.insertBefore(descriptionInput, addButton);




const filter = document.getElementById("filter");
filter.addEventListener("keyup", function(event) {
   const textEntered = event.target.value.toLowerCase();
   const fruitItems = document.getElementsByClassName("fruit");
   const descriptionFruit = document.getElementById("fruit-description");
   for(let i = 0; i < fruitItems.length; i++) {
    const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
    const descriptionFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
    if(currentFruitText.indexOf(textEntered) === -1 && descriptionFruitText === -1) {
        fruitItems[i].style.display = "none";
    }else {
        fruitItems[i].style.display = "flex";
    }
   }
})