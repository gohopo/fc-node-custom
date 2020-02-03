var express = require('express');
var app = express();
app.get('*', (req, res) => {
    res.send('hello world!');
  });
var port = process.env.FC_SERVER_PORT || 9000
app.listen(port, function () {
      console.log("FunctionCompute custom-nodejs runtime inited.");
});
app.timeout = 0; // never timeout
app.keepAliveTimeout = 0; // keepalive, never timeout