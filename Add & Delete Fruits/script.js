// Get all "li" elements with the Tag "li"
const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    item.appendChild(editButton);
});


const form = document.querySelector("form");
const fruits = document.querySelector(".fruits")

form.addEventListener("submit", function(event) {
    event.preventDefault()
    // selected the input element
    const fruitToAdd = document.getElementById("fruit-to-add");
    // created li element
    const newLi = document.createElement("li");
    newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>' + '<button class="edit-btn">Edit</button>'
    newLi.className = "fruit";
    // Adding li as the last element of unordered list
    fruits.appendChild(newLi);

})
// Delete element
fruits.addEventListener('click', function(event) {
    if(event.target.classList.contains("delete-btn")) {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete)
    }
});

