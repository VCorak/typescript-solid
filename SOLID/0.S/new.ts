import {MusicPlayer} from "./MusicPlayer";
import {Engine} from "./Engine";
import {Car} from "./Car";
import {Fuel} from "./Fuel";

const musicToggleElement = <HTMLElement>document.querySelector('#music-toggle');
const musicSliderElement = <HTMLInputElement>document.querySelector('#music-slider');
const engineToggleElement = <HTMLInputElement>document.querySelector('#engine-toggle');
const addFuelForm = document.querySelector('#add-fuel-form');
const addFuelInput = <HTMLFormElement>document.querySelector('#add-fuel-input');
const fuelLevelElement = <HTMLElement>document.querySelector('#fuel-level');
const milesElement = <HTMLElement>document.querySelector('#miles-value');
const audioElement = <HTMLAudioElement>document.querySelector('#car-music');


let musicPlayer = new MusicPlayer(0,50)
let car = new Car(100);
let engine = new Engine(10);
let fuel = new Fuel(0);


// MUSIC PLAYER
musicToggleElement.addEventListener('click', () => {
    if(musicPlayer.musicLevel === 0) {
        musicPlayer.turnMusicOn();
        musicSliderElement.value = musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    musicPlayer.turnMusicOff();
});

//I use input instead of change, because then the value changes when I move the mouse, not only on release
musicSliderElement.addEventListener('input', (event) => {
    let target = <HTMLFormElement>(event.target);

    musicPlayer.musicLevel = target.value;
    audioElement.volume = musicPlayer.musicLevel / 100;

    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = musicPlayer.musicLevel ? 'Turn music off' : 'Turn music on';
});


// ENGINE
engineToggleElement.addEventListener('click', () => {
    if(engine.engineStatus) {
        engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    engine.turnEngineOn();
});


// FUEL
addFuelForm.addEventListener('submit', (event) => {
    event.preventDefault();

    fuel.addFuel(Number(addFuelInput.value), 100);
    fuelLevelElement.innerText = fuel.toString();
});

setInterval(() => {
    car.drive(1, 10);

    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = <string><unknown>(car.miles);
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = fuel.toString();

    if(musicPlayer.musicLevel === 0) {
        audioElement.pause();
    } else {
        audioElement.play();
    }

}, 1000);