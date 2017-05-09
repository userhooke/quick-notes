// parsing notes from localStorage
var notes = JSON.parse(localStorage.getItem("notes"));
if (notes === null) {
  notes = [];
}
renderNotes();

// getting value from textarea
function saveNote() {
  var note = document.getElementById("noteArea").value;
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

//get current date
function date() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = dd + "-" + mm + "-" + yyyy;
  return today;
}

// save to file with FileSaver.js
function saveToFile() {
  var innerNotes = document.getElementById("savedNotes").innerHTML
  var blob = new Blob([innerNotes], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "QuickNotes-" + date() + ".html");
}
