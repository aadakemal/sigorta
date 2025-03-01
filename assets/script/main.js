"use strict";

var sssItems = document.querySelectorAll('[data-sss-item]');
sssItems.forEach(function (item) {
  var titleElem = item.querySelector('[data-sss-title]');
  var detailElem = item.querySelector('[data-sss-detail]');
  var contentElem = item.querySelector('[data-sss-content]');
  var titleElemHeight = titleElem.scrollHeight;
  titleElem.addEventListener('click', function (e) {
    var detailHeight = detailElem.scrollHeight + 100;

    if (item.classList.contains('-active')) {
      contentElem.style.maxHeight = 0 + 'px';
      item.classList.remove('-active');
    } else {
      contentElem.style.maxHeight = detailHeight + 'px';
      item.classList.add('-active');
    }
  });
});
"use strict";

var backToButton = document.querySelector("[backtop]");

if (backToButton) {
  var backToTopFunction = function backToTopFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToButton.classList.add("-active");
    } else {
      backToButton.classList.remove("-active");
    }
  };

  window.onscroll = function () {
    backToTopFunction();
  };

  backToButton.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}
"use strict";

var burger = document.querySelector('[data-burger]'),
    nav = document.querySelector('[data-nav]'),
    active = "-active",
    body = "mobile-menu";

function toggleBurger() {
  if (burger) {
    burger.addEventListener("click", function (e) {
      if (e.target.classList.contains(active)) {
        e.target.classList.remove(active);
        nav.classList.remove(active);
        document.body.classList.remove(body);
      } else {
        e.target.classList.add(active);
        nav.classList.add(active);
        document.body.classList.add(body);
      }

      return;
    });
  }
}

toggleBurger();
var navItem = document.querySelector('[nav-item]');
var navSubItems = document.querySelectorAll('[nav-item-sub]');

var headerMenu = function headerMenu() {
  var itemLink = navItem.querySelector('[nav-link]');
  itemLink.addEventListener('click', function () {
    setTimeout(function () {
      navItem.classList.toggle(active);
    }, 50);
  });
  navSubItems.forEach(function (item) {
    var itemLink = item.querySelector('[nav-link-sub]');
    itemLink.addEventListener('click', function () {
      setTimeout(function () {
        item.classList.toggle(active);
      }, 50);
    });
  });
};

headerMenu(); // // resize
// window.addEventListener('resize', function () {
// 	if (document.body.classList.contains(body)) {
// 		burger.classList.remove(active);
// 		nav.classList.remove(active);
// 		document.body.classList.remove(body);
// 		navItem.classList.remove(active);
//     navSubItems.forEach(item => item.classList.remove(active));
//   }
// });
"use strict";

var policyContent = document.querySelector("[data-cookie-policy]");
var policyAcceptButton = document.querySelector("[data-cookie-policy-link]");
var policyStatus = "-disable";

function policyNotification() {
  var cname = "Cookie Policy";
  var cvalue = "cookiepolicy";
  var cdate = "365";
  policyAcceptButton.addEventListener("click", function () {
    setCookie(cname, cvalue, cdate);
    policyContent.classList.add(policyStatus);
  });

  if (getCookie(cname) === cvalue) {
    policyContent.classList.add(policyStatus);
  } else {
    policyContent.classList.remove(policyStatus);
  }
}

policyNotification();
"use strict";

var cname = "";
var cvalue = "";
var cdate = "";

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return;
}

function setCookie(cname, cvalue, cdate) {
  var d = new Date();
  d.setTime(d.getTime() + cdate * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkCookie(name, value) {
  var cookieName = getCookie(name);

  if (cookieName != "" && cookieName != undefined) {
    document.cookie = "".concat(name, "=").concat(value, "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
    return true;
  }

  return false;
}
"use strict";

var clickEvent = function clickEvent(category, action, label) {
  var sticky = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'N';
  var policy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var country = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
  var referrer = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
  var pageType = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '';
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    "event": "gaEvent",
    "Category": "".concat(category),
    "Action": "".concat(action),
    "Label": "".concat(label),
    "Value": "",
    "Sticky": "".concat(sticky),
    "Police Bilgisi": "".concat(policy),
    "Ülke Bilgisi": "".concat(country),
    "referrer": "".concat(referrer),
    "pageType": pageType,
    "nonInteraction": false
  });
};

var categoryName = document.querySelector('[category-name]');
var actionName = document.querySelector('[action-name]');

if (!!categoryName && !!actionName) {
  var loadEvent = function loadEvent() {
    var category = categoryName.getAttribute('category-name');
    var action = actionName.getAttribute('action-name');
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      "event": "gaEvent",
      "Category": "".concat(category),
      "Action": "".concat(action),
      "Label": 'Step 1 - Başla',
      "Value": "",
      "Sticky": "N",
      "referrer": "".concat(action),
      "nonInteraction": false
    });
  };

  document.addEventListener("DOMContentLoaded", loadEvent);
}
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var lazy = function lazy() {
  //for IE cancel the lazy load
  var features = [];
  'IntersectionObserver' in window || features.push('IntersectionObserver');

  if (features.length) {
    var lazyImages = document.querySelectorAll("[lazy]");
    var i;

    for (i = 0; i < lazyImages.length; i++) {
      var lazyImagesAttr = lazyImages[i].getAttribute("lazy");

      if (lazyImages[i].hasAttribute("lazy-bg") == false) {
        lazyImages[i].setAttribute("src", lazyImagesAttr);
      }
    }

    var lazyBgImages = document.querySelectorAll("[lazy-bg]");
    var j;

    for (j = 0; j < lazyBgImages.length; j++) {
      var lazyBgImagesAttr = lazyBgImages[j].getAttribute("lazy");
      lazyBgImages[j].style.backgroundImage = "url('" + lazyBgImagesAttr + "')";
    }

    return;
  } else {
    // Lazy Load Options
    var lazyOption = {
      tag: "lazy",
      // Default Lazy Loader
      srcset: "lazy-srcset",
      // Picture Image srcset attributes
      backgroundImage: "lazy-bg",
      // Background Image attributes,
      functions: "lazy-js",
      // Load js function attributes
      element: "lazy-element",
      // Lazy Load elements
      animation: "-done",
      // When Image or Video loaded added animation class
      done: "done",
      // When Video loaded added attribute
      track: "lazy-track" // Should keep tracking after enter view

    };

    var lazyisImage = function lazyisImage(item) {
      return item.tagName.toLowerCase() === "img";
    };

    var lazyisBackgroundImage = function lazyisBackgroundImage(item) {
      return item.hasAttribute(lazyOption.backgroundImage);
    };

    var lazyisVideo = function lazyisVideo(item) {
      return item.tagName.toLowerCase() === "video";
    };

    var lazyisSource = function lazyisSource(item) {
      return item.tagName.toLowerCase() === "source";
    };

    var lazyisFunction = function lazyisFunction(item) {
      return item.hasAttribute(lazyOption.functions);
    };

    var lazyisElement = function lazyisElement(item) {
      return item.hasAttribute(lazyOption.element);
    };

    var lazyReset = function lazyReset(item, attr) {
      return item.removeAttribute(attr);
    }; // Reset after src replaced


    var lazyItems = document.querySelectorAll("[".concat(lazyOption.tag, "]")); // Get all lazy items

    var lazyLoad = new IntersectionObserver(function (entry) {
      entry.map(function (item) {
        var target = item.target; // HTML item

        var isTracking = target.getAttribute(lazyOption.track); // Keep tracking? Default: false

        if (!item.isIntersecting && !!!isTracking) return false; // If it's not in view and shouldn't tracking after enter the view. Default tracking: false

        var isImage = lazyisImage(target);
        var isVideo = lazyisVideo(target);
        var isFunction = lazyisFunction(target);
        var isElement = lazyisElement(target);
        var isBackgroundImage = lazyisBackgroundImage(target);
        var src = target.getAttribute(lazyOption.tag);
        if (!!!isTracking) lazyLoad.unobserve(target); // Remove observe after enter view if it shouldn't tracking

        if (isFunction && typeof eval(src) === 'function') {
          eval(src);
          return true;
        }

        if (isElement) {
          if (item.isIntersecting) target.classList.add(src);
          if (!item.isIntersecting && target.classList.contains(src)) target.classList.remove(src);
        }

        if (isImage && !!src) {
          return lazyImageLoad(target, src);
        }

        if (isBackgroundImage) {
          return lazyBackgroundImageLoad(target, src);
        }

        if (isVideo) {
          var isDone = target.hasAttribute(lazyOption.done); // Is video loaded before?
          // When video enter first time to view video source should load

          if (item.isIntersecting && !!!isDone) {
            target.load();
            target.setAttribute(lazyOption.done, "");
          } // When video leave the view video should pause


          if (!item.isIntersecting && !!isDone) {
            target.pause();
          } // When video enter the view video should play


          if (item.isIntersecting && !!isDone) {
            target.play();
          }
        } // If lazy at parent element


        if (target.children) {
          var items = [].slice.call(target.children); // Get all child elements

          var _iterator = _createForOfIteratorHelper(items),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _item = _step.value;

              var _isImage = lazyisImage(_item);

              var isSource = lazyisSource(_item);

              var _src = _item.getAttribute(lazyOption.tag);

              var srcset = _item.hasAttribute(lazyOption.srcset);

              if (_isImage) lazyImageLoad(_item, _src);
              if (isSource && lazyisVideo(_item.parentElement)) lazyVideoLoad(_item, _src);
              if (isSource && srcset) lazyPictureLoad(_item, _src);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        return true;
      });
    });

    var lazyImageLoad = function lazyImageLoad(item, src) {
      if (!!!src) return false;
      item.setAttribute("src", src);
      lazyReset(item, lazyOption.tag);

      item.onload = function () {
        if (item.parentElement.hasAttribute(lazyOption.tag) && !!lazyOption.animation) item.parentElement.classList.add(lazyOption.animation);
      };

      return true;
    };

    var lazyBackgroundImageLoad = function lazyBackgroundImageLoad(item, src) {
      if (!!!src) return false;
      item.style.backgroundImage = "url('".concat(src, "')");
      return lazyReset(item, lazyOption.tag);
    };

    var lazyVideoLoad = function lazyVideoLoad(item, src) {
      if (!!!src) return false;
      item.setAttribute("src", src);
      return lazyReset(item, lazyOption.tag);
    };

    var lazyPictureLoad = function lazyPictureLoad(item, srcset) {
      if (!!!srcset) return false;
      item.setAttribute("srcset", srcset);
      return lazyReset(item, lazyOption.tag);
    };

    var _iterator2 = _createForOfIteratorHelper(lazyItems),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var entry = _step2.value;
        lazyLoad.observe(entry);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
}; // Polyfill for IntersectionObserve
// var features = [];
// ('IntersectionObserver' in window) || features.push('IntersectionObserver');
// if (features.length) {
// 	var s = document.createElement('script');
// 	s.src = 'https://polyfill.io/v3/polyfill.min.js?features=' + features.join(',') + '&flags=gated,always&callback=lazy';
// 	s.async = true;
// 	document.head.appendChild(s);
// } else {
// 	lazy();
// }


lazy(); // Google Map Init

var map;

var initGoogleMap = function initGoogleMap() {
  var s = document.createElement('script');
  s.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCqxxOJ9SsSpNNeOCPzwPb88pEVwIxkaUA&callback=initMap';
  s.async = true;
  document.head.appendChild(s);
};

var initMap = function initMap() {
  map = new google.maps.Map(document.querySelector('[googlemap]'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 8
  });
}; // // Just random bg colors - Not related with lazyload
// const initColors = () => {
// 	let items = document.querySelectorAll("section");
// 	for (let i = 0; i < items.length; i++) {
// 		items[i].style.background = randomColor({ luminosity: "light" });
// 	}
// };
// initColors();
"use strict";

function alphaOnly(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[a-zA-ZğüşıöçĞÜŞİÖÇ ]|\./;

  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

function createDate(date) {
  function addZero(num) {
    return num.toString().length == 1 ? "0".concat(num) : num;
  }

  var d = new Date(date);
  var day = addZero(d.getDate());
  var month = addZero(d.getMonth() + 1);
  var year = d.getFullYear();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var second = d.getSeconds();
  var result = "".concat(day, ".").concat(month, ".").concat(year, " ").concat(hour, ":").concat(minute, ":").concat(second);
  return result;
}

var ieAlertHolder = document.querySelector('[ie-alert]');
var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident/.test(ua);

if (isIE) {
  ieAlertHolder.style.display = 'flex';
}

var closeButton = function closeButton() {
  return ieAlertHolder.style.display = 'none';
};
"use strict";

var dataMaxContent = document.querySelector('[data-max-content="true"]');
var dataOrganization = document.querySelector('[data-organization="true"]');

function maxContent() {
  var changeText = document.querySelector('[data-max-text]').getAttribute('data-change-text');
  var orjinalText = document.querySelector('[data-max-text]').getAttribute('data-orjinal-text');
  var dataMaxLink = document.querySelectorAll('[data-max-link]');
  var dataMaxText = document.querySelectorAll('[data-max-text]');
  var active = "-active";
  dataMaxLink.forEach(function (item) {
    var vw = window.innerWidth; // if (dataMaxContent.scrollHeight <= 10 || vw < 680 && dataMaxContent.scrollHeight <= 376) {
    // 	item.classList.add("-disabled");
    // } else {
    // 	item.classList.remove("-disabled");

    item.addEventListener("click", function () {
      var hiddenHeight = dataMaxContent.scrollHeight + 100;

      if (dataMaxContent.classList.contains(active)) {
        dataMaxContent.style.maxHeight = "";
        dataMaxContent.classList.remove(active);
        dataMaxText[0].innerText = orjinalText;
      } else {
        dataMaxContent.style.maxHeight = hiddenHeight + "px";
        dataMaxContent.classList.add(active);
        dataMaxText[0].innerText = changeText;
      }
    }); // }
  });
  return;
}

function maxContentOrganization() {
  var changeTexts = document.querySelector('[data-max-texts]').getAttribute('data-change-texts');
  var orjinalTexts = document.querySelector('[data-max-texts]').getAttribute('data-orjinal-texts');
  var oponer = document.querySelector('[data-max-links]');
  var dataMaxTexts = document.querySelectorAll('[data-max-texts]');
  var active = "-active";
  oponer.addEventListener("click", function () {
    if (dataOrganization.classList.contains(active)) {
      dataOrganization.style.maxHeight = "";
      dataOrganization.classList.remove(active);
      dataMaxTexts[0].innerText = orjinalTexts;
    } else {
      dataOrganization.style.maxHeight = "2078px";
      dataOrganization.classList.add(active);
      dataMaxTexts[0].innerText = changeTexts;
    }
  });
  return;
}

if (!!dataMaxContent === true) maxContent();
if (!!dataOrganization === true) maxContentOrganization();
// var mobileModal = document.querySelector('[data-modal]'),
//     button = document.querySelector('[data-mobile]'),
//     active = "-active",
//     body = "mobile-menu";
// function mobilo () {
//   var cname =  "mobilo";
//   var cvalue =  "mobilo";
//   var cdate =  "365";
//   function mobiloResize () {
//     var vw =  window.innerWidth;
//     mobileModal.classList.add(active);
//     if(vw <= 1199) {
//       document.body.classList.add(body);
//     } else {
//       document.body.classList.remove(body);
//     }
//     button.addEventListener("click", () => {
//       setCookie(cname, cvalue, cdate);
//       mobileModal.classList.remove(active);
//       document.body.classList.remove(body);
//     });
//     if(getCookie(cname) === cvalue) {
//       mobileModal.classList.remove(active);
//     } else {
//       mobileModal.classList.add(active);
//     }
//   }
//   if(getCookie(cname) === cvalue) {
//     //cookie var
//   } else {
//     // window.addEventListener('resize', function(event){
//     //   mobiloResize();
//     // });
//     mobiloResize();
//   } 
// }
// if(mobileModal) mobilo();
"use strict";
"use strict";

var content = document.querySelector('[offer]');
var close = document.querySelector('[offer-close]');
var offerOpen = document.querySelectorAll('[offer-start]');
var inputFocus = document.querySelectorAll("[offer-form-item]"); // Car Selector List

var carSelect = document.querySelector('[car-select]');
var carPlate = document.querySelector('[car-plate]');
var carCity = document.querySelector('[car-city]'); // Traffic Selector List

var trafficSelect = document.querySelector('[traffic-select]');
var trafficPlate = document.querySelector('[traffic-plate]');
var trafficCity = document.querySelector('[traffic-city]'); // Select City

var offerSelectCity = document.querySelectorAll("[offer-select-city]");
var offerDisclaimerMessage = document.querySelector("[offer-disclaimer-message]");
var active = '-active';
var message = {
  tckn: "Lütfen T.C. Kimlik Numarası kontrol ediniz.",
  ykn: "Lütfen T.C. / Yabancı Kimlik Numarası kontrol ediniz.",
  gsm: "Lütfen telefon numaranızı kontrol ediniz.",
  plate: "Lütfen girdiğiniz plakayı kontrol ediniz.",
  email: "Lütfen e-posta adresinizi kontrol ediniz.",
  privacy: "Sözleşmeyi onaylamanız gerekiyor.",
  city: "Lütfen şehir seçiniz.",
  radio: "Lütfen plaka seçimini yapınız.",
  policyNo: "Lütfen poliçe numaranızı kontrol ediniz.",
  travelStartDate: "Lütfen gidiş tarihinizi kontrol ediniz.",
  travelEndDate: "Lütfen dönüş tarihinizi kontrol ediniz.",
  travelDay: "Lütfen bugün veya ileri bir tarih seçiniz.",
  travelStartMaxDay: "Lütfen gidiş tarihini 365 günden daha önce bir tarih seçiniz.",
  travelLastYear: "Lütfen dönüş tarihini 365 günden daha önce bir tarih seçiniz.",
  travelAllStartDate: "Lütfen gidiş tarihinizi kontrol ediniz.",
  travelAllEndDate: "Lütfen dönüş tarihinizi kontrol ediniz."
};
var radioCar = document.querySelectorAll('[offer-car-radio]');
var radioTraffic = document.querySelectorAll('[offer-traffic-radio]');

var openSeperatePrivacy = function openSeperatePrivacy(ths) {
  ths.parentElement.parentElement.style.display = 'none';
  ths.parentElement.parentElement.nextElementSibling.style.display = 'flex';
  ths.parentElement.parentElement.nextElementSibling.nextElementSibling.style.display = 'flex';
};

var closeSeperatePrivacy = function closeSeperatePrivacy() {
  var changePrivacyButtons = document.querySelectorAll('[change-privacy-checkboxs]');

  for (var i = 0; i < changePrivacyButtons.length; i++) {
    var item = changePrivacyButtons[i];
    var src = item.parentElement.parentElement;
    var sep = item.parentElement.parentElement.nextElementSibling;
    var _sep = item.parentElement.parentElement.nextElementSibling.nextElementSibling;

    if (src.style.display == 'none') {
      src.style.display = 'flex';
    }

    if (sep.style.display == 'flex') sep.style.display = 'none';
    if (_sep.style.display == 'flex') _sep.style.display = 'none';
  }
};

if (content) {
  var createYear = function createYear(dt, n) {
    dt = new Date(dt);
    dt.setFullYear(dt.getFullYear() + n);
    return dt;
  };

  var findNow = function findNow() {
    var dt = new Date();
    dt.setHours(0, 0, 0, 0);
    return dt;
  };

  // [
  var addEvent = function addEvent(elem, event, fn) {
    if (elem.addEventListener) {
      elem.addEventListener(event, fn, false);
    } else {
      elem.attachEvent("on" + event, function () {
        return fn.call(elem, window.event);
      });
    }
  };

  var offerFocusControl = function offerFocusControl(obj) {
    Object.keys(obj).forEach(function (item) {
      var val = obj[item];
      if (val.value != "") val.parentElement.classList.add(active);
    });
  };

  var tcknControl = function tcknControl() {
    Object.keys(offerTckn).forEach(function (item) {
      var key = offerTckn;
      var val = offerTckn[item];
      val.addEventListener('focusout', function (e) {
        carTcknMask.value = e.target.value;
        trafficTcknMask.value = e.target.value;
        daskTcknMask.value = e.target.value;
        healthTcknMask.value = e.target.value; // repairTcknMask.value = e.target.value;

        travelTcknMask.value = e.target.value;
        travelAllTcknMask.value = e.target.value;
        offerFocusControl(offerTckn);
      });
    });
  };

  var emailControl = function emailControl() {
    Object.keys(offerEmail).forEach(function (item) {
      var key = offerEmail;
      var val = offerEmail[item];
      val.addEventListener('focusout', function (e) {
        offerEmail.dask.value = e.target.value;
        offerEmail.health.value = e.target.value;
        offerEmail.travel.value = e.target.value;
        offerEmail.travelAll.value = e.target.value;
        offerFocusControl(offerEmail);
      });
    });
  };

  var phoneControl = function phoneControl() {
    Object.keys(offerPhone).forEach(function (item) {
      var key = offerPhone;
      var val = offerPhone[item];
      addEvent(val, 'focus', function () {
        var that = this;

        if (that.value.length <= 1) {
          that.value = '5';
          setTimeout(function () {
            that.selectionStart = that.selectionEnd = 10000;
          }, 0);
        }
      });
      val.addEventListener('focusout', function (e) {
        // daskGsmMask.value = e.target.value;
        // healthGsmMask.value = e.target.value;
        // travelGsmMask.value = e.target.value;
        // travelAllGsmMask.value = e.target.value;
        offerFocusControl(offerPhone);
      });
      val.addEventListener('keypress', function (evt) {
        var theEvent = evt || window.event; // Handle paste

        var key;

        if (theEvent.type === 'paste') {
          key = event.clipboardData.getData('text/plain');
        } else {
          // Handle key press
          key = theEvent.keyCode || theEvent.which;
          key = String.fromCharCode(key);
        }

        var regex = /[0-9]/;

        if (!regex.test(key) || evt.target.value.length > 10) {
          theEvent.returnValue = false;
          if (theEvent.preventDefault) theEvent.preventDefault();
        }
      });
    });
  };

  var cityChange = function cityChange() {
    for (var _i = 0; _i < offerSelectCity.length; _i++) {
      var select = offerSelectCity[_i];
      select.addEventListener('change', function (e) {
        var val = e.target.value;
        var attr = e.target.getAttribute('offer-select-city');
        attr == 'car' ? document.querySelector('[offer-select-city="traffic"]').value = val : document.querySelector('[offer-select-city="car"]').value = val;
      });
    }
  };

  var plateControl = function plateControl() {
    Object.keys(offerPlate).forEach(function (item) {
      var key = offerPlate;
      var val = offerPlate[item];
      val.addEventListener('focusout', function (e) {
        offerPlate.car.value = e.target.value;
        offerPlate.traffic.value = e.target.value;
        offerFocusControl(offerPlate);
      });
    });
  };

  var policy = function policy() {
    Object.keys(offerPolicy).forEach(function (item) {
      var key = offerPolicy;
      var val = offerPolicy[item];
      val.addEventListener('focusout', function (e) {
        offerPolicyNo.value = e.target.value;
        offerFocusControl(offerPolicy);
      });
    });
  };

  var privacyControl = function privacyControl(checked) {
    var privacy = document.querySelectorAll('[offer-privacy]');

    for (var _i2 = 0; _i2 < privacy.length; _i2++) {
      var el = privacy[_i2];
      el.addEventListener('change', function (e) {
        var check = e.target.checked;

        for (var ii = 0; ii < privacy.length; ii++) {
          var checkbox = privacy[ii];
          checkbox.checked = check;
        }
      });
    }
  };

  var offerNotification = function offerNotification() {
    var cname = "Offer Cookie";
    var cvalue = "offer-cookie";
    var cdate = "365";

    if (getCookie(cname) === cvalue) {
      offerOpen.forEach(function (item) {
        item.parentElement.classList.add(active);
      });
      content.classList.remove(active);
    } else {
      offerOpen.forEach(function (item) {
        item.classList.remove(active);
      });
      content.classList.add(active);
    }

    close.addEventListener("click", function () {
      content.classList.remove(active);
      offerOpen.forEach(function (item) {
        item.parentElement.classList.add(active);
      });

      if (checkCookie() === false) {
        setCookie(cname, cvalue, cdate);
      }
    });
  };

  var formItemFocus = function formItemFocus() {
    inputFocus.forEach(function (element) {
      element.addEventListener('focusin', function (e) {
        if (!e.target.value) e.target.parentElement.classList.remove(active);
        element.classList.add(active);
      });
      element.addEventListener('focusout', function (e) {
        if (!e.target.value) e.target.parentElement.classList.remove(active);
      });
      element.addEventListener("click", function (e) {
        if (element.classList.contains(active)) {
          if (!element.value) {
            element.addEventListener('focusout', function (e) {
              if (!e.target.value) e.target.parentElement.classList.remove(active);
            });
          }
        } else {
          element.parentElement.classList.add(active);
        }
      });
    });
  };

  var radioChange = function radioChange() {
    var _loop = function _loop(_i3) {
      var itemCar = radioCar[_i3];
      itemCar.addEventListener('change', function (e) {
        var val = e.target.value;
        isPlate(val, _i3);
      });
    };

    for (var _i3 = 0; _i3 < radioCar.length; _i3++) {
      _loop(_i3);
    }

    var _loop2 = function _loop2(_i4) {
      var itemTraffic = radioTraffic[_i4];
      itemTraffic.addEventListener('change', function (e) {
        var val = e.target.value;
        isPlate(val, _i4);
      });
    };

    for (var _i4 = 0; _i4 < radioTraffic.length; _i4++) {
      _loop2(_i4);
    }
  };

  var isPlate = function isPlate(val, i) {
    if (val == 'E') {
      carPlate.classList.remove('-hidden');
      carCity.classList.add('-hidden');
      trafficPlate.classList.remove('-hidden');
      trafficCity.classList.add('-hidden');
    }

    if (val == 'H') {
      carCity.classList.remove('-hidden');
      carPlate.classList.add('-hidden');
      trafficCity.classList.remove('-hidden');
      trafficPlate.classList.add('-hidden');
    }

    radioCar[i].checked = true;
    radioTraffic[i].checked = true;
  };

  var getRadioValue = function getRadioValue(el) {
    for (var _i5 = 0; _i5 < el.length; _i5++) {
      var element = el[_i5];
      if (element.checked) return element.value;
    }
  };

  var errorMessageReset = function errorMessageReset() {
    offerDisclaimerMessage.innerText = "";
    offerDisclaimerMessage.classList.remove(active);
  };

  var errorMessage = function errorMessage() {
    offerDisclaimerMessage.classList.add(active);
    setTimeout(function () {
      offerDisclaimerMessage.innerText = "";
      offerDisclaimerMessage.classList.remove(active);
    }, 2400);
  }; //Get City


  var getCity = function getCity() {
    ilGetir().then(function (response) {
      offerSelectCity.forEach(function (select) {
        if (response.data.length > 0) {
          response.data.forEach(function (item) {
            select.insertAdjacentHTML('beforeend', '<option value="' + item['b:Id'][0] + '">' + item['b:Name'][0] + '</option>');
          });
        }
      });
    });
  }; // Post KVKK


  var postKVKK = function postKVKK(tckn, personal, privacyCheck, lighting) {
    var _csrf = document.querySelector("[name=_csrf]").value;
    var rizabeyan = 0;
    var param = personal == 1 && privacyCheck == 1 && lighting == 1;
    if (param) rizabeyan = 1;
    axios({
      method: 'post',
      url: '/service/GizlilikPolitikasi',
      data: {
        tckn: tckn,
        kvkk: personal,
        gizlilik: privacyCheck,
        aydinlatma: lighting,
        rizabeyan: rizabeyan,
        _csrf: _csrf
      }
    }).then(function (response) {// console.log(response)
    }).catch(function (error) {// console.log('error', error);
    });
  }; // alinan tarih i newDate formatina ceviriyoruz.


  var isSinglePrivacy = true;
  var changePrivacyButtons = document.querySelectorAll('[change-privacy-checkboxs]');

  for (var i = 0; i < changePrivacyButtons.length; i++) {
    var item = changePrivacyButtons[i];
    item.addEventListener("click", function (e) {
      openSeperatePrivacy(e.srcElement);
    });
  }

  var offerTckn = {
    car: document.querySelector('[offer-car-tckn]'),
    traffic: document.querySelector('[offer-traffic-tckn]'),
    dask: document.querySelector('[offer-dask-tckn]'),
    health: document.querySelector('[offer-health-tckn]'),
    // repair: document.querySelector('[offer-repair-tckn]'),
    travel: document.querySelector('[offer-travel-tckn]'),
    travelAll: document.querySelector('[offer-alltravel-tckn]')
  };
  var offerPhone = {
    health: document.querySelector('[offer-health-phone]'),
    dask: document.querySelector('[offer-dask-phone]'),
    daskRepair: document.querySelector('[offer-dask-repair-phone]'),
    travel: document.querySelector('[offer-travel-phone]'),
    travelAll: document.querySelector('[offer-alltravel-phone]'),
    covidTravelAll: document.querySelector('[offer-covidtravel-phone]')
  };
  var offerEmail = {
    health: document.querySelector('[offer-health-mail]'),
    dask: document.querySelector('[offer-dask-mail]'),
    travel: document.querySelector('[offer-travel-mail]'),
    travelAll: document.querySelector('[offer-alltravel-mail]')
  };
  var offerPlate = {
    traffic: document.querySelector('[offer-traffic-plate]'),
    car: document.querySelector('[offer-car-plate]')
  };
  var offerPolicy = {
    policyNo: document.querySelector('[offer-policy-no]')
  };
  var offerTravel = {
    travelStartDate: document.querySelector('[offer-travel-startDate]'),
    travelEndDate: document.querySelector('[offer-travel-endDate]'),
    travelAllStartDate: document.querySelector('[offer-alltravel-startDate]'),
    travelAllEndDate: document.querySelector('[offer-alltravel-endDate]'),
    travelCovidStartDate: document.querySelector('[offer-covidtravel-startDate]'),
    travelCovidEndDate: document.querySelector('[offer-covidtravel-enddate]')
  };
  var carTcknMask = new IMask(offerTckn.car, {
    mask: '00000000000'
  });
  var trafficTcknMask = new IMask(offerTckn.traffic, {
    mask: '00000000000'
  });
  var daskTcknMask = new IMask(offerTckn.dask, {
    mask: '00000000000'
  });
  var healthTcknMask = new IMask(offerTckn.health, {
    mask: '00000000000'
  }); // var repairTcknMask = new IMask(offerTckn.repair, { mask: '00000000000' });

  var travelTcknMask = new IMask(offerTckn.travel, {
    mask: '00000000000'
  });
  var travelAllTcknMask = new IMask(offerTckn.travelAll, {
    mask: '00000000000'
  }); // var daskGsmMask = new IMask(offerPhone.dask, { mask: '{5}00 000 0000' });
  // var daskRepairGsmMask = new IMask(offerPhone.daskRepair, { mask: '{5}00 000 0000' });
  // var healthGsmMask = new IMask(offerPhone.health, { mask: '{5}00 000 0000' });
  // var travelGsmMask = new IMask(offerPhone.travel, { mask: '{5}00 000 0000' });
  // var travelAllGsmMask = new IMask(offerPhone.travelAll, { mask: '{5}00 000 0000' });

  var carPlateMask = new IMask(offerPlate.car, {
    mask: [{
      mask: '00-aaa-`00[0]'
    }, {
      mask: '00-aa-`000[0]'
    }, {
      mask: '00-a-`0000[0]'
    }]
  });
  var trafficPlateMask = new IMask(offerPlate.traffic, {
    mask: [{
      mask: '00-aaa-`00[0]'
    }, {
      mask: '00-aa-`000[0]'
    }, {
      mask: '00-a-`0000[0]'
    }]
  });
  var offerPolicyNo = new IMask(offerPolicy.policyNo, {
    mask: '0000000000'
  });
  var nextYearToday = createYear(findNow(), 1);

  var _today = createYear(findNow(), 0);

  var _options = {
    mask: Date,
    min: _today,
    max: nextYearToday
  };
  var travelStartDate = new IMask(offerTravel.travelStartDate, _options);
  var travelEndDate = new IMask(offerTravel.travelEndDate, _options);
  var travelAllStartDate = new IMask(offerTravel.travelAllStartDate, _options);
  var travelAllEndDate = new IMask(offerTravel.travelAllEndDate, _options);
  var travelCovidStartDate = new IMask(offerTravel.travelCovidStartDate, _options);
  var travelCovidEndDate = new IMask(offerTravel.travelCovidEndDate, _options);
  offerTravel.travelStartDate.addEventListener('focusout', function (event) {
    var val = event.target.value.replace(/\./g, '/');
    var isValidDate = val.length == 10;

    if (isValidDate) {
      var _val = val.split('/');

      var dt = new Date("".concat(_val[1], "/").concat(_val[0], "/").concat(_val[2]));
      dt.setHours(0, 0, 0, 0);
      var newOptions = {
        mask: Date,
        min: dt,
        max: nextYearToday
      };
      travelEndDate.destroy();
      travelEndDate = new IMask(offerTravel.travelEndDate, newOptions);
    }

    offerTravel.travelStartDate.value = event.target.value;
  });
  offerTravel.travelEndDate.addEventListener('focusout', function (event) {// let val = event.target.value.replace(/\./g, '/');
    // offerTravel.travelEndDate.value = val;
  });
  offerTravel.travelEndDate.addEventListener('focus', function (event) {
    if (offerTravel.travelStartDate.value == '') {
      offerTravel.travelStartDate.parentElement.classList.add('-active');
      offerTravel.travelStartDate.classList.add('-active');
      var datetime = new Date();
      var day = datetime.getDate();
      var month = datetime.getMonth() + 1;
      var year = datetime.getFullYear();

      if (month.toString().length < 2) {
        offerTravel.travelStartDate.value = "".concat(day, "/0").concat(month, "/").concat(year);
      } else {
        offerTravel.travelStartDate.value = "".concat(day, "/").concat(month, "/").concat(year);
      }
    }
  });
  offerTravel.travelAllStartDate.addEventListener('focusout', function (event) {
    var val = event.target.value.replace(/\./g, '/');
    var isValidDate = val.length == 10;

    if (isValidDate) {
      var _val = val.split('/');

      var dt = new Date("".concat(_val[1], "/").concat(_val[0], "/").concat(_val[2]));
      dt.setHours(0, 0, 0, 0);
      var newOptions = {
        mask: Date,
        min: dt,
        max: nextYearToday
      };
      travelAllEndDate.destroy();
      travelAllEndDate = new IMask(offerTravel.travelAllEndDate, newOptions);
    }

    offerTravel.travelAllStartDate.value = event.target.value;
  });
  offerTravel.travelAllEndDate.addEventListener('focusout', function (event) {// let val = event.target.value.replace(/\./g, '/');
    // offerTravel.travelAllEndDate.value = val;
  });
  offerTravel.travelAllEndDate.addEventListener('focus', function (event) {
    if (offerTravel.travelAllStartDate.value == '') {
      offerTravel.travelAllStartDate.parentElement.classList.add('-active');
      offerTravel.travelAllStartDate.classList.add('-active');
      var datetime = new Date();
      var day = datetime.getDate();
      var month = datetime.getMonth() + 1;
      var year = datetime.getFullYear();

      if (month.toString().length < 2) {
        offerTravel.travelAllStartDate.value = "".concat(day, "/0").concat(month, "/").concat(year);
      } else {
        offerTravel.travelAllStartDate.value = "".concat(day, "/").concat(month, "/").concat(year);
      }
    }
  });
  offerTravel.travelCovidStartDate.addEventListener('focusout', function (event) {
    var val = event.target.value.replace(/\./g, '/');
    var isValidDate = val.length == 10;

    if (isValidDate) {
      var _val = val.split('/');

      var dt = new Date("".concat(_val[1], "/").concat(_val[0], "/").concat(_val[2]));
      dt.setHours(0, 0, 0, 0);
      var newOptions = {
        mask: Date,
        min: dt,
        max: nextYearToday
      };
      travelCovidEndDate.destroy();
      travelCovidEndDate = new IMask(offerTravel.travelCovidEndDate, newOptions);
    }

    offerTravel.travelCovidStartDate.value = event.target.value;
  });
  offerTravel.travelCovidEndDate.addEventListener('focusout', function (event) {// let val = event.target.value.replace(/\./g, '/');
    // offerTravel.travelCovidEndDate.value = val;
  });
  offerTravel.travelCovidEndDate.addEventListener('focus', function (event) {
    if (offerTravel.travelCovidStartDate.value == '') {
      offerTravel.travelCovidStartDate.parentElement.classList.add('-active');
      offerTravel.travelCovidStartDate.classList.add('-active');
      var datetime = new Date();
      var day = datetime.getDate();
      var month = datetime.getMonth() + 1;
      var year = datetime.getFullYear();

      if (month.toString().length < 2) {
        offerTravel.travelCovidStartDate.value = "".concat(day, "/0").concat(month, "/").concat(year);
      } else {
        offerTravel.travelCovidStartDate.value = "".concat(day, "/").concat(month, "/").concat(year);
      }
    }
  });
  privacyControl(false);
  cityChange();
  tcknControl();
  emailControl();
  phoneControl();
  plateControl();
  policy();
  offerOpen.forEach(function (item) {
    item.addEventListener("click", function () {
      content.classList.add(active);
      item.parentElement.classList.remove(active);
      checkCookie("Offer Cookie", "offer-cookie");
    });
  });
  offerNotification();

  var dateFormat = function dateFormat(date) {
    var addYear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (date == "") return false;

    if (date.length == 10) {
      var dateSplit = date.split("/");
      var dateDay = dateSplit[0];
      var dateMonth = dateSplit[1];
      var dateYear = dateSplit[2];
      return new Date(parseInt(dateYear) + parseInt(addYear), parseInt(dateMonth) - 1, dateDay, 0, 0, 0, 0);
    }
  };

  var offerCarSend = document.querySelector('[offer-car-form-send]');
  var offerTrafficSend = document.querySelector('[offer-traffic-form-send]');
  var offerDaskSend = document.querySelector('[offer-daks-form-send]');
  var offerHealthSend = document.querySelector('[offer-health-form-send]');
  var offerDaskRepairSend = document.querySelector('[offer-dask-repair-form-send]');
  var offerTravelSend = document.querySelector('[offer-travel-form-send]');
  var offerTravelAllSend = document.querySelector('[offer-alltravel-form-send]');
  var offerCovidFormSend = document.querySelector('[offer-covid-form-send]');
  offerCarSend.addEventListener("click", function () {
    var tcknItem = document.querySelector("[offer-car-tckn]");
    var tckn = tcknItem.value;
    var plateInput = document.querySelector("[offer-car-plate]");
    var plate = plateInput.value;
    var privacyItem = document.querySelector("[offer-privacy='car']");
    var privacy = privacyItem.checked;

    var isPlate = function isPlate() {
      return plate.length >= 9 ? true : false;
    };

    var select = getRadioValue(radioCar);

    if (select === "E") {
      if (isPlate() && validateID(tckn) && privacy) {
        //Error message remove
        offerDisclaimerMessage.classList.remove(active); //String Split

        var regexpString = /[A-Z]/gi;
        var codeArray = plate.match(regexpString);
        var code = codeArray.join("").toUpperCase(); //NaN Split

        var regexpNaN = /[0-9]/gi;
        var cityArray = plate.match(regexpNaN);
        var plateLength = cityArray.length;
        var twoLine = plate.slice(0, 2);
        var lineNan = twoLine.match(regexpNaN);

        if (lineNan.length === 1) {
          var city = cityArray[0] + cityArray[1];
          city = 0 + lineNan;
          num = cityArray.slice(1, plateLength).join("");
        } else {
          var city = cityArray[0] + cityArray[1];
          var num = cityArray.slice(2, plateLength).join("");
        }

        postKVKK(1, 1, 1, 1);
        errorMessageReset(); // window.open(`https://sigorta.somposigorta.com.tr/Satis/Kasko?identityNo=${tckn}&plateExists=E&plateCity=${city}&plateChar=${code}&plateNo=${num}&proposalType=1`, '_blank');

        window.open("https://sigorta.somposigorta.com.tr/SatisV2?identityNo=" + tckn + "&plate=" + city + code + num + "&productNo=307&referrer=kasko-sticky", '_blank');
      } else {
        // form validasyon control
        if (!privacy) offerDisclaimerMessage.innerText = message.privacy;
        if (!isPlate()) offerDisclaimerMessage.innerText = message.plate;
        if (!select) offerDisclaimerMessage.innerText = message.radio;

        if (!validateID(tckn)) {
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
            "event": "gaEvent",
            "Sticky": "N",
            "Category": "Kasko - Footer",
            "Action": "Input Error",
            "Label": "TC No",
            "Value": "",
            "nonInteraction": false
          });
          offerDisclaimerMessage.innerText = message.tckn;
        }

        errorMessage();
      }
    } else {
      var selectCarSelect = document.querySelector('[offer-select-city="car"]').value;

      if (selectCarSelect !== "" && validateID(tckn) && privacy) {
        postKVKK(1, 1, 1, 1);
        errorMessageReset(); // window.open(`https://sigorta.somposigorta.com.tr/Satis/Kasko?identityNo=${tckn}&plateExists=${select}&plateCity=${selectCarSelect}&plateChar=YK&proposalType=1`, '_blank');

        window.open("https://sigorta.somposigorta.com.tr/Satisv2?identityNo=" + tckn + "&plate=" + selectCarSelect + "YK&productNo=307&referrer=kasko-sticky", '_blank');
      } else {
        if (!privacy) offerDisclaimerMessage.innerText = message.privacy;
        if (selectCarSelect == "") offerDisclaimerMessage.innerText = message.city;
        if (!select) offerDisclaimerMessage.innerText = message.radio;

        if (!validateID(tckn)) {
          offerDisclaimerMessage.innerText = message.tckn;
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
            "event": "gaEvent",
            "Sticky": "N",
            "Category": "Kasko - Footer",
            "Action": "Input Error",
            "Label": "TC No",
            "Value": "",
            "nonInteraction": false
          });
        }

        errorMessage();
      }
    }
  });
  offerTrafficSend.addEventListener("click", function () {
    var tcknItem = document.querySelector("[offer-traffic-tckn]");
    var tckn = tcknItem.value;
    var plateInput = document.querySelector("[offer-traffic-plate]");
    var plate = plateInput.value;
    var privacyItem = document.querySelector("[offer-privacy='traffic']");
    var privacy = privacyItem.checked;

    var isPlate = function isPlate() {
      return plate.length >= 9 ? true : false;
    };

    var select = getRadioValue(radioTraffic);

    if (!validateID(tckn)) {
      offerDisclaimerMessage.innerText = message.tckn;
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        "event": "gaEvent",
        "Sticky": "N",
        "Category": "Trafik Sigorta Policesi - Footer",
        "Action": "Input Error",
        "Label": "TC No",
        "Value": "",
        "nonInteraction": false
      });
    }

    if (select === "E") {
      if (isPlate() && validateID(tckn) && privacy) {
        //Error message remove
        offerDisclaimerMessage.classList.remove(active); //String Split

        var regexpString = /[A-Z]/gi;
        var codeArray = plate.match(regexpString);
        var code = codeArray.join("").toUpperCase(); //NaN Split

        var regexpNaN = /[0-9]/gi;
        var cityArray = plate.match(regexpNaN);
        var plateLength = cityArray.length;
        var twoLine = plate.slice(0, 2);
        var lineNan = twoLine.match(regexpNaN);

        if (lineNan.length === 1) {
          var city = cityArray[0] + cityArray[1];
          city = 0 + lineNan;
          num = cityArray.slice(1, plateLength).join("");
        } else {
          var city = cityArray[0] + cityArray[1];
          var num = cityArray.slice(2, plateLength).join("");
        }

        postKVKK(1, 1, 1, 1);
        errorMessageReset();
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          "event": "gaEvent",
          "Sticky": "N",
          "Category": "Araç",
          "Action": "Trafik Sigorta Policesi",
          "Label": "Teklif Al Footer",
          "Value": "",
          "nonInteraction": false
        }); // window.open(`https://sigorta.somposigorta.com.tr/Satis/Trafik?identityNo=${tckn}&plateExists=E&plateCity=${city}&plateChar=${code}&plateNo=${num}&proposalType=2`, '_blank');

        window.open("https://sigorta.somposigorta.com.tr/SatisV2?identityNo=" + tckn + "&plate=" + city + code + num + "&productNo=311&referrer=trafik-sticky", '_blank');
      } else {
        // form validasyon control
        if (!privacy) offerDisclaimerMessage.innerText = message.privacy;
        if (!isPlate()) offerDisclaimerMessage.innerText = message.plate;
        if (!select) offerDisclaimerMessage.innerText = message.radio;

        if (!validateID(tckn)) {
          offerDisclaimerMessage.innerText = message.tckn;
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
            "event": "gaEvent",
            "Sticky": "N",
            "Category": "Trafik Sigorta Policesi - Footer",
            "Action": "Input Error",
            "Label": "TC No",
            "Value": "",
            "nonInteraction": false
          });
        }

        errorMessage();
      }
    } else {
      var selectTrafficSelect = document.querySelector('[offer-select-city="traffic"]').value;

      if (selectTrafficSelect !== "" && validateID(tckn) && privacy) {
        postKVKK(1, 1, 1, 1);
        errorMessageReset();
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          "event": "gaEvent",
          "Sticky": "N",
          "Category": "Araç",
          "Action": "Trafik Sigorta Policesi",
          "Label": "Teklif Al Footer",
          "Value": "",
          "nonInteraction": false
        }); // window.open(`https://sigorta.somposigorta.com.tr/Satisv2?identityNo=${tckn}&plateExists=${select}&plateCity=${selectTrafficSelect}&plateChar=YK&proposalType=2&productNo=311`, '_blank');

        window.open("https://sigorta.somposigorta.com.tr/Satisv2?identityNo=" + tckn + "&plate=" + selectTrafficSelect + "YK&productNo=311&referrer=trafik-sticky", '_blank');
      } else {
        if (!privacy) offerDisclaimerMessage.innerText = message.privacy;
        if (selectTrafficSelect == "") offerDisclaimerMessage.innerText = message.city;
        if (!select) offerDisclaimerMessage.innerText = message.radio;

        if (!validateID(tckn)) {
          offerDisclaimerMessage.innerText = message.tckn;
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
            "event": "gaEvent",
            "Sticky": "N",
            "Category": "Trafik Sigorta Policesi - Footer",
            "Action": "Input Error",
            "Label": "TC No",
            "Value": "",
            "nonInteraction": false
          });
        }

        errorMessage();
      }
    }
  });
  offerDaskSend.addEventListener("click", function () {
    var url = window.location.pathname;
    var tcknVal = document.querySelector("[offer-dask-tckn]");
    var tckn = tcknVal.value;
    var mailVal = document.querySelector("[offer-dask-mail]");
    var mail = mailVal.value.toLocaleLowerCase('tr');
    var mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var control = mailReg.test(mail);
    var gsmVal = document.querySelector("[offer-dask-phone]");
    var gsmValue = gsmVal.value;
    var gsm = gsmValue.split(" ").join("");
    var privacyItem = document.querySelector("[offer-privacy='dask']");
    var privacy = privacyItem.checked;

    if (gsmValue.length >= 10 && validateID(tckn) && control && privacy) {
      postKVKK(1, 1, 1, 1);
      errorMessageReset(); // window.open(`https://sigorta.somposigorta.com.tr/Satis/DASK?identityNo=${tckn}&phoneNumber=0${gsm}&mail=${mail}`, '_blank');

      window.open("https://sigorta.somposigorta.com.tr/SatisV2?identityNo=" + tckn + "&phoneNumber=0" + gsm + "&email=" + mail + "&productNo=117&referrer=dask-sticky-1", '_blank');
    } else {
      if (!privacy) offerDisclaimerMessage.innerText = message.privacy;
      if (!control) offerDisclaimerMessage.innerText = message.email;
      if (gsmValue.length < 10) offerDisclaimerMessage.innerText = message.gsm;

      if (!validateID(tckn)) {
        offerDisclaimerMessage.innerText = message.tckn;
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          "event": "gaEvent",
          "Sticky": "N",
          "Category": "Yeni Dask - Footer",
          "Action": "Input Error",
          "Label": "TC No",
          "Value": "",
          "nonInteraction": false
        });
      }

      errorMessage();
    }
  });
  offerHealthSend.addEventListener("click", function () {
    var url = window.location.pathname;
    var tcknVal = document.querySelector("[offer-health-tckn]");
    var tckn = tcknVal.value;
    var mailVal = document.querySelector("[offer-health-mail]");
    var mail = mailVal.value.toLocaleLowerCase('tr');
    var mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var control = mailReg.test(mail);
    var gsmVal = document.querySelector("[offer-health-phone]");
    var gsmValue = gsmVal.value;
    var gsm = gsmValue.split(" ").join("");
    var privacyItem = document.querySelector("[offer-privacy='health']");
    var privacy = privacyItem.checked;

    if (gsmValue.length >= 10 && validateID(tckn) && control && privacy) {
      postKVKK(1, 1, 1, 1);
      errorMessageReset(); // window.open(`https://sigorta.somposigorta.com.tr/Satis/TamamlayiciSaglik?identityNo=${tckn}&phoneNumber=0${gsm}&mail=${mail}`, '_blank');

      window.open("https://sigorta.somposigorta.com.tr/SatisV2?identityNo=" + tckn + "&phoneNumber=0" + gsm + "&email=" + mail + "&productNo=804&referrer=tamamlayicisaglik-sticky", '_blank');
    } else {
      if (!privacy) offerDisclaimerMessage.innerText = message.privacy;
      if (!control) offerDisclaimerMessage.innerText = message.email;
      if (gsmValue.length < 10) offerDisclaimerMessage.innerText = message.gsm;

      if (!validateID(tckn)) {
        offerDisclaimerMessage.innerText = message.tckn;
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          "event": "gaEvent",
          "Sticky": "N",
          "Category": "Tamamlayici Saglik Policesi - Footer",
          "Action": "Input Error",
          "Label": "TC No",
          "Value": "",
          "nonInteraction": false
        });
      }

      errorMessage();
    }
  });
  offerDaskRepairSend.addEventListener("click", function () {
    var url = window.location.pathname; // var tcknVal = document.querySelector("[offer-repair-tckn]");
    // var tckn = tcknVal.value;

    var mailVal = document.querySelector("[offer-dask-repair-mail]");
    var mail = mailVal.value.toLocaleLowerCase('tr');
    var mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var control = mailReg.test(mail);
    var gsmVal = document.querySelector("[offer-dask-repair-phone]");
    var gsmValue = gsmVal.value;
    var gsm = gsmValue.split(" ").join("");
    var policy = document.querySelector("[offer-policy-no]");
    var policyNo = policy.value;
    var privacyItem = document.querySelector("[offer-privacy='dask']");
    var privacy = privacyItem.checked;

    if (gsmValue.length >= 10 && control && privacy && policyNo) {
      postKVKK(1, 1, 1, 1);
      errorMessageReset();
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        "event": "gaEvent",
        "Sticky": "N",
        "Category": "Konut/DASK",
        "Action": "Dask Sigorta Policesi",
        "Label": "Teklif Al Footer - Dask Yenileme",
        // Seçilen Opsiyon Teklif Al butonu başarılı bir şekilde çalıştırıldığında gönderimi sağlanacak.
        "Value": "",
        "nonInteraction": false
      }); // window.open(`https://sigorta.somposigorta.com.tr/Satis/dask-teklif-yenile?daskPolicyNo=${policyNo}&phoneNumber=0${gsm}&mail=${mail}`, '_blank');

      window.open("https://sigorta.somposigorta.com.tr/SatisV2?policyNo=" + policyNo + "&phoneNumber=0" + gsm + "&email=" + mail + "&productNo=117&referrer=dask-sticky-2", '_blank');
    } else {
      if (!privacy) offerDisclaimerMessage.innerText = message.privacy;
      if (!control) offerDisclaimerMessage.innerText = message.email;
      if (gsmValue.length < 10) offerDisclaimerMessage.innerText = message.gsm;
      if (!policyNo) offerDisclaimerMessage.innerText = message.policyNo;
      errorMessage();
    }
  });
  offerTravelSend.addEventListener("click", function () {
    var url = window.location.pathname;
    var tcknVal = document.querySelector("[offer-travel-tckn]");
    var tckn = tcknVal.value;
    var mailVal = document.querySelector("[offer-travel-mail]");
    var mail = mailVal.value.toLocaleLowerCase('tr');
    var mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var control = mailReg.test(mail);
    var gsmVal = document.querySelector("[offer-travel-phone]");
    var gsmValue = gsmVal.value;
    var gsm = gsmValue.split(" ").join("");
    var travelStartDateVal = document.querySelector("[offer-travel-startDate]");
    var travelStartDate = travelStartDateVal.value;
    var travelEndDateVal = document.querySelector("[offer-travel-endDate]");
    var travelEndDate = travelEndDateVal.value;
    var productNo = document.querySelector("[offer-travel-product]");
    var productNoVal = productNo.value;
    var privacyItem = document.querySelector("[offer-privacy='travel']");
    var privacy = privacyItem.checked; // new date format

    var startDate = dateFormat(travelStartDate);
    var maxStartDate = dateFormat(new Date().getDate() + '/' + new Date().getMonth() + 1 + '/' + new Date().getFullYear(), 1);
    var endDate = dateFormat(travelEndDate);
    var createDate = dateFormat(travelStartDate, 1);
    var today = new Date().setHours(0, 0, 0, 0);
    var isStartDateValid = travelStartDate.length == 10;
    var isEndDateValid = travelEndDate.length == 10;

    if (gsmValue.length >= 10 && validateID(tckn) && control && privacy && isStartDateValid && isEndDateValid) {
      postKVKK(1, 1, 1, 1);
      errorMessageReset(); //window.open(`https://sigorta.somposigorta.com.tr/Satis/Seyahat?identityNo=${tckn}&phoneNumber=0${gsm}&mail=${mail}&startDate=${travelStartDate}&endDate=${travelEndDate}&productId=${productNoVal}`, '_blank');

      window.open("https://sigorta.somposigorta.com.tr/SatisV2?identityNo=" + tckn + "&startDate=" + travelStartDate + "&endDate=" + travelEndDate + "&phoneNumber=0" + gsm + "&email=" + mail + "&productId=" + productNoVal + "&productNo=455&referrer=seyahat-sticky-1", '_blank');
    } else {
      if (!privacy) offerDisclaimerMessage.innerText = message.privacy;
      if (startDate > maxStartDate) offerDisclaimerMessage.innerText = message.travelStartMaxDay;
      if (startDate < today) offerDisclaimerMessage.innerText = message.travelDay;
      if (travelStartDate.length < 10) offerDisclaimerMessage.innerText = message.travelStartDate;
      if (travelEndDate.length < 10) offerDisclaimerMessage.innerText = message.travelEndDate;
      if (endDate > createDate) offerDisclaimerMessage.innerText = message.travelLastYear;
      if (endDate < startDate) offerDisclaimerMessage.innerText = message.travelEndDate;
      if (!control) offerDisclaimerMessage.innerText = message.email;
      if (gsmValue.length < 10) offerDisclaimerMessage.innerText = message.gsm;

      if (!validateID(tckn)) {
        offerDisclaimerMessage.innerText = message.tckn;
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          "event": "gaEvent",
          "Sticky": "N",
          "Category": "Seyahat/TÜM DÜNYA(AMERİKA VE KANADA HARİÇ) - Footer",
          // Seçilen kategori bilgisi gönderilecek
          "Action": "Input Error",
          "Label": "TC No",
          // TC kimlik bilgisi eksik girildiğinde gönderilecek.
          "Value": "",
          "nonInteraction": false
        });
      }

      errorMessage();
    }
  });
  offerTravelAllSend.addEventListener("click", function () {
    var url = window.location.pathname;
    var tcknVal = document.querySelector("[offer-alltravel-tckn]");
    var tckn = tcknVal.value;
    var mailVal = document.querySelector("[offer-alltravel-mail]");
    var mail = mailVal.value.toLocaleLowerCase('tr');
    var mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var control = mailReg.test(mail);
    var gsmVal = document.querySelector("[offer-alltravel-phone]");
    var gsmValue = gsmVal.value;
    var gsm = gsmValue.split(" ").join("");
    var travelAllStartDateVal = document.querySelector("[offer-alltravel-startDate]");
    var travelAllStartDate = travelAllStartDateVal.value;
    var travelAllEndDateVal = document.querySelector("[offer-alltravel-endDate]");
    var travelAllEndDate = travelAllEndDateVal.value;
    var productNo = document.querySelector("[offer-alltravel-product]");
    var productNoVal = productNo.value;
    var privacyItem = document.querySelector("[offer-privacy='travel']");
    var privacy = privacyItem.checked; // new date format

    var startDate = dateFormat(travelAllStartDate);
    var maxStartDate = dateFormat(new Date().getDate() + '/' + new Date().getMonth() + 1 + '/' + new Date().getFullYear(), 1);
    var endDate = dateFormat(travelAllEndDate);
    var createDate = dateFormat(travelAllStartDate, 1);
    var today = new Date().setHours(0, 0, 0, 0);
    var isStartDateValid = travelAllStartDate.length == 10;
    var isEndDateValid = travelAllEndDate.length == 10;

    if (gsmValue.length >= 10 && validateID(tckn) && control && privacy && isStartDateValid && isEndDateValid) {
      postKVKK(1, 1, 1, 1);
      errorMessageReset(); // window.open(`https://sigorta.somposigorta.com.tr/Satis/Seyahat?identityNo=${tckn}&phoneNumber=0${gsm}&mail=${mail}&startDate=${travelAllStartDate}&endDate=${travelAllEndDate}&productId=${productNoVal}`, '_blank');

      window.open("https://sigorta.somposigorta.com.tr/SatisV2?identityNo=" + tckn + "&startDate=" + travelAllStartDate + "&endDate=" + travelAllEndDate + "&phoneNumber=0" + gsm + "&email=" + mail + "&productId=" + productNoVal + "&productNo=455&referrer=seyahat-sticky-2", '_blank');
    } else {
      if (!privacy) offerDisclaimerMessage.innerText = message.privacy;
      if (startDate > maxStartDate) offerDisclaimerMessage.innerText = message.travelStartMaxDay;
      if (startDate < today) offerDisclaimerMessage.innerText = message.travelDay;
      if (endDate > createDate) offerDisclaimerMessage.innerText = message.travelLastYear;
      if (endDate < startDate) offerDisclaimerMessage.innerText = message.travelAllEndDate;
      if (travelAllStartDate.length < 10 || travelAllEndDate.length < 10) offerDisclaimerMessage.innerText = message.travelAllStartDate;
      if (!control) offerDisclaimerMessage.innerText = message.email;
      if (gsmValue.length < 10) offerDisclaimerMessage.innerText = message.gsm;

      if (!validateID(tckn)) {
        offerDisclaimerMessage.innerText = message.tckn;
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          "event": "gaEvent",
          "Sticky": "N",
          "Category": "Seyahat/TÜM DÜNYA(AMERİKA VE KANADA DAHİL) - Footer",
          "Action": "Input Error",
          "Label": "TC No",
          "Value": "",
          "nonInteraction": false
        });
      }

      errorMessage();
    }
  });
  offerCovidFormSend.addEventListener("click", function () {
    var url = window.location.pathname;
    var tcknVal = document.querySelector("[offer-covidtravel-tckn]");
    var tckn = tcknVal.value;
    var mailVal = document.querySelector("[offer-covidtravel-mail]");
    var mail = mailVal.value.toLocaleLowerCase('tr');
    var mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var control = mailReg.test(mail);
    var gsmVal = document.querySelector("[offer-covidtravel-phone]");
    var gsmValue = gsmVal.value;
    var gsm = gsmValue.split(" ").join("");
    var travelAllStartDateVal = document.querySelector("[offer-covidtravel-startDate]");
    var travelAllStartDate = travelAllStartDateVal.value.split('/').join('.');
    var travelAllEndDateVal = document.querySelector("[offer-covidtravel-endDate]");
    var travelAllEndDate = travelAllEndDateVal.value.split('/').join('.');
    var productNo = document.querySelector("[offer-covidtravel-product]");
    var productNoVal = productNo.value;
    var privacyItem = document.querySelector("[offer-privacy='travel']");
    var privacy = privacyItem.checked; // new date format

    var startDate = dateFormat(travelAllStartDate);
    var maxStartDate = dateFormat(new Date().getDate() + '/' + new Date().getMonth() + 1 + '/' + new Date().getFullYear(), 1);
    var endDate = dateFormat(travelAllEndDate);
    var createDate = dateFormat(travelAllStartDate, 1);
    var today = new Date().setHours(0, 0, 0, 0);
    var isStartDateValid = travelAllStartDate.length == 10;
    var isEndDateValid = travelAllEndDate.length == 10;

    if (gsmValue.length >= 10 && validateID(tckn) && control && privacy && isStartDateValid && isEndDateValid) {
      postKVKK(1, 1, 1, 1);
      errorMessageReset(); // window.open(`https://sigorta.somposigorta.com.tr/satis/covid19-seyahat?identityNo=${tckn}&startDate=${travelAllStartDate}&endDate=${travelAllEndDate}&phoneNumber=${gsm}&mail=${mail}&productId=18`, '_blank');

      window.open("https://sigorta.somposigorta.com.tr/SatisV2?identityNo=".concat(tckn, "&startDate=").concat(travelAllStartDate, "&endDate=").concat(travelAllEndDate, "&phoneNumber=0").concat(gsm, "&email=").concat(mail, "&productId=18&productNo=455&referrer=covid19-sticky"), '_blank');
    } else {
      if (!privacy) offerDisclaimerMessage.innerText = message.privacy;
      if (startDate > maxStartDate) offerDisclaimerMessage.innerText = message.travelStartMaxDay;
      if (startDate < today) offerDisclaimerMessage.innerText = message.travelDay;
      if (endDate > createDate) offerDisclaimerMessage.innerText = message.travelLastYear;
      if (endDate < startDate) offerDisclaimerMessage.innerText = message.travelAllEndDate;
      if (travelAllStartDate.length < 10 || travelAllEndDate.length < 10) offerDisclaimerMessage.innerText = message.travelAllStartDate;
      if (!control) offerDisclaimerMessage.innerText = message.email;
      if (gsmValue.length < 10) offerDisclaimerMessage.innerText = message.gsm;

      if (!validateID(tckn)) {
        offerDisclaimerMessage.innerText = message.tckn;
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          "event": "gaEvent",
          "Sticky": "N",
          "Category": "COVID-19 - Footer",
          "Action": "Input Error",
          "Label": "TC No",
          "Value": "",
          "nonInteraction": false
        });
      }

      errorMessage();
    }
  });
  if (offerSelectCity != 'null' && offerSelectCity.length > 0) getCity(); // Response

  formItemFocus(); // Radio Change Init

  radioChange();
}

function openDaskForm() {
  var daskItems = document.querySelectorAll('[data-button-dask]');
  var daskBack = document.querySelectorAll('[data-back-dask]');
  daskItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var attrVal = item.getAttribute('data-button-dask');
      document.querySelector("[data-form-dask=\"".concat(attrVal, "\"]")).classList.remove('-hidden');
      item.parentElement.classList.add('-hidden');
    });
  });
  daskBack.forEach(function (item) {
    item.addEventListener("click", function () {
      var attrVal = item.getAttribute('data-back-dask');
      document.querySelector("[data-form-dask=\"".concat(attrVal, "\"]")).classList.add('-hidden');
      item.parentElement.parentElement.querySelector('[data-buttons]').classList.remove('-hidden');
    });
  });
}

openDaskForm();
/*
 * Mobile JS
 */

var next = document.querySelectorAll("[data-step]");
var offerList = document.querySelector('[offer-title-list]');
var button = document.querySelector('[data-mobile-button]');
var arrow = document.querySelector('[data-mobile-arrow]');
var tabContent = document.querySelectorAll('[data-tabs-content]');
var backTitle = document.querySelectorAll('[data-mobile-back]');
var overlay = document.querySelector('[data-offer-overlay]');

var _loop3 = function _loop3(_i6) {
  var el = next[_i6];
  el.addEventListener('click', function () {
    closeSeperatePrivacy();
    var step = el.getAttribute('data-step');

    if (step == 1) {
      arrow.classList.toggle('-down');
      arrow.classList.remove('-hide');
      button.classList.toggle('-hide');
      offerList.classList.toggle('-mobile-active'); // overlay closed

      overlay.classList.remove('-open');
    }

    if (step == 2) {
      offerDisclaimerMessage.innerHTML = "";
      arrow.classList.remove('-hide');
      offerList.classList.add('-mobile-active');
      offerList.classList.remove('-mobile-hide'); // overlay closed

      overlay.classList.remove('-open'); // all content closed

      tabContent.forEach(function (item) {
        return item.classList.remove('-mobile-active');
      }); // all back button closed

      backTitle.forEach(function (item) {
        return item.classList.remove('-active');
      });
    }

    if (step == 3) {
      var tabId = el.getAttribute('data-tabs-list'); // overlay open

      overlay.classList.add('-open'); // button closed

      button.classList.add('-hide'); // arrow buton closed

      arrow.classList.add('-hide'); // all back button closed

      backTitle.forEach(function (item) {
        return item.classList.remove('-active');
      }); // back button active

      document.querySelector("[data-mobile-back=\"".concat(tabId, "\"]")).classList.add('-active'); // offer list closed

      offerList.classList.add('-mobile-hide'); // tabContent.forEach(item => item.classList.remove('-mobile-active'));
      // document.querySelector(`[data-tabs-content="${tabId}"]`).classList.add('-mobile-active')
    }
  });
};

for (var _i6 = 0; _i6 < next.length; _i6++) {
  _loop3(_i6);
}
"use strict";

var dataSmoothScroll = document.querySelector('[data-smooth-scrolls="true"]');
var dataScroll = document.querySelectorAll('[data-scrolls]');
var dataAnchorContent = document.querySelector('[data-anchor-content]'); //position: fixed; 
//Scroll ID

function scrollID() {
  dataScroll.forEach(function (item, i) {
    item.setAttribute("id", "section-" + i);
    item.setAttribute("data-section-id", "section-" + i);
    var itemHead = item.getElementsByTagName('h2')[0];

    if (itemHead) {
      var textItem = item.getElementsByTagName('h2')[0].innerText;
      dataAnchorContent.insertAdjacentHTML('beforeend', '<span data-hash="section-' + i + '" data-anchor="' + i + '" class="other-products__link">' + textItem + '</span>');
    } else {}

    return;
  });
  return;
} //Scroll


function anchorScroll() {
  var dataAnchor = document.querySelectorAll('[data-anchor]');
  dataAnchor.forEach(function (item) {
    item.addEventListener("click", function () {
      var itemID = item.dataset.anchor;
      var scrollY = dataScroll[itemID].offsetTop - 78;
      window.scroll({
        top: scrollY,
        left: 0,
        behavior: 'smooth'
      });
    });
  });
  return;
}

if (!!dataSmoothScroll === true) {
  scrollID();
  anchorScroll();
  var mainSections = document.querySelector('[data-anchor-content]');
  var mainNavLinks = document.querySelectorAll("[data-anchor-content] span");
  var lastId;
  var cur = [];
  window.addEventListener("scroll", function (event) {
    var fromTop = window.scrollY;
    var iescroll = document.documentElement.scrollTop; //Sticky 

    if (iescroll >= 642) {
      dataSmoothScroll.style.position = "fixed";
    } else {
      dataSmoothScroll.removeAttribute("style");
    }

    mainNavLinks.forEach(function (item) {
      var itemID = item.dataset.hash;
      var section = document.querySelector("[data-section-id=" + itemID + "]");

      if (section.offsetTop - 80 <= iescroll && section.offsetTop - 80 + section.offsetHeight > iescroll) {
        item.classList.add("-active");
      } else {
        item.classList.remove("-active");
      }
    });
  });
}
"use strict";

var tabs = document.querySelector('[data-tabs="true"]');
var mobileTab = document.querySelector('[data-mobile-tab]');
var tabList = document.querySelectorAll('[data-tabs-list]');
var tabContent = document.querySelectorAll('[data-tabs-content]');
var active = "-active";
var mobileActive = "-mobile-active";
var disclaimerMessage = document.querySelector("[offer-disclaimer-message]"); //Desktop Tab

function desktopTab() {
  // for (var i = 0, len = tabList.length; i < len; i++) {
  // 	console.log(tabList[i]);
  // }
  tabList.forEach(function (item) {
    item.addEventListener("click", function () {
      var tabID = item.dataset.tabsList;

      for (var i = 0; i < tabList.length; i++) {
        tabList[i].classList.remove(active);
      }

      item.classList.add(active);
      if (disclaimerMessage) disclaimerMessage.innerHTML = '';
      tabContent.forEach(function (item) {
        var contentID = item.dataset.tabsContent;

        if (contentID === tabID) {
          item.classList.add(active);
          item.classList.add(mobileActive);
        } else {
          item.classList.remove(active);
          item.classList.remove(mobileActive);
        }
      });
    });
  });
  return true;
} //Mobile Tab


if (!!mobileTab === true) {
  var mobileSelect = function mobileSelect(e) {
    var selectVal = e.value || e.options[e.selectedIndex].value;
    tabContent.forEach(function (item) {
      var contentID = item.dataset.tabsContent;

      if (contentID === selectVal) {
        item.classList.add(active);
      } else {
        item.classList.remove(active);
      }
    });
    return true;
  };
}

if (!!tabs === true) {
  desktopTab();
}
"use strict";

function years() {
  var date = new Date();
  var year = date.getFullYear();
  var append = document.querySelector("[data-date]");
  append.insertAdjacentHTML('beforeend', "".concat(year));
  return;
}

years();