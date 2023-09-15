const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require('./services/mongo').mongoConnect;
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

const userRoutes = require('./routes/user.route');

app.use('/users',userRoutes);

async function startServer() {
    await mongoConnect();
    app.listen(3000);
}

startServer();

console.log("Server running at " + 3000);