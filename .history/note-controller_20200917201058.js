'use strict';

// document.getElementById("app").innerHTML = "howdy";

class NoteController {

  constructor(notelist) {
    this.newNote = new Note('Favourite drink: seltzer')
    this.notelist = notelist
    this.notelist.createNote(this.newNote.getNote())
    this.noteView = new NoteListView(this.notelist);

  };

  sendHtml() {
    document.getElementById("app") = this.noteView.getHTML();
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

