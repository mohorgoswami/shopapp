const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('shopapp', { submittedData: '' });
});

app.post('/', (req, res) => {
    const submittedData = req.body.data; // Split by space and replace with '+'
    res.render('shopapp', { submittedData });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.set('view engine', 'ejs');
