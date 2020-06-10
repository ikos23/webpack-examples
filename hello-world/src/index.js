import { Note } from "./App.js";
import { noteToString } from "./utils.js";
import json from "./assets/note.json";

console.log("This is index.js");

const testNote = new Note("Foo", "Bar", "Test Note", "Hello, how are you?");

document.getElementsByTagName("pre")[0].innerHTML = noteToString(testNote);
document.getElementsByTagName("pre")[1].innerHTML = noteToString(json);
