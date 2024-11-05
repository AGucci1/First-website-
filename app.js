const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse form data and serve static files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve your HTML, CSS, and other static files from the "public" folder

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
