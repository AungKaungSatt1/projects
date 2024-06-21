const express = require("express");
const app =  express();

const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient('mongodb://localhost');
const db = client.db("shop");
const port = 8080;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const cors = require("cors");
app.use(cors());

app.listen(port, () => {
    console.log(`Api running at ${port}...`);
})

app.get('/home', async (req, res) => {
    const data = await db.collection("products").find().toArray();

    return res.json(data);
});