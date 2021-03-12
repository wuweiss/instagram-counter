const express = require('express');
require('dotenv').config();

const app = express();
const port = 5003;

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  }

  console.info(`server is listening on port: ${port}`);
});

app.get('/instagram/:instagramId', (req, res) => {
  res.json({ number: 1 });
});
