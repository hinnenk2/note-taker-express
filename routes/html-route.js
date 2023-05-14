const router = require('express').Router(); //generates a new router object for handling requests
const path = require('path');

router.get('/', (req, res) => {   //sets up the route that displays the html page to the requestor upon GET request.
    res.sendFile(path.join(__dirname, '../public/index.html'))  
});

router.get('/notes', (req, res) => {  //sets up the route that displays the notes page to the requestor upon GET request.
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;
