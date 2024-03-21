const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
    res.json({ response:true, message: "This is login path" });
});

module.exports = router;