// import HomePage from '../pages/HomePage';

const express = require('express');
// import next from 'next';

const server = express();
const port = 3000;

server.get('/', (req, res) => res.send('Hello world'));

server.listen(port, () => console.log(`App now running on http://localhost:${port}`));