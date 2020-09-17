'use strict'

document.getElementById("app").innerHTML = "howdy";
sendHtml();
class NoteController {

  constructor(notelist) {
    var newNote = new Note('Favourite drink: seltzer')
    notelist.createNote(newNote)
    this.noteView = new NoteListView(notelist)
    
  };

  sendHtml() {
    noteView.getHtml
    console.log(noteView.getHtml)
    document.getElementById("app").innerHTML = "<ul><li><div></div></li></ul>";
  };



};




$(document).ready(function() {





});  
