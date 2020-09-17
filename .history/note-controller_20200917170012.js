'use strict'

// document.getElementById("app").innerHTML = "howdy";

class NoteController {

  constructor(noteList) {
    this.note = new Note('Favourite drink: seltzer').getNote();
    this.notelist = noteList
    this.listView = new NoteListView(this.notelist.getNotes());
    console.log(this.listView)
  };


};

// var noteList = new NoteList()
// var controller = new NoteController(noteList)
// console.log(noteList)
// console.log(controller)
// console.log(this.noteView);

// controller.sendHtml()

