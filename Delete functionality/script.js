function handleFormSubmit(event) {
    event.preventDefault();

    const UserDetails = {
        "username": event.target.username.value,
        "email": event.target.email.value,
        "phone": event.target.phone.value
    }

    localStorage.setItem(UserDetails.email, JSON.stringify(UserDetails));

    saveFormData(UserDetails);
}   

function saveFormData(UserDetails) {
    const parentElement = document.querySelector("ul");
    const listItem = document.createElement("li");
    listItem.textContent = UserDetails.username + ' - ' + UserDetails.email + ' - ' + UserDetails.phone
    // listItem.appendChild(document.createTextNode(`${UserDetails.username} - ${UserDetails.email} - ${UserDetails.phone}`))

    const deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "Delete"

    deleteButton.onclick = () => {
        localStorage.removeItem(UserDetails.email)
        parentElement.removeChild(listItem);
    }
    listItem.appendChild(deleteButton);
    parentElement.appendChild(listItem);
}