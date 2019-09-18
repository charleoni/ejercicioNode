var express = require('express');
var app = express();
const ruta = 'about';
const PORT = 3000;
app.route('/book')
    .get(function(req, res) {
        res.jsonp({ user: 'tobi' })
    })
    .post(function(req, res) {
        res.send('Add a book')
    })
    .put(function(req, res) {
        res.send('Update the book')
    })
app.listen(3000, function() {
    console.log(`Server running at port ${PORT}`);
});