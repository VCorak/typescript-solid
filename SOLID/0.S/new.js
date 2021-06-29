"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MusicPlayer_1 = require("./MusicPlayer");
var Engine_1 = require("./Engine");
var Car_1 = require("./Car");
var Fuel_1 = require("./Fuel");
var musicToggleElement = document.querySelector('#music-toggle');
var musicSliderElement = document.querySelector('#music-slider');
var engineToggleElement = document.querySelector('#engine-toggle');
var addFuelForm = document.querySelector('#add-fuel-form');
var addFuelInput = document.querySelector('#add-fuel-input');
var fuelLevelElement = document.querySelector('#fuel-level');
var milesElement = document.querySelector('#miles-value');
var audioElement = document.querySelector('#car-music');
var musicPlayer = new MusicPlayer_1.MusicPlayer(0, 50);
var car = new Car_1.Car(100);
var engine = new Engine_1.Engine(10);
var fuel = new Fuel_1.Fuel(0);
// MUSIC PLAYER
musicToggleElement.addEventListener('click', function () {
    if (musicPlayer.musicLevel === 0) {
        musicPlayer.turnMusicOn();
        musicSliderElement.value = musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    musicPlayer.turnMusicOff();
});
//I use input instead of change, because then the value changes when I move the mouse, not only on release
musicSliderElement.addEventListener('input', function (event) {
    var target = (event.target);
    musicPlayer.musicLevel = target.value;
    audioElement.volume = musicPlayer.musicLevel / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = musicPlayer.musicLevel ? 'Turn music off' : 'Turn music on';
});
// ENGINE
engineToggleElement.addEventListener('click', function () {
    if (engine.engineStatus) {
        engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    engine.turnEngineOn();
});
// FUEL
addFuelForm.addEventListener('submit', function (event) {
    event.preventDefault();
    fuel.addFuel(Number(addFuelInput.value), 100);
    fuelLevelElement.innerText = fuel.toString();
});
setInterval(function () {
    car.drive(1, 10);
    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = (car.miles);
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = fuel.toString();
    if (musicPlayer.musicLevel === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);
