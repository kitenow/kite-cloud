const serverless = require("serverless-http");
const express = require("express");
const router = express.Router();
const pg = require("pg");
const app = express();


router.get("/", (req, res) => {
    res.json({ response:true, message: "This is biz path" });
});

app.use('/biz/', router);
console.log("express router");
module.exports.handler = serverless(app);

