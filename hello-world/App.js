function Note(from, to, heading, body) {
  this.from = from;
  this.to = to;
  this.heading = heading;
  this.body = body;
}

const testNote = new Note("Foo", "Bar", "Test Note", "Hello, how are you?");

console.log("This is App.js");
printNote(testNote);

document.getElementsByTagName("pre")[0].innerHTML = noteToString(testNote);
