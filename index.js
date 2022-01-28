const client = require('./Config/Config')
const express = require('express');
const app = express()
const indexRouter = require('./Routes/IndexRouter')

client.connect(function (err) {
    if (err) throw err;
    client.on("connect", () => {
        console.log("Connected");
    })
});

client.query(`Select * from users`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);

    }
    client.end;
})

app.get("/", (req, res) => {
    res.send("Welcome To Hotel Management")
});
app.use(indexRouter)

app.listen(3000, console.log(`Listening on Port No:- ${3000}`));