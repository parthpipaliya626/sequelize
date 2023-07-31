const express = require('express');
const app = express();


app.set('view engine', 'ejs');



app.get('/', function(req, res) {
   res.render('index.ejs');
});

app.get('/about', function(req, res) {
    res.render('pages');
  });

app.listen(8000, () => {
    console.log("Server is on PORT: 8000");
});