const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarUl = document.getElementsByClassName("navbar__ul")[0]
const overlay = document.getElementsByClassName("overlay")[0]
const homebutton = document.getElementsByClassName("homebtn")[0]

toggleButton.addEventListener("click", function menuFunction() {
    navbarUl.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", function overlayFunction() {
    navbarUl.classList.toggle("active");
    overlay.classList.toggle("active");
})

let tooltip = document.querySelectorAll('.displayimage');

document.addEventListener('mousemove', fn, false);

function fn(e) {
    for (let i=tooltip.length; i--;) {
        tooltip[i].style.left = e.pageX  + 'px';
        tooltip[i].style.top = e.pageY + 'px';
    }
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    homebutton.style.display = "flex";
  } else {
    homebutton.style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }