const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "Let\'s get this app up and running" })
})

require('./routes/costumer.routes')(app);

app.listen(port, () => {
    console.log('Server is up and running on port ', port)
})