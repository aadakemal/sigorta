"use strict";

// Home Page Sticky Ad
var sticky = document.querySelector("[data-sticky]");
var stickyClose = document.querySelector("[data-sticky-close]");
document.addEventListener("DOMContentLoaded", function () {
  if (stickyClose) {
    stickyClose.addEventListener("click", function (e) {
      if (sticky) sticky.classList.add("-closed");
    });
  }
}); // Campaign Carousel

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}); //Image Text Box Carousel

var swiper = new Swiper('.swiper-carousel', {
  slidesPerView: 3,
  spaceBetween: 43,
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 36,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    },
    640: {
      //variableWidth: true,
      loop: true,
      spaceBetween: 24,
      slidesPerView: 1,
      centeredSlides: true,
      slidesOffsetBefore: 0,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }
  }
});
"use strict";

var promo = document.querySelector('[data-promo="true"]');
var dataPromoList = document.querySelectorAll('[data-promo-list]');
var dataPromoContent = document.querySelectorAll('[data-promo-content]');
var active = "-active"; //Promo Tab

function promoTab() {
  dataPromoList.forEach(function (item) {
    item.addEventListener("click", function () {
      var promoID = item.dataset.promoList;

      for (var i = 0; i < dataPromoList.length; i++) {
        dataPromoList[i].classList.remove(active);
      }

      item.classList.add(active);
      dataPromoContent.forEach(function (item) {
        var contentID = item.dataset.promoContent;

        if (contentID === promoID) {
          item.classList.add(active);
        } else {
          item.classList.remove(active);
        }
      });
    });
  });
  return;
}

if (!!promo === true) {
  promoTab();
}