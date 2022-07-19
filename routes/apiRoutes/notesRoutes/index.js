const router = require('express').Router();
const Note = require('../../../model/Note');


// get notes
router.get('/api/notes', async (req, res) => {
    try {
        const notes = await Note.findAll();
        console.log(notes);
        res.json(notes);
    } catch (error) {
        res.status(500).json({error});
    }
})
// post/save note
router.post('/api/notes', async (req, res) => {
    const {title, text} = req.body;
    try {
        const newNote = await Note.create({
            title,
            text,
        });
        console.log(newNote);
        res.json(newNote);
    } catch (error) {
        res.status(500).json({error});
    }
})

// delete note
router.delete('/api/notes/:id', async (req, res) => {
    try {
        const deletedNote = await Note.findByPk(req.params.id);
        await Note.destroy(
            {
                where: {
                    id: req.params.id
                }
            }
        )
        console.log(deletedNote);
        res.json(deletedNote);
    } catch (error) {
        res.status(500).json({error});
    }
})


module.exports = router;