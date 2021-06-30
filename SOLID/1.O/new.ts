import {Zoo} from "./Zoo";
import {Dog} from "./Dog";
import {Cat} from "./Cat";
import {Parrot} from "./Parrot";
import {Bee} from "./Bee";

let zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Bee);

zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound() + "<br>");
});