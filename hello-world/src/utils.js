function noteToString(note) {
  return JSON.stringify(note, null, 2);
}

function printNote(note) {
  console.log(noteToString(note));
}
