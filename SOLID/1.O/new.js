"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Zoo_1 = require("./Zoo");
var Dog_1 = require("./Dog");
var Cat_1 = require("./Cat");
var Parrot_1 = require("./Parrot");
var Bee_1 = require("./Bee");
var zoo = new Zoo_1.Zoo;
zoo.addAnimal(new Cat_1.Cat);
zoo.addAnimal(new Dog_1.Dog);
zoo.addAnimal(new Parrot_1.Parrot);
zoo.addAnimal(new Bee_1.Bee);
zoo.animals.forEach(function (animal) {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound() + "<br>");
});
