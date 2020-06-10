export function noteToString(note) {
  return JSON.stringify(note, null, 2);
}

export function printNote(note) {
  console.log(noteToString(note));
}
