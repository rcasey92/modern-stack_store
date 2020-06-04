const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const port = 3000;
const handler = routes.getRequestHandler(app);

(async () => {
    await app.prepare()
    const server = express();
    
    server.use(handler).listen(port, err => {
        if (err) throw err;

        console.log(`> development server ready on: http://localhost:${port}`);
    });
})();