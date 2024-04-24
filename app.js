const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home', { title: 'Home', content: 'This is the home page of my portfolio.' });
});

app.get('/certifications', (req, res) => {
  res.render('certifications', { title: 'Certifications', content: 'List of certifications will be displayed here.' });
});

app.get('/education', (req, res) => {
  res.render('education', { title: 'Education', content: 'Details about education will be displayed here.' });
});

app.get('/internships', (req, res) => {
  res.render('internships', { title: 'Internships', content: 'Details about internships will be displayed here.' });
});

app.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects', content: 'List of projects will be displayed here.' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact', content: 'Contact information will be displayed here.' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
