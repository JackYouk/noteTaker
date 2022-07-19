const router = require('express').Router();
const fs = require('fs');


// get notes
router.get('/api/notes', (req, res) => {
    console.log(data);
    res.json(data);
})
// post/save note
router.post('/api/notes', (req, res) => {
    console.log(data);
    res.json(data);
})

// delete note
router.delete('/api/notes/:id', (req, res) => {
    const {noteId} = req.params; 
    console.log(data);
    res.json(data);
})


module.exports = router;