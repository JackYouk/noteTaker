const router = require('express').Router();
const fs = require('fs');

let notes;

// get notes
router.get('/', (req, res) => {
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

});


module.exports = router;