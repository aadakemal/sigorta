"use strict";

var error = "error";
var valid = "valid";

function validateID(tcknValue) {
  if (tcknValue.length < 11) return false;
  return true;
  tcknValue = String(tcknValue);
  if (!tcknValue.match(/^[0-9]{11}$/)) return false;
  var pr1 = parseInt(tcknValue.substr(0, 1));
  var pr2 = parseInt(tcknValue.substr(1, 1));
  var pr3 = parseInt(tcknValue.substr(2, 1));
  var pr4 = parseInt(tcknValue.substr(3, 1));
  var pr5 = parseInt(tcknValue.substr(4, 1));
  var pr6 = parseInt(tcknValue.substr(5, 1));
  var pr7 = parseInt(tcknValue.substr(6, 1));
  var pr8 = parseInt(tcknValue.substr(7, 1));
  var pr9 = parseInt(tcknValue.substr(8, 1));
  var pr10 = parseInt(tcknValue.substr(9, 1));
  var pr11 = parseInt(tcknValue.substr(10, 1));
  if ((pr1 + pr3 + pr5 + pr7 + pr9 + pr2 + pr4 + pr6 + pr8 + pr10) % 10 != pr11) return false;
  if (((pr1 + pr3 + pr5 + pr7 + pr9) * 7 + (pr2 + pr4 + pr6 + pr8) * 9) % 10 != pr10) return false;
  if ((pr1 + pr3 + pr5 + pr7 + pr9) * 8 % 10 != pr11) return false;
  return true;
}

function idControl(tckn) {
  var tcknValue = tckn.value;

  if (!tcknValue || !validateID(tcknValue)) {
    //Error
    tckn.parentElement.classList.add(error);
    tckn.classList.add(error);
    tckn.setAttribute("required", "required");
    if (tcknValue.length === 0) return tckn.nextElementSibling.innerText = "Bu alanı boş bırakamazsınız.";
    tckn.nextElementSibling.innerText = "Lütfen geçerli bilgi girdiğinizden emin olun.";
  } else if (tcknValue && validateID(tcknValue)) {
    //Valid
    tckn.parentElement.classList.remove(error);
    tckn.classList.remove(error);
    tckn.classList.add(valid);
    tckn.removeAttribute("required", "required");
    return true;
  }
}