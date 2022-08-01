// packages and requires --------------------------------
const express = require('express');
const routes = require('./routes');
const app = express();


// middleware -------------------------------------------
// public folder
app.use(express.static('public'));
// body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// routes module for API
app.use(routes);

// Port -------------------------------------------------
const PORT = process.env.PORT || 3001;


// Run server -------------------------------------------
app.listen(PORT, () => console.log(`Server successfully listening for request on PORT ${PORT}`));

