document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const newHuman = document.querySelector('#new-item-form');
  // console.log(newHuman);
  newHuman.addEventListener('submit', handleNewHumanSubmit);

  const eraseSolarSystem = document.querySelector('#erase-solar-system');
  eraseSolarSystem.addEventListener('click', handleEraseSolarSystemClick);
});

const createNewHuman = function(form) {

  const inhabitant = document.createElement('p');

  const name = event.target.name.value;
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
  const age = event.target.age.value;

  const human = document.createElement('p');
  human.textContent = `${nameCapitalized}, ${age}`;
  inhabitant.appendChild(human);


  return inhabitant;
}

const handleNewHumanSubmit = function(event) {
  event.preventDefault();
  // console.log('form submitted');
  // console.log(event.target.name.value);

  const earthpopulation = document.querySelector('#earth-population');
  const earth = document.querySelector('#earth');
  const mars = document.querySelector('#mars');
  const venus = document.querySelector('#venus');
  const pluto = document.querySelector('#pluto');
  const uranus = document.querySelector('#uranus');
  const jupiter = document.querySelector('#jupiter');
  const saturn = document.querySelector('#saturn');
  const neptune = document.querySelector('#neptune');
  const inhabitant = createNewHuman(event.target);


  if (event.target.planet.value === 'Earth') {
    earth.appendChild(inhabitant);
    addEarthPopulation(event.target);
  } else if (event.target.planet.value === 'Mars'){
    mars.appendChild(inhabitant);
    addMarsPopulation(event.target);
  } else if (event.target.planet.value === 'Venus') {
    venus.appendChild(inhabitant);
    addVenusPopulation(event.target);
  } else if (event.target.planet.value === 'Pluto') {
    pluto.appendChild(inhabitant);
    addPlutoPopulation(event.target);
  } else if (event.target.planet.value === 'Uranus') {
    uranus.appendChild(inhabitant);
    addUranusPopulation(event.target);
  } else if (event.target.planet.value === 'Jupiter'){
    jupiter.appendChild(inhabitant);
    addJupiterPopulation(event.target);
  } else if (event.target.planet.value === 'Saturn') {
    saturn.appendChild(inhabitant);
    addSaturnPopulation(event.target);
  } else if (event.target.planet.value === 'Neptune') {
    neptune.appendChild(inhabitant);
    addNeptunePopulation(event.target);
  };

  event.target.reset();
}

const handleEraseSolarSystemClick = function(event) {
  const earth = document.querySelector('#earth');
  earth.innerHTML = '';
  const mars = document.querySelector('#mars');
  mars.innerHTML = '';
  const venus = document.querySelector('#venus');
  venus.innerHTML = '';
  const pluto = document.querySelector('#pluto');
  pluto.innerHTML = '';
  const uranus = document.querySelector('#uranus');
  uranus.innerHTML = '';
  const jupiter = document.querySelector('#jupiter');
  jupiter.innerHTML = '';
  const saturn = document.querySelector('#saturn');
  saturn.innerHTML = '';
  const neptune = document.querySelector('#neptune');
  neptune.innerHTML = '';
  earthPop = 0;
  const earthPopulation = document.querySelector('#earth-population');
  earthPopulation.innerHTML = `Earth - Population ${earthPop}`
  marsPop = 0;
  const marsPopulation = document.querySelector('#mars-population');
  marsPopulation.innerHTML = `Mars - Population ${marsPop}`;
  venusPop = 0;
  const venusPopulation = document.querySelector('#venus-population');
  venusPopulation.innerHTML = `Venus - Population ${venusPop}`
  plutoPop = 0;
  const plutoPopulation = document.querySelector('#pluto-population');
  plutoPopulation.innerHTML = `Pluto - Population ${plutoPop}`;
  uranusPop = 0;
  const uranusPopulation = document.querySelector('#uranus-population');
  uranusPopulation.innerHTML = `Uranus - Population ${uranusPop}`
  jupiterPop = 0;
  const jupiterPopulation = document.querySelector('#jupiter-population');
  jupiterPopulation.innerHTML = `Jupiter - Population ${jupiterPop}`;
  saturnPop = 0;
  const saturnPopulation = document.querySelector('#saturn-population');
  saturnPopulation.innerHTML = `Saturn - Population ${saturnPop}`
  neptunePop = 0;
  const neptunePopulation = document.querySelector('#neptune-population');
  neptunePopulation.innerHTML = `Neptune - Population ${neptunePop}`;
}

let earthPop = 0;
let marsPop = 0;
let venusPop = 0;
let plutoPop = 0;
let uranusPop = 0;
let jupiterPop = 0;
let saturnPop = 0;
let neptunePop = 0;

const addEarthPopulation = function() {
  earthPop += 1;
  const earthPopulation = document.querySelector('#earth-population');
  earthPopulation.innerHTML = `Earth - Population ${earthPop}`
}

const addMarsPopulation = function() {
  marsPop += 1;
  const marsPopulation = document.querySelector('#mars-population');
  marsPopulation.innerHTML = `Mars - Population ${marsPop}`;
}

const addVenusPopulation = function() {
  venusPop += 1;
  const venusPopulation = document.querySelector('#venus-population');
  venusPopulation.innerHTML = `Venus - Population ${venusPop}`;
}

const addPlutoPopulation = function() {
  plutoPop += 1;
  const plutoPopulation = document.querySelector('#pluto-population');
  plutoPopulation.innerHTML = `Pluto - Population ${plutoPop}`;
}

const addUranusPopulation = function() {
  uranusPop += 1;
  const uranusPopulation = document.querySelector('#uranus-population');
  uranusPopulation.innerHTML = `Uranus - Population ${uranusPop}`;
}

const addJupiterPopulation = function() {
  jupiterPop += 1;
  const jupiterPopulation = document.querySelector('#jupiter-population');
  jupiterPopulation.innerHTML = `Jupiter - Population ${jupiterPop}`;
}

const addSaturnPopulation = function() {
  saturnPop += 1;
  const saturnPopulation = document.querySelector('#saturn-population');
  saturnPopulation.innerHTML = `Saturn - Population ${saturnPop}`;
}

const addNeptunePopulation = function() {
  neptunePop += 1;
  const neptunePopulation = document.querySelector('#neptune-population');
  neptunePopulation.innerHTML = `Neptune - Population ${neptunePop}`;
}
