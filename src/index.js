import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './js/space.js';
import Calculation from './js/calculation.js';

document.getElementById('calculate-age').addEventListener('click', handleAgeForm)
document.getElementById('calculate-years-passed').addEventListener('click', handlePassedForm)
document.getElementById('calculate-future-years').addEventListener('click', handleFutureForm)

function handleAgeForm(event) {
  event.preventDefault();
  document.querySelector('#planets').innerText = null;
  const userAge = parseInt(document.querySelector('#user-age').value);
  const newAge = new Age(userAge)
  const mercuryTag = document.createElement("p");
  const venusTag = document.createElement("p");
  const marsTag = document.createElement("p");
  const jupiterTag = document.createElement("p");
  mercuryTag.innerText = `Age on Mercury: ${newAge.mercury()} years.`
  venusTag.innerText = `Age on Venus: ${newAge.venus()} years`
  marsTag.innerText = `Age on Mars: ${newAge.mars()} years`
  jupiterTag.innerText = `Age on Jupiter: ${newAge.jupiter()} years`
  document.querySelector("#planets").append(mercuryTag, venusTag, marsTag, jupiterTag);
}


function handlePassedForm(event) {
  event.preventDefault();
  document.querySelector('#passed').innerText = null;
  const currentAge = parseInt(document.querySelector('#current-age-a').value);
  const pastAge = parseInt(document.querySelector('#past-age').value)
  const futureAge = null
  const passedCalculation = new Calculation(currentAge, pastAge, futureAge)
  let passedCalculationResult = passedCalculation.passed() 
  let passedCalculationAge = new Age(passedCalculationResult)
  const passedEarthTag = document.createElement("p");
  const passedMercuryTag = document.createElement("p");
  const passedVenusTag = document.createElement("p");
  const passedMarsTag = document.createElement("p");
  const passedJupiterTag = document.createElement("p");
  passedEarthTag.innerText = `Years passed on Earth: ${passedCalculation.passed()} years.`;
  passedMercuryTag.innerText = `Years passed on Mercury: ${passedCalculationAge.mercury()} years.`
  passedVenusTag.innerText = `Years passed on Venus: ${passedCalculationAge.venus()} years`
  passedMarsTag.innerText = `Years passed on Mars: ${passedCalculationAge.mars()} years`
  passedJupiterTag.innerText = `Years passed on Jupiter: ${passedCalculationAge.jupiter()} years`
  document.querySelector("#passed").append(passedEarthTag, passedMercuryTag, passedVenusTag, passedMarsTag, passedJupiterTag);
} 

function handleFutureForm(event) {
  event.preventDefault();
  document.querySelector('#future').innerText = null;
  const currentAge = parseInt(document.querySelector('#current-age-b').value);
  const pastAge = null
  const futureAge = parseInt(document.querySelector('#future-age').value)
  const futureCalculation = new Calculation(currentAge, pastAge, futureAge)
  let futureCalculationResult = futureCalculation.future() 
  let futureCalculationAge = new Age(futureCalculationResult)
  const futureEarthTag = document.createElement("p");
  const futureMercuryTag = document.createElement("p");
  const futureVenusTag = document.createElement("p");
  const futureMarsTag = document.createElement("p");
  const futureJupiterTag = document.createElement("p");
  futureEarthTag.innerText = `Years to come on Earth: ${futureCalculation.future()} years.`;
  futureMercuryTag.innerText = `Years to come on Mercury: ${futureCalculationAge.mercury()} years.`
  futureVenusTag.innerText = `Years to come Venus: ${futureCalculationAge.venus()} years`
  futureMarsTag.innerText = `Years to come on Mars: ${futureCalculationAge.mars()} years`
  futureJupiterTag.innerText = `Years to come on Jupiter: ${futureCalculationAge.jupiter()} years`
  document.querySelector("#future").append(futureEarthTag, futureMercuryTag, futureVenusTag, futureMarsTag, futureJupiterTag);
} 