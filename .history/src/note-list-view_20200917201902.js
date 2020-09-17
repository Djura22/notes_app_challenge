'use strict';

class NoteListView {

  constructor(notelist) {
    this.noteList = notelist.getNotes()
  }

  getHTML() {
    let notes = this.noteList
    let noteArray = notes.map(note => `<ul><li><div>${note.getNote()}</div></li></ul>`);
    return noteArray.join("")
  }

}
