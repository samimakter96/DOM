// Variables

let button = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
  quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
  person: ` Benjamin Franklin`
}, {
  quote: `"The journey of a thousand miles begins with one step."`,
  person: ` Lao Tzu`
}, {  
  quote: `"The best way to find yourself is to lose yourself in the service of others."`,
  person: ` Mahatma Gandhi`
}, {
  quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
  person: ` Albert Einstein`
}, {
  quote: `"Your time is limited, so don't waste it living someone else's life."`,
  person: ` Steve Jobs`
}, {
  quote: `"Our lives begin to end the day we become silent about things that matter."`,
  person: ` Martin Luther King, Jr`
}, ];

button.addEventListener('click', function() {

  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;

})