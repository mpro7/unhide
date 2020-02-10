let elements = document.getElementsByClassName('premium-value premium-value--1');
let i = elements.length;

while (elements.length > 0) {
  elements[0].classList.remove('premium-value', 'premium-value--1');
}
console.log(`Removeed ${i} elements`);
