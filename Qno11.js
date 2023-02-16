function countNotes(amount) {
    var notes = [2000, 500, 100, 50, 20, 10, 5, 1];
    var noteCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < notes.length; i++) {
      if (amount >= notes[i]) {
        noteCounter[i] = Math.floor(amount / notes[i]);
        amount = amount - noteCounter[i] * notes[i];
      }
    }
    console.log("Currency Notes:");
    for (var i = 0; i < noteCounter.length; i++) {
      if (noteCounter[i] != 0) {
        console.log(notes[i] + " : " + noteCounter[i]);
      }
    }
  }
  
  countNotes(540);
  