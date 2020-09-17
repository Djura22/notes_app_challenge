'use strict';

// document.getElementById("app").innerHTML = "howdy";

class NoteController {

  constructor(notelist) {
    this.newNote = new Note('Favourite drink: seltzer').getNote();
    this.notelist = notelist
    this.notelist.createNote(this.newNote)
    this.noteView = new NoteListView(this.notelist.getNotes());

  };

  sendHtml() {
    document.getElementById("app").innerHTML = this.noteView.getHTML();
  };

};

var noteL = new NoteList();
var controller = new NoteController(noteL);
controller.sendHtml();

// var noteList = new NoteList()
// var controller = new NoteController(noteList)
// console.log(noteList)
// console.log(controller)
// console.log(this.noteView);

// controller.sendHtml()

