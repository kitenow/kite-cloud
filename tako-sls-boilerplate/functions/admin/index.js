const serverless = require("serverless-http");
const express = require("express");
const router = express.Router();
const pg = require("pg");
const app = express();




router.get("/", (req, res) => {
    console.log("express router");
    res.json({ response:true, message: "This is admin index path" });
});


app.use('/admin/', router);
app.use("/admin/user", require('./user'));



module.exports.handler = serverless(app);

