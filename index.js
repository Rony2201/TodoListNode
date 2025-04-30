import express from 'express';

const app = express();

app.use(json);


app.get('/', (req, res)=> {
    res.send('Hello World!');
})