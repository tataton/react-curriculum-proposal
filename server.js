const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/author', (req, res) => {
    res.send( {authorName: "/*-- your name here --*/"} );
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT);
console.log(`Server listening on port ${PORT}.`);