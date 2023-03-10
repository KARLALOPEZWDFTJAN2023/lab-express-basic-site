const express = require("express");
const PORT = 3000;

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/views/home.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/public/views/works.html");
});

app.get((req, res) => {
    res.sendFile(__dirname + "/public/views/404.html");
});


app.listen(PORT, () => {
    console.log(`Server is performing on this port ${PORT}`);
});