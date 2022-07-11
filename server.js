// packages and requires --------------------------------
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();


// middleware -------------------------------------------
// public folder
app.use(express.static('public'));
// body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Port -------------------------------------------------
const PORT = 3001;

// Routes -----------------------------------------------
// HTML pages ==================
// landing page route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
// notes page route
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
})

// API ================
// get notes
app.get('/api/notes', (req, res) => {

})
// post/save note
app.post('/api/notes', (req, res) => {

})

app.delete('/api/notes/:id', (req, res) => {
    
})





// Run server -------------------------------------------
app.listen(PORT, () => console.log(`Server successfully listening for request on PORT ${PORT}`));