const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.json({
        message: 'OK'
    });
});

app.listen(3000, () => {
    console.log('App is listening on port: %s.', 3000);
});