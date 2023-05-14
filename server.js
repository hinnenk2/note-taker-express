//Declare required app variables
const express = require('express');  //Import express package
const api_route = require('./routes/api-route')  //establish route for api/notes.html.  Allows user to access note-taking page.
const html_route = require('./routes/html-route') //Allows user to access the main html page.
const app = express();
const PORT = process.env.PORT || 3001;

// Static middleware for running express, required for sending note data to be stored on the server
app.use(express.urlencoded({ extended: false })); //recognizes requests (notes) as a string (or array).
app.use(express.json()); //recognizes the request as a JSON object, i.e. a note to be stored on a notepad
app.use(express.static("public")); //serves static elements from the public directory.
app.use(api_route);
app.use(html_route);

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
