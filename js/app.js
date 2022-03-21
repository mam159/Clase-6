import Button from "./button.js";
import Imagen from "./imagen.js";
import Sound from   "./sound.js";

let myDiv = document.querySelector("#myApp");

let myButton = new Button("Click me!");

myDiv.innerHTML = myButton.render();

let myImagen = new Imagen("/data/bombonera2.jpg");

myDiv.innerHTML += myImagen.render();

let mySound = new Sound("https://www.w3schools.com/html/horse.ogg");

myDiv.innerHTML += mySound.render();

