'use strict'

// document.getElementById("app").innerHTML = "howdy";

class NoteController {

  constructor(notelist) {
    var newNote = new Note('Favourite drink: seltzer').getNote();
    this.notelist = notelist
    this.notelist.createNote(newNote.getNote())
    console.log(this.notelist.getNotes())
    this.noteView = new NoteListView(this.notelist.getNotes());
  };


};

// var noteList = new NoteList()
// var controller = new NoteController(noteList)
// console.log(noteList)
// console.log(controller)
// console.log(this.noteView);

// controller.sendHtml()

