const { port } = require('./Config/Configuration')
const express = require('express');
const app = express()
const indexRouter = require('./Routes/IndexRouter')

app.get("/", (req, res) => {
    res.send("Welcome To Hotel Management")
});
app.use(indexRouter)

app.listen(port, console.log(`Listening on Port No:- ${port}`));