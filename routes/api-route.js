const router = require('express').Router(); //generates a new router object for handling requests
const { v4: uuidv4 } = require('uuid');  //imports the package required for creating unique IDs
const fs = require ("fs"); //calls the fs module

router.get('/api/notes', async (req, res) => { //sets up the route that accesses the notes page to the requestor upon GET request.
  const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8")); //await is used in this async function to resolve a promise.
  res.json(dbJson);
});

router.post('/api/notes', (req, res) => { //sets the post request to the notes.html page, allows user to transfer note data to the html page.
  const dbJson = JSON.parse(fs.readFileSync("db/db.json","utf8")); //reads data in db input by user
  const newFeedback = { //sets up the saved note on the list as an object.
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  dbJson.push(newFeedback); //pushes user input to note list.
  fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
  res.json(dbJson);
});

router.delete('/api/notes/:id', (req, res) => {  //defines the delete request in the notes list
  let data = fs.readFileSync("db/db.json", "utf8"); //data is defined as the note to be deleted
  const dataJSON =  JSON.parse(data);
  const userNote = dataJSON.filter((note) => {   //function states that if the note to be deleted matches the same id as when it was generated, then proceed with deleting it
    return note.id !== req.params.id;
  });
  fs.writeFileSync("db/db.json",JSON.stringify(userNote));  //required for actually deleting the note
  res.json("Deleted."); //required for actually deleting the note
});

module.exports = router; 