// module imports
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

// file imports
const errorHandler = require('./middlewares/error-handler');

let a;
const b = 4;
b = 3;
const d = 'fff';
let e = 'fdsfsf';

// variable initializations
const app = express();
const port = process.env.PORT || 5001;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// mount routes
app.use('/test', (req, res) => {
  res.json({ success: true, message: 'Testing' });
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

console.log(process.env.NODE_ENV.toUpperCase());
