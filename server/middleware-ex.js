const express = require('express');
const app = express();
const port = 8000;

log = (req, res, next) => {
    console.log(new Date(), req.method, req.url);
    next();
}

hello = (req, res) => {
    res.write('Hello \n' + 'World');
    res.end();
}

app.use(log);
app.get('/', log, hello);

app.listen(port, (err, res) => {
    console.log((err) ? ('Server error: ' + err) : ('Servidor rodando na porta: ' + port));
});