const mainHeading = document.querySelector('#basket-heading');
mainHeading.style.textAlign = 'center';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown';


const fruitsItems = document.querySelectorAll('.fruit');
for (let i = 0; i < fruitsItems.length; i++) {
    fruitsItems[i].style.padding = '10px'
    fruitsItems[i].style.margin = '10px'
    fruitsItems[i].style.borderRadius = '5px';
    // fruitsItems[i].style.backgroundColor = 'white';
}

const evenItems = document.querySelectorAll('.fruit:nth-child(even)');
for (let i = 0; i < evenItems.length; i++) {
    evenItems[i].style.backgroundColor = 'white';
}

const oddItems = document.querySelectorAll('.fruit:nth-child(odd)');
for (let i = 0; i < oddItems.length; i++) {
    oddItems[i].style.backgroundColor = 'brown';
    oddItems[i].style.color = 'white';
}