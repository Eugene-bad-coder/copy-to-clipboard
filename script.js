"use strict";
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('[data-copy]').forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      let currentButton = this;
      let value = this.getAttribute('data-copy');
      if (!value) {
        value = this.parentNode.querySelector('input').value;
      }
      navigator.clipboard.writeText(value);
      currentButton.classList.add('_show-tooltip');
      setTimeout(function () {
        currentButton.classList.remove('_show-tooltip');
      }, 1500);
    });
  });
});