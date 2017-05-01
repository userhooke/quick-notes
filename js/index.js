// parsing notes from localStorage
var notes = JSON.parse(localStorage.getItem("notes"));
if (notes === null) {
  notes = [];
}
renderNotes();

// getting value from textarea
function saveNote() {
  var note = document.getElementById("noteArea").value;
  //var br = document.createElement('br');
  //note = note.replace(/\n\r?/g, br);
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
  appendNote(note);
}

// render notes from localStorage
function renderNotes() {
  for (var n = 0; n < notes.length; n++) {
    var savedNotes = document.getElementById("savedNotes");
    var node = document.createElement("li");
    var textnode = document.createTextNode(notes[n]);
    node.appendChild(textnode);
    savedNotes.appendChild(node);
  }
}

// append note to list
function appendNote(value) {
  var savedNotes = document.getElementById("savedNotes");
  var node = document.createElement("li");
  var textnode = document.createTextNode(value);
  node.appendChild(textnode);
  savedNotes.appendChild(node);
}

// deletin notes from localStorage
function removeNotes() {
  localStorage.setItem("backupNotes", localStorage.getItem("notes"));
  localStorage.removeItem("notes");
  location.reload();
}

function restoreNotes() {
  localStorage.setItem("notes", localStorage.getItem("backupNotes"));
  location.reload();
}