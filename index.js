import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// This line of code handles the get request
app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`My second server is running on port ${port}.`);
})
