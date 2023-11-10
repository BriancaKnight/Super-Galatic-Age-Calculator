import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './js/space.js'

document.getElementById('calculate-age').addEventListener('click', handleForm)

function handleForm(event) {
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
