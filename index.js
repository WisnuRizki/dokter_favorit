const express = require("express");
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())
app.use(express.static('/uploads'));
const router = require("./routers");

app.use("/", router);

console.log("app listen on port " + port);

app.listen(port);