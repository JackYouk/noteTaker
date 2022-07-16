const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const path = require('path');


router.use('/api', apiRoutes);

// HTML pages ==================
// landing page route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
})
// notes page route
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'notes.html'));
})

module.exports = router;