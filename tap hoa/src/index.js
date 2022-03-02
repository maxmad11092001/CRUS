const express = require('express');
const app = express();
const port = 4000;
const route = require('./routes/index')
const hbs = require('express-handlebars');
const path = require('path');
const db = require('./configDB/connectDB')

route(app);
db.connect();

app.engine('handlebars', hbs.engine())
app.set('view engine', "handlebars");
app.set('views', path.join(__dirname, 'views'))

app.listen(port, (req, res) =>{
    console.log(`App is running on http://localhost:${port}/`)

})