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
    const newNote = req.body;
    fs.writeFile('../../../db/db.json', JSON.stringify(newNote), (err) => {
        console.error(err);
        res.json(err);
    });
    res.json(newNote);
});

// delete note
router.delete('/:id', (req, res) => {
    let notes;
    const id = req.params.id;
    fs.readFile('../../../db/db.json', 'utf8', (err, data) => {
        if(err){
            console.error(err);
            res.json(err);
        }
        notes = JSON.parse(data);
    });
    for(let i = 0; i < notes.length; i++){
        if(notes[i].id === parseInt(id)){
            notes.splice(notes[i]);
        }
    }

    fs.writeFile('../../../db/db.json', JSON.stringify(notes), (err) => {
        console.error(err);
        res.json(err);
    });
    res.json()
});


module.exports = router;