const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");


const app = express();

mongoose.connect("mongodb://jason3690:1USJLj3sjhWNfk0Y@cluster0-shard-00-00-msk2y.mongodb.net:27017,cluster0-shard-00-01-msk2y.mongodb.net:27017,cluster0-shard-00-02-msk2y.mongodb.net:27017/node-angular?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", {useNewUrlParser: true})
    .then(() => {
        console.log('connected to the database')
    })
    .catch((error) => {
        console.log(error);
    });

app.use(bodyParser.json());

app.use((req, res, next)=> {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});
app.use("/api/posts", postsRoutes);

module.exports = app;