'use strict';

(function() {

  test.that('it can take a NoteList and store it', function() {
    var noteList = new NoteList()
    var controller = new NoteController(noteList)
    expect.toEqual(noteList, this.notelist)

  });



})(this);