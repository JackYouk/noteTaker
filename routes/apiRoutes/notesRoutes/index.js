const router = require('express').Router();
const fs = require('fs');

const db = '../../../db/db.json';

// get notes
router.get('/api/notes', (req, res) => {

})
// post/save note
router.post('/api/notes', (req, res) => {

})

// delete note
router.delete('/api/notes/:id', (req, res) => {
    const {noteId} = req.params;
    let data = fs.readFile(db, (err) => res.status(500).json(err));
    // for each obj in the database, if the id matches then remove the object
    let count = 0;
    data.forEach(obj => {
        if(obj.id === noteId){
            data = data.splice(count, count + 1);
        }else{
            count++;
        }
    });
    fs.writeFile(db, data, (err) => res.status(500).json(err));
    res.json(data);
})


module.exports = router;