const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use((req,res,next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);

  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log');
    }
  });

  next();
});

// app.use((req,res,next) => {
//   res.render('Maintenance.hbs', {
//     head: 'Maintenance Page',
//     pageTitle: 'Maintenance Page'
//   });
// });

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase()
});

hbs.registerHelper('jsonP', (objet) => {
  return JSON.stringify(objet, undefined, 2);
});
//app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
  res.render('Hello.hbs', {
    head: 'Hello Page 123',
    pageTitle: 'Hello Page',
    name: 'Seb',
    likes: {likes:['Computer science','Cinema','Restaurant','Science Fiction']}
  });
});

app.get('/about',(req,res) => {
  res.render('about.hbs', {
    head: 'About page',
    pageTitle: 'About Page'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
