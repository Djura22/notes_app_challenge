'use strict'

// document.getElementById("app").innerHTML = "howdy";

class NoteController {

  constructor(notelist) {
    var newNote = new Note('Favourite drink: seltzer')
    notelist.createNote(newNote)
    this.noteView = new NoteListView(notelist)
    
  };

  sendHtml() {
    document.getElementById("app").innerHTML = this.noteView.getHtml;
  };



};

var noteList = new NoteList()
var controller = new NoteController(noteList)

controller.sendHtml()

$(document).ready(function() {





});  
