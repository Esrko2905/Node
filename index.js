const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    next();
})
const { authentication } = require('./auth/auth');

//app.use(authentication);

app.get("/", (req, res) => { return res.status(200).json({ message: 'Hello Bemeli' }) });

const { getData } = require('./handlers/getData');

app.get("/fetchData/:collection", getData);

const { postData } = require('./handlers/postData');
app.post('/postData', postData);

const { updateData } = require('./handlers/updateData');
app.patch('/updateData/:id', updateData);

const { deleteData } = require('./handlers/deleteData');
app.delete('/deleteData/:id', deleteData);

const port = 5050;
app.listen(port, () => { });