const router = require('express').Router();
const fs = require('fs');


// get notes
router.get('/', (req, res) => {
    let notes;
    fs.readFile('../../../db/db.json', 'utf8', (err, data) => {
        if(err){
            console.error(err);
            res.json(err);
        }
        notes = JSON.parse(data);
        res.json(notes);
    });
});

// post/save note
router.post('/', (req, res) => {
    // saves posted note object as newNote
    const newNote = req.body;

    // gets the current notes array from the db
    let notes;
    fs.readFile('../../../db/db.json', 'utf8', (err, data) => {
        if(err){
            console.error(err);
            res.json(err);
        }
        notes = JSON.parse(data);
    });

    // adds new note to the db data
    notes.push(newNote);

    // rewrites the database with the updated data
    fs.writeFile('../../../db/db.json', JSON.stringify(notes), (err) => {
        console.error(err);
        res.json(err);
    });

    res.json(newNote);
});

// delete note
router.delete('/:id', (req, res) => {
    let notes;
    const id = req.params.id;
    // gets the current data from db
    fs.readFile('../../../db/db.json', 'utf8', (err, data) => {
        if(err){
            console.error(err);
            res.json(err);
        }
        notes = JSON.parse(data);
    });
    // loops thru data to find matching id, deletes note object from the array
    for(let i = 0; i < notes.length; i++){
        if(notes[i].id === parseInt(id)){
            notes.splice(notes[i]);
        }
    }

    // rewrites the database file with the updated data
    fs.writeFile('../../../db/db.json', JSON.stringify(notes), (err) => {
        console.error(err);
        res.json(err);
    });

    res.json(notes);
});


module.exports = router;