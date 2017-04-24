'use strict';
const express = require('express');
const app = express();
const Api = require('./api');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const baseApiMethods = new Api;
const coursesCollection = require('./coursesDB');
const authorsCollection = require('./authorsDB');

app.use(bodyParser.json());
app.use(cors());

app.post('/api/login', baseApiMethods.checkLogin);

app.get('/api/courses', coursesCollection.getCollection);
app.get('/api/courses/:id', coursesCollection.getById);
app.post('/api/courses', coursesCollection.create);
app.put('/api/courses/:id', coursesCollection.update);
app.delete('/api/courses/:id', coursesCollection.remove);

app.get('/api/authors', authorsCollection.getCollection);
app.post('/api/authors', authorsCollection.create);


app.listen(3123, () => {
    console.log('Express app listening on port 3123');
});


