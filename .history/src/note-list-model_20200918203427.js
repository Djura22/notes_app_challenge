'use strict';

class NoteList {

  constructor() {
    this.notes = [];
    this.sign = 0;
  }

  createNote(text) {
    this.notes.push(new Note(text, this.sign));
  }

  getNotes() {
    return this.notes;
  }

}
