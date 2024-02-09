const heading1 = document.getElementById("main-heading");

const newHeading3 = document.createElement("h3");
newHeading3.textContent = "Buy high quality organic fruits online";

heading1.after(newHeading3);

newHeading3.style.fontStyle = "italic";


const para = document.createElement("p");
para.textContent = "Total fruits: 4"

const div = document.getElementsByTagName("div");
const secondDiv = div[1];

const fruits = document.querySelector(".fruits");
secondDiv.insertBefore(para, fruits);

// para.id = "fruit-total";

para.setAttribute("id", "fruits-total");