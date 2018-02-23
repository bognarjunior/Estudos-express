const express = require('express');
const app = express();

const port = 8000;

app.listen(port, (err, res) => {
    console.log( (err) ? ('Server error: ' + err) : ('Servidor rodando na porta: ' + port));
});