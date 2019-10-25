/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const dateOfEntry="", conceptCovered="", fullCoveredContent="", currentMood="";
const fullJournal =[];

function pushEntries (dateOfEntry, conceptCovered, fullCoveredContent, currentMood){
fullJournal.push ({
  date: dateOfEntry,
  concept: conceptCovered,
  content: fullCoveredContent,
  mood: currentMood
  });
}

// Uncomment the code below to test the journal pushEntries function

// pushEntries("10-11-2019","JS","Objects in JS 1", "Happy");
// pushEntries("10-12-2019","JS","Objects in JS 2", "Sad");
// pushEntries("10-13-2019","JS","Objects in JS 3", "Pumped");
// console.log (fullJournal);