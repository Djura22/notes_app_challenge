'use strict';

describe('NoteController', function() {
  var controller;

  it('can store a', function() {
    var newNote = new Note('Favourite drink: seltzer')
    notelist.createNote(newNote)
    this.noteView = new NoteListView(notelist)
    console.log(noteView.getHtml)
  });



});