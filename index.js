const http = require('http');
const PORT = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
    console.log('got a request');
    res.send('Hello Express');
});

app.get('/albums/', (req, res) => {
    res.send('a list of albums')
})

app.get('/albums/:albumID/songs/:songID(\\d+)', (req, res) => {
    res.send(`You want an album called: ${req.params.albumID}, with ${req.params.songID}`)
})

// app.get('/albums/:albumID/songs', (req, res) => {
//     res.send('the songs for 42 are this')
// })

// app.get('/albums/42/songs/3', (req, res) => {
//     res.send('song 3 on album 42')
// })


app.get('*', (req, res) => {
    res.redirect('/');
    console.log('sending you home')
});

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
