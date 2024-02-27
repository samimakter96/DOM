function handleFormSubmit(event) {
  event.preventDefault()

  var userExpenseDetails = {
    amount: event.target.expenseAmount.value,
    description: event.target.expenseDescription.value,
    category: event.target.expenseCategory.value
  }
  localStorage.setItem(userExpenseDetails.category, JSON.stringify(userExpenseDetails))

  userExpenseOnScreen(userExpenseDetails)
}

function userExpenseOnScreen(userExpenseDetails) {
  const ul = document.querySelector('ul')
  const li = document.createElement('li')
  li.classList.add('fs-5', 'list-unstyled')
  li.innerText = `${userExpenseDetails.amount} - ${userExpenseDetails.description} - ${userExpenseDetails.category}`
  ul.appendChild(li)

  const deleteBtn = document.createElement('button')
  deleteBtn.innerText = 'Delete Expense'
  deleteBtn.classList.add('btn', 'btn-danger', 'mb-2')
  li.appendChild(deleteBtn)

  const editBtn = document.createElement('button')
  editBtn.innerText = 'Edit Expense'
  editBtn.classList.add('btn', 'btn-primary', 'mb-2')
  li.appendChild(editBtn)

  deleteBtn.onclick = () => {
    ul.removeChild(li)
    localStorage.removeItem(userExpenseDetails.category)
  }

  editBtn.onclick = () => {
    ul.removeChild(li)
    localStorage.removeItem(userExpenseDetails.category)


    document.getElementById('expense').value = userExpenseDetails.amount
    document.getElementById('amount').value = userExpenseDetails.description
    document.getElementById('choose').value = userExpenseDetails.category
  }
}

