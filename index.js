const { client } = require('./Config/Config')
const express = require('express');
const app = express()
const indexRouter = require('./Routes/IndexRouter')
const { port } = require('./Config/Config')
app.use(express.json())
app.use(express.urlencoded());

client.connect(function (err) {
    if (err) throw err;
    client.on("connect", () => {
        console.log("Connected");
    })
});

/* client.query(`CREATE TABLE IF NOT EXISTS items ( id serial PRIMARY KEY , item_type VARCHAR NOT NULL, item_name VARCHAR,item_cost VARCHAR,item_details VARCHAR,status VARCHAR);`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);

    }
    client.end;
}) */

/* client.query(`Select * from NOW()`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);

    }
    client.end;
}) */

app.get("/", (req, res) => {
    res.send("Welcome To Hotel Management")
});
app.use(indexRouter)

app.listen(port, console.log(`Listening on Port No:- ${port}`));