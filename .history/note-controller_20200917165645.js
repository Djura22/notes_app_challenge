'use strict'

// document.getElementById("app").innerHTML = "howdy";

class NoteController {

  constructor(noteList) {
    var note = new Note('Favourite drink: seltzer');
    this.notelist = noteList)
    this.listView = new NoteListView(this.notelist);
  };


};

// var noteList = new NoteList()
// var controller = new NoteController(noteList)
// console.log(noteList)
// console.log(controller)
// console.log(this.noteView);

// controller.sendHtml()

