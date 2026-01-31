const express = require("express");
const app = express();
const dotenv = require("dotenv");
const route = require("../src/route/user.route");
const db = require("./db/db");
dotenv.config();
db();
const cors = require("cors");
app.use(
  cors({
    origin: process.env.FRONTEND_URL ,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  }),
);
// built-in middleware to parse JSON and urlencoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", route);

module.exports = app;
