'use strict';

(function() {

  test.that('it can take a NoteList and store it', function() {
    var noteList = new NoteList()
    var controller = new NoteController(noteList)
    expect.toEqual(noteList, controller.notelist)

  });

  test.that('it instantiates with a new note - Favourite drink: seltzer', function() {
    var noteList = new NoteList()
    var controller = new NoteController(noteList)
    expect.toEqual(controller.note, "Favourite drink: seltzer")

  });

  test.that('it instantiates with a new note list view, passing in the stored list', function() {
    var noteList = new NoteList()
    var controller = new NoteController(noteList)
    expect.toEqual(controller.noteView.notelist, noteList);

  });



})(this);