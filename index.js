const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const registerRouter = require('./routes/register');
const configs  = require('./configs.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: configs.mysql.host,
  user: configs.mysql.user,
  password: configs.mysql.password,
  database: configs.mysql.db_name
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

registerRouter.use('/user',registerRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
