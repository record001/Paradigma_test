let items = document.querySelectorAll(".carousel-item");
let array = []; //carouse items ga mos array yaratildi
for (let i = 0; i < items.length; i++) {
  array.push(i);
}
//init carousel
function carousel_init(array) {
  let middle = array[Math.round(array.length / 2) - 1];
  items[middle].style.left = `110px`; //index: 3
  let value = 0;
  for (let i = Math.round(array.length / 2) - 2; i >= 0; i--) {
    //indexes: 0, 1, 2
    items[array[i]].style.left = `${value}px`;
    value -= 110;
  }
  value = 220;
  for (let i = Math.round(array.length / 2); i < items.length; i++) {
    //indexes : 4, 5, 6
    items[array[i]].style.left = `${value}px`;
    value += 110;
  }
}
// event listener of next/prev buttons
document.querySelectorAll(".carousel-items-arrow").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("arrow-prev")) {
      //prev bosilsa:
      array.unshift(array.pop());
    } else if (e.target.classList.contains("arrow-next")) {
      //next bosilsa:
      array.push(array.shift());
    }
    carousel_init(array);
  });
});

window.addEventListener("DOMContentLoaded", carousel_init(array));

// let nav = document.querySelector(".nav");
let modal = document.querySelector(".modal");
// let up = document.querySelector("#up");
let modal_link = document.querySelectorAll(".modal__link");
// console.log(modal_link);
let burger = document.querySelector(".burger");

// burger
function myFunction(x) {
  x.classList.toggle("change");
  modal.classList.toggle("active");
}

modal_link.forEach((link) => {
  link.addEventListener("click", () => {
    myFunction(burger);
    modal.classList.remove("active");
  });
});

// modal close btn
let modal_map = document.querySelector(".modal_map");

document.querySelector(".modal_map__close").addEventListener("click", (e) => {
  modal_map.classList.remove("modal_map_db");
  // console.log("ok");
});

// header location

document.querySelector(".header__location").addEventListener("click", (e) => {

  modal_map.classList.add("modal_map_db");

  document.querySelector(".map_online").innerHTML = `
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.52854206081!2d30.48762341518817!3d50.393986699313615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8dab18f8501%3A0x2a4b5bdd07e13e4!2z0YPQuy4g0JLQsNGB0LjQu9GM0LrQvtCy0YHQutCw0Y8sIDMwLCDQmtC40LXQsiwg0KPQutGA0LDQuNC90LAsIDAyMDAw!5e0!3m2!1sru!2s!4v1643349323454!5m2!1sru!2s"
    style="border:0;" allowfullscreen="" loading="lazy"> 
      </iframe>  
  
  `
   
});

// modal img 

document.querySelectorAll(".carousel-item").forEach(item => {
  item.addEventListener('click', e => {
  modal_map.classList.add("modal_map_db");

    // console.log(e.target.firstChild.src);
    document.querySelector(".map_online").innerHTML = 
    `<img src=" ${e.target.firstChild.src}" alt="1"> `

          
        
  })
})
