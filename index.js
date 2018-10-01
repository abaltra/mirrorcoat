const express = require("express");

const app = express();
const port = process.env.PORT || 3000

app.use("/api/:code", (req, res, end) => {
    console.log("hai")
    console.log(req.params)
    res.statusCode = req.params.code 
    res.send()
})

app.listen(port, () => {
    console.log("App started in port " + port)
})