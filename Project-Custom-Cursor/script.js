const main = document.querySelector('#main')
const cursor = document.querySelector('.cursor')

main.addEventListener('mousemove', function(mouse) {
  cursor.style.left = mouse.x + 'px'
  cursor.style.top = mouse.y + 'px'
})