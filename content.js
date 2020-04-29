let premiumElements = document.getElementsByClassName('premium-value premium-value--1');
let blockedElements = document.getElementsByClassName('pv');

while (premiumElements.length > 0) {
  // premiumElements[0].setAttribute('style', 'color: dodgerblue');
  premiumElements[0].classList.remove('premium-value', 'premium-value--1');
}

while (blockedElements.length > 0) {
  blockedElements[0].outerHTML = blockedElements[0].innerHTML;
}