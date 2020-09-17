'use strict';

(function() {

  test.that('it can store a note in an instance of it', function() {
    var note = new Note("Into my heart an air that kills");
    var sglNoteView = new SingleNoteView(note);
    expect.toEqual(note.text, sglNoteView.note);

  });



})(this);