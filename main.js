const name = 'Krysia';
const age = '26';

console.log ('Lew nie sprzymierza się z kojotem');
console.log (`Cześć, mam na imię ${name}, mam ${age} lat i od niedawna uczę się programować`);

const myAge = 26

function ageCalculate (x) {
  x = x - myAge
  return x
}

let ageDifference = ageCalculate (22)

if (ageDifference > 0) {
  console.log(`Jesteś o tyle lat ode mnie starszy: ${ageDifference}`)
} else if (ageDifference < 0){
  console.log(`Jesteś o tyle lat ode mnie młodszy: ${Math.abs(ageDifference)}`)
} else {
  console.log(`Jesteś w moim wieku!`)
}



const menuDrop = document.querySelector('.navigation__list--js')
const navigationDrop = document.querySelector('.navigation__drop--js')


menuDrop.addEventListener('mouseenter', () => {
  navigationDrop.classList.add('navigation__drop--visible')
});

menuDrop.addEventListener('mouseleave', () => {
  navigationDrop.classList.remove('navigation__drop--visible')
});