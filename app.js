const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000; // Use the port you changed to

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the "public" directory

// Route to serve the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Adjust the path to your index.html
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

