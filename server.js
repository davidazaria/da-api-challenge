const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const showsRouter = require('./routes/shows');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.use('/shows', showsRouter);

app.get('/', (req, res) => {
  res.render('index', {
    message:       'Welcome to the api-challenge!',
    documentTitle: 'This is going to be a great time!',
    subTitle:      'We are now going to walk through some of our TV shows!',
    showMore:      false,
    showTitles:  ['Aerial America', 'Great Snakes', 'Honey Badger Grit', 'iCrocodile', 'Raven Tales', 'When Pigs Fly'],
  });
});

app.listen(PORT, () => {
  console.log('Welcome to the api-challenge, currently serving up on localhost 3000');
});
