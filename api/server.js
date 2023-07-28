const express = require('express');
const path = require('path');
const randomId = require('random-id');
const app = express(),
      bodyParser = require("body-parser");
      port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/dist')));

app.get('/', (req, res) => {
  res.status(200).json(['work']);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});