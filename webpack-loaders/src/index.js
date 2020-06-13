import note from "./assets/note.json"; // this is supported with no configs :)
import xmlNote from "./assets/note.xml"; // can do this after adding xml-loader

import "./assets/styles.css";

import MyImage from "./assets/image.jpg";

import csv from "./assets/cities.csv";

console.group("--- Loaded note.json file ---");
console.log(note);
console.groupEnd();

document.getElementById("json").innerHTML = JSON.stringify(note, null, 2);

console.group("--- Loaded note.xml file ---");
console.log(xmlNote);
console.groupEnd();

// let's add img to the page
document.getElementById("img").src = MyImage;

console.group("--- Loaded cities.csv file ---");
console.log(csv);
console.groupEnd();
