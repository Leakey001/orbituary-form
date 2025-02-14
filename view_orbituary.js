const express = require('express');
const mysql = require('libmysql - mysqlnd 8.1.25'); 

const app = express();
const port = 3036; 


const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  database: 'obituary_platform'
});

app.get('/view_obituaries', (req, res) => {
  db.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting database connection:', err);
      return res.status(500).send('Database error');
    }

    const query = 'SELECT * FROM obituaries';

    connection.query(query, (err, results) => {
      connection.release();

      if (err) {
        console.error('Error retrieving obituaries:', err);
        return res.status(500).send('Error retrieving obituaries');
      }

      res.render('obituaries', { obituaries: results });
