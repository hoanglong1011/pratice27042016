const express = require('express');

const app = express();
app.listen(process.env.PORT || 3000, (err) => {
    console.log('Server is listening at port 3000');
});

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => res.render('home'));

app.get('/show:id', (req, res) => {

});

