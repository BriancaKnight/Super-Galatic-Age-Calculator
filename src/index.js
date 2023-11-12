import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './js/space.js'

document.getElementById('calculate-age').addEventListener('click', handleAgeForm)
document.getElementById('years-passed').addEventListener('click', handleForm)
document.getElementById('future-years').addEventListener('click', handleForm)

const handleAgeForm = (event) => {
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

const handlePassedForm = (event) => {
  event.preventDefault();
  document.querySelector('#passed').innerText = null;
  const currentAge = parseInt(document.querySelector('#current-age').value);
  const pastAge = parseInt(document.querySelector('#past-age').value);
  const newAge = new Age(currentAge)
  const otherAge = new Age(pastAge)
  const passedEarthTag = document.createElement("p");
  const passedMercuryTag = document.createElement("p");
  const passedVenusTag = document.createElement("p");
  const passedMarsTag = document.createElement("p");
  const passedJupiterTag = document.createElement("p");
  passedEarthTag.innerText = `Years passed on Earth: ${newAge.mercury()} years.`
  passedMercuryTag.innerText = `Years passed on Mercury: ${newAge.mercury()} years.`
  passedVenusTag.innerText = `Age on Venus: ${newAge.venus()} years`
  passedMarsTag.innerText = `Age on Mars: ${newAge.mars()} years`
  passedJupiterTag.innerText = `Age on Jupiter: ${newAge.jupiter()} years`
  document.querySelector("#planets").append(mercuryTag, venusTag, marsTag, jupiterTag);
} 

const handleFutureForm = (event) => {
  event.preventDefault();
  document.querySelector('#future').innerText = null;
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