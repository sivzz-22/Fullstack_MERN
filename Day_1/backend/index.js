require('dotenv').config()

const express = require("express");
const app = express();
const port = process.env.port;

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/users/:id/profile', (req, res) => {
    const userId = req.params.id;
    const name = req.query.name;
    const age = req.query.age;
    res.send(`User : ${userId} - Name : ${name} - Age : ${age}`);
});

app.listen(port, () => {
    console.log("Server is running on port:" + port);
});

