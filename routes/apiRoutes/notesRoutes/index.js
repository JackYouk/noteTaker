const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const db = path.join(__dirname, '../../../db', 'db.json');

// get notes
router.get('/', (req, res) => {
    // let notes = [];
    // fs.readFile(db, 'utf8', (err, data) => {
    //     if(err){
    //         console.error(err);
    //         res.json(err);
    //     }
    //     notes = JSON.parse(data);
    //     res.json(notes);
    // });

    fs.readFile(db, 'utf-8', (err, data) => {
        if (err) {
            return res.status(400).json({ err })
        }
        res.json(JSON.parse(data));
    });
});

// post/save note
router.post('/', (req, res) => {
    const {title, text} = req.body;

    // // gets the current notes array from the db
    // let notes = [];
    // fs.readFile(db, 'utf8', (err, data) => {
    //     if(err){
    //         console.error(err);
    //         res.json(err);
    //     }
    //     notes = JSON.parse(data);
    // });

    // const newNote = {
    //     id: notes.length,
    //     title,
    //     text,
    // }

    // // adds new note to the db data
    // notes.push(newNote);

    // // rewrites the database with the updated data
    // fs.writeFile(db, JSON.stringify(notes), (err) => {
    //     console.error(err);
    //     res.json(err);
    // });

    // res.json(newNote);

    fs.readFile(db, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ err });
        }
        
        if (title && text) {
            let dbNotes = JSON.parse(data);
            let id;

            if (dbNotes.length === undefined || dbNotes.length < 1) {
                id = 1;
            } else {
                id = dbNotes[dbNotes.length - 1].id + 1;
            }

            const newNote = {
                title,
                text,
                id,
            };

            dbNotes.push(newNote)
            fs.writeFile(db, JSON.stringify(dbNotes), err => {
                if (err) {
                    return res.status(400).json({ err });
                }
                res.json(dbNotes);
            });
        } else {
            res.status(400).json({ error: 'No Note provided'})
        }
    });
});


module.exports = router;