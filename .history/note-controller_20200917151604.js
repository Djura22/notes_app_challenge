'use strict'

document.getElementById("app").innerHTML = "howdy";

class NoteController {

  constructor(notelist) {
    this.noteList = notelist
    this.noteView = new NoteListView(notelist)
    this.newNote = new Note('Favourite drink: seltzer')

  };

  addNote() {
    

  };



};




$(document).ready(function() {





});  
