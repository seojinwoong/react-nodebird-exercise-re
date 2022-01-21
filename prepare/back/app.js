const express = require('express');
const postRouter = require('./routes/post');

const app = express();

app.get('/', (req, res) => {    
    res.send('hello express');
});

app.get('/api', (req, res) => {
    res.send('hello api');
});

app.use('/post', postRouter);

app.listen(3088, () => {
    console.log('서버실행중');
});