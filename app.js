const express = require('express');
const path = require ('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});


app.post('/submit-form', (req, res) => {
    res.redirect('/');
  });


let port = 3000 || process.env.PORT;


app.listen(port, () => 
    console.log("Servidor corriendo " + port))
    