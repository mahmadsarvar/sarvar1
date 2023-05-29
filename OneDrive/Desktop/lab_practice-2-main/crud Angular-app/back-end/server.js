var express = require("express");
var server = express();
var routes = require("./routes/routes");
var mongoose = require("mongoose");
const cors = require("cors");

// MongoDB connection 
const dbUrl = 'mongodb://127.0.0.1:27017/est';
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(8000, () => {
  console.log(`server started at port 8000`);
});
