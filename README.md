# Express Note Taker

## Description

This application allows a user to write, save, and delete notes. It utilizes an express.js backend approach to save and load note data from a JSON file. 

### User Story

AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

### Acceptance Criteria

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

## Table of Contents

* [Description](#description)
* [Deployed Link](#deployed-link)
* [Screenshots](#screenshots)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)

## Deployed Link

Deployed on Heroku at: https://note-taker-express-hinnenk2.herokuapp.com/

## Screenshots

![intro-page](https://github.com/hinnenk2/note-taker-express/assets/124109780/7a62fefb-683e-40d4-ab0a-d05416ddf1e7)

![user-page](https://github.com/hinnenk2/note-taker-express/assets/124109780/c50c7a56-f751-424e-920f-f2431e257dee)

## Installation

To install dependencies, run the following:

`
npm i
`
`
npm i express
`

## Usage

After downloading the files and installing dependencies, run 

`
node server.js
`

Walkthrough Video: [Note Taker.webm](https://github.com/hinnenk2/note-taker-express/assets/124109780/3ed5284e-4ce2-4123-b2e7-67973b083484)

## License

This repository is licensed under the [MIT license](./LICENSE).
