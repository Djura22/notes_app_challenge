'use strict';

class Note {

  constructor(text, id) {
    this.text = text;
    this.id = id;
  }

  getNote() {
    return this.text;
  }
}
