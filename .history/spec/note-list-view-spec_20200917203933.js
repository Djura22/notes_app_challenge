(function() {

  test.that('it can store a note list in an instance of it', function() {
    var noteList = new NoteList();
    var listView = new NoteListView(noteList.getNotes());
    expect.toEqual(noteList.getNotes(), listView.notelist)

  });


  test.that('can get a string of HTML back with 0 objects', function() {
    var noteList = new NoteList();
    var listView = new NoteListView(noteList);
    expect.toEqual(listView.getHTML(),"<ul><li></li></ul>");
  });

  test.that('it can get a string of HTML back with 1 object', function() {
    var noteList = new NoteList();
    noteList.createNote('Hello');
    var noteListView = new NoteListView(noteList);
    expect.toEqual(noteListView.getHTML(),"<ul><li>Hello</li></ul>");
  });

  test.that('it can get a string of HTML back with 2 objects', function() {
    var noteList = new NoteList();
    noteList.createNote('Hello');
    noteList.createNote('Goodbye');
    var noteListView = new NoteListView(noteList);
    expect.toEqual(noteListView.getHTML(),"<ul><li>Hello</li><li>Goodbye</li></ul>");
  });

})(this);
