'use strict'

// document.getElementById("app").innerHTML = "howdy";

class NoteController {

  constructor(noteList) {
    var note = new Note('Favourite drink: seltzer');
    this.notelist = noteList.createNote(note.getNote())
    this.listView = new NoteListView(this.notelist.getNotes());
  };


};

// var noteList = new NoteList()
// var controller = new NoteController(noteList)
// console.log(noteList)
// console.log(controller)
// console.log(this.noteView);

// controller.sendHtml()

