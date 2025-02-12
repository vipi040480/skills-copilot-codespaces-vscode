// Create web server
// 1. Import express module
const express = require('express');
const app = express();
// 2. Create a web server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
// 3. Create a route
app.get('/', (req, res) => {
  res.send('Hello world');
});
// 4. Create a route
app.get('/about', (req, res) => {
  res.send('About us');
});
// 5. Create a route
app.get('/contact', (req, res) => {
  res.send('Contact us');
});

