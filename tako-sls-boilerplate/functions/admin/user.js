const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
    res.json({ response:true, message: "This is admin-user path" });
});


module.exports = router;