"use strict";

const express = require("express");
const dotenv = require("dotenv");
const { getFollower } = require("./instagram");

dotenv.config();
const app = express();
const port = 5003;

app.listen(port);
app.set("view engine", "pug");

// This is the page for the authorization of the app and to get the short lived token
app.get("/", (req, res) => {
    res.render("index", {
        title: "Authorize this app",
        message: "Please click on the button and authorize this app",
        appId: process.env.FACEBOOK_APP_ID,
    });
});

app.get("/instagram-followers/:fbId", (req, res) => {
    getFollower({
        id: req.params.fbId,
        param: process.env.FIELDS_PARAM,
        token: process.env.LONGLIVEDACCESSTOKEN,
    })
        .then((number) => res.json(number))
        .catch((error) => {
            console.error(error); // do proper logging
            res.json(error);
        });
});
