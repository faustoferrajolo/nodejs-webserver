const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'fausto'
    });

});
app.get('/about', function(req, res) {
    res.render('about', {
        nombre: 'fausto'
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${ port }`);
});