const express = require('express');
const app = express();
const onix = require('./');

app.use(express.json());

app.get('/', function (req, res) {
  var xml = onix.create(req.body.onixData, req.body.onixType);
  res.send(xml);
});

app.listen(14458, function() {
  console.log('ONIX  listening on port 14458'))
});
