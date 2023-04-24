const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
        token:'this is a token hurayy'
    });
});

app.listen(8080, () => console.log('this api is on http://localhost:8080/login'));