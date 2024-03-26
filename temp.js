// Load HTTP module
const http = require("http");

const hostname = "192.168.1.4";
const port = 8000;

const exec = require('child_process').exec


// Create HTTP server
const server = http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "text/plain" });
  exec('/usr/bin/vcgencmd measure_temp', (err, stdout, stderr) => res.end(stdout))
});

// Prints a log once the server starts listening
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
