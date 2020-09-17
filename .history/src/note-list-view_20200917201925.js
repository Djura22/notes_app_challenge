'use strict';

class NoteListView {

  constructor(notelist) {
    this.noteList = notelist.getNotes()
  }

  getHTML() {
    let notes = this.noteList
    let noteArray = notes.map(note => `<ul><li>${note.getNote()}</li></ul>`);
    return noteArray.join("")
  }

}
