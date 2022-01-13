const express = require('express');

const app = express();

app.get('/', (req, res) => {    
    res.send('hello express');
});

app.get('/api', (req, res) => {
    res.send('hello api');
});

app.get('/api/posts', (req, res) => {
    res.json([
        {id: 1, content: 'hello'},
        {id: 2, content: 'hello'},
        {id: 3, content: 'hello'},
    ])
})

app.post('/api/poststst', (req, res) => {
    res.json({ id: 1, content: 'hello' })
});


app.listen(3088, () => {
    console.log('서버실행중');
});