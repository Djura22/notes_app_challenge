'use strict'

// document.getElementById("app").innerHTML = "howdy";

class NoteController {

  constructor(notelist) {
    this.newNote = new Note('Favourite drink: seltzer').getNote();
    console.log(this.newNote);
    this.notelist = notelist
    this.notelist.createNote(this.newNote)
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

