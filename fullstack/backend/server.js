import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {id:1, joke: "hello"},
        {id:2, joke: "world"},
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});