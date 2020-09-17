'use strict';

class NoteListView {

  constructor(notelist) {
    this.noteList = notelist
  }

  getHTML() {
    var htmlStart = "<ul><li>"
    let notes = this.noteList.getNotes()
    let noteArray = notes.map(note => `${note.getNote()}`);
    var htmlString = htmlStart + noteArray.join('</li><li>')
    return htmlString + "</li></ul>"
  }

}
