const name = 'Krysia';
const age = '26';

console.log ('Lew nie sprzymierza się z kojotem');
console.log (`Cześć, mam na imię ${name}, mam ${age} lat i od niedawna uczę się programować`);


const about = document.querySelector('.about__paragraph--js');

about.innerHTML = `Mam na imię ${name}, mam ${age} lat i od niedawna uczę się programować.`




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
