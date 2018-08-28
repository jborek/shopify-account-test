require('dotenv').config();

const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const CORS = require('cors');

const server = express();

const PORT = process.env.PORT || 3000;

const routes = require('./api/routes/routes');

server.use(bodyParser.json());
server.use(CORS());

const whitelist = ['https://northernbrewer-staging.myshopify.com', 'https://northernbrewer.myshopify.com'];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) != -1){
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'POST'
}

routes(server);

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));