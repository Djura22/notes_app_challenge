(function() {

  test.that('it can store a note list in an instance of it', function() {
    var noteList = new NoteList()
    var view = new NoteListView(noteList)
    expect.toEqual(noteList.getNotes(), view.noteList)

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

  test.that('it only returns the first 20 characters of each note', function() {
    var noteList = new NoteList();
    noteList.createNote('Into my heart an air that kills');
    var noteListView = new NoteListView(noteList);
    expect.toEqual(noteListView.getHTML(), "<ul><li>Into my heart an air</li></ul>")

  })

})(this);
