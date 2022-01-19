var express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  // res.status(200).json({ msg: "Api request recieved" });
  res.send("<h1>Hello World</h1>");
});

module.exports = router;
