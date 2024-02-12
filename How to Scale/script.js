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
    const parentElement = document.getElementById("userList");
    const listItem = document.createElement("li");
    listItem.textContent = UserDetails.username + ' - ' + UserDetails.email + ' - ' + UserDetails.phone
    parentElement.appendChild(listItem);
}