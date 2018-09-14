
const express = require('express');
const     app = express();

// Serve static files
app.use(express.static('./public'));

// Listen on port 3000
app.listen(3000);
console.log("Listening on localhost:3000");
