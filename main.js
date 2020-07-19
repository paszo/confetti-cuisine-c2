const express = require('express');

const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
    res.send("Welcome to Confetti Cuisine");
});

app.listen(app.get("port"), () => {
    console.log(`Server is running at port ${app.get("port")} ...`);
});