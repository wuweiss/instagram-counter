'use strict';

const express = require('express');
const dotenv = require('dotenv');
const { getFollower } = require('./instagram');

dotenv.config();
const app = express();
const port = 5003;

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  }

  console.info(`server is listening on port: ${port}`);
});

app.get('/instagram-followers/:fbId', (req, res) => {
    getFollower({
        id: req.params.fbId,
        param: process.env.FIELDS_PARAM,
        token: process.env.LONGLIVEDACCESSTOKEN,
    })
        .then((number) => res.json(number))
        .catch(console.error);
});
