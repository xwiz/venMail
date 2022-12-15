const mobMenu= document.getElementById('mobile_menuID');

// toggle accordion button
const handleAccordion = (n) => {
  let elem = `accordion${n}`;
  document.getElementById(elem).classList.toggle("show");
};


// OPEN & CLOSE MOBILE MENU
const closeMobileMenu =()=>{
mobMenu.style.display='none'
}

const openMobileMenu =()=>{
    mobMenu.style.display='block'
}

// swiper js

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });



//   scroll to top btn

var btn = $('#toTopBtn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});