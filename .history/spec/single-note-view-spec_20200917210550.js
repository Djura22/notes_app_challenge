'use strict';

(function() {

  test.that('it can store a note in an instance of it', function() {
    var note = new Note("Into my heart an air that kills");
    var sglNoteView = new SingleNoteView(note.getNote());
    expect.toEqual(note.getNote(), sglNoteView.note);

  });

  test.that('it returns a string of HTML back with 1 note', function() {
    var note = new Note("Into my heart an air that kills");
    var sglNoteView = new SingleNoteView(note);
    expect.toEqual(noteListView.getHTML(),"<ul><li>Into my heart an air that kills</li></ul>");
  });



})(this);