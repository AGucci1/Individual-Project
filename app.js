const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000; // Use the port you changed to

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route to serve the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Path to your index.html inside the "public" folder
});

// Route to serve the contact page
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html'); // Path to your contact.html
});

// Route to serve the about page
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html'); // Path to your about.html
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.send(`Thank you, ${name}. Your message has been received.`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
