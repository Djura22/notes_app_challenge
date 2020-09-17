'use strict'

class SingleNoteView {

  constructor(note) {
    this.note = note

  }

  getHTML() {
    var htmlStart = "<ul><li>"
    let note = this.note
    var htmlString = htmlStart + note.getNote();
    return htmlString + "</li></ul>"
  }


};