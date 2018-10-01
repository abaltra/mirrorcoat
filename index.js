const express = require("express");

const app = express();

app.use("/api/:code", (req, res, end) => {
    console.log("hai")
    console.log(req.params)
    res.statusCode = req.params.code 
    res.send()
})

app.listen(3000, () => {
    console.log("App started")
})