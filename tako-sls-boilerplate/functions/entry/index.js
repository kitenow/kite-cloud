const serverless = require("serverless-http");
const express = require("express");
const router = express.Router();
const pg = require("pg");
const app = express();

router.get("/", (req, res) => {
    res.json({ response:true, message: "This is root : index path" });
});

app.use('/', router);
app.use('/login', require('./login'));

module.exports.handler = serverless(app);

