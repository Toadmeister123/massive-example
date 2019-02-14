require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl = require('./controller')

const app = express();

app.use(bodyParser.json())

const {CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance);
})

app.get('/api/all', ctrl.getAll)

app.get('/api/account/:id', ctrl.getOneAccount)

app.post('/api/account', ctrl.newAccount)

app.delete('/api/account/:id', ctrl.deleteAccount)

app.put('/api/account/:id', ctrl.updateAccount)

app.listen(5000, () => {
    console.log('5000 ducks marching on Rome.')
})