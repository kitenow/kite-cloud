const serverless = require("serverless-http");
const express = require("express");
const router = express.Router();
const pg = require("pg");
const app = express();


const login = require('./login');

console.log(login)


router.get("/", (req, res) => {
    res.json({ response:true, message: "This is index path" });
});






app.use('/admin/', router);
app.use("/admin/login", login);

console.log("express router");
module.exports.handler = serverless(app);

