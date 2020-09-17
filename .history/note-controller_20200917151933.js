'use strict'

document.getElementById("app").innerHTML = "howdy";

class NoteController {

  constructor(notelist) {
    // var noteList = new NoteList
    var newNote = new Note('Favourite drink: seltzer')
    notelist.createNote(newNote)
    this.noteView = new NoteListView(notelist)
    
  };

  getHTML() {
    

  };



};




$(document).ready(function() {





});  
