'use strict'

class NoteListView {

  constructor(noteList) {
    this.noteList = noteList
  }

  getHTML() {
    var htmlStart = "<ul><li>"
    let notes = this.noteList.getNotes()
    let noteArray = notes.map(note => `${note}`);
    
    var htmlString = htmlStart + noteArray.join('</li><li>')
    return htmlString + "</li></ul>"
  }

}
