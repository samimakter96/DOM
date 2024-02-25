function handleFormSubmit(event) {
    event.preventDefault()
  
    var userDetails = {
      name: event.target.userName.value,
      email: event.target.email.value,
      phone: event.target.phoneNumber.value
    }
    
    // convert js object into string because localStorage only store (string: key, string: value)
    localStorage.setItem(userDetails.email, JSON.stringify(userDetails))
  
    displayUserOnScreen(userDetails)

  };
  
  function displayUserOnScreen(userDetails) {

    const parentItem = document.querySelector('ul')
  
    const childItem = document.createElement('li')
    // display text on the page
    childItem.innerText = `${userDetails.name} - ${userDetails.email} - ${userDetails.phone}`
    
    // Create Delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    
    // Create Edit button
    const editBtn = document.createElement('button')
    editBtn.innerText = 'Edit'
    
    // append delete and edit button inside li
    childItem.appendChild(deleteBtn)
    childItem.appendChild(editBtn)
    // store li element inside ul
    parentItem.appendChild(childItem);


    // Delete Functionality
    deleteBtn.onclick = () => {
      parentItem.removeChild(childItem)
      localStorage.removeItem(userDetails.email)
    }
  
    // Edit Functionality
    editBtn.onclick = () => {
      parentItem.removeChild(childItem)
      localStorage.removeItem(userDetails.email)
        
      // Populate input fields with existing values
      document.getElementById('user_name').value = userDetails.name
      document.getElementById('user_email').value = userDetails.email
      document.getElementById('phone_number').value = userDetails.phone
    }
  
  };