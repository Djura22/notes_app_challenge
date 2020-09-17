'use strict'

(function() {

  test.that('it can store a note in an instance of it', function() {
    var noteList = new Note("Into my heart, on air that kills")
    var view = new NoteListView(noteList)
    expect.toEqual(noteList.getNotes(), view.noteList)

  });






})(this);