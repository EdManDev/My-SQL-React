const express = require('express')
const app = express()
const mysql = require("mysql")

// Create connection
const db = mysql.createConnection({
  host: "localhost",
  port: "8889",
  user: "root",
  password: "root",
  database: "nodemysqlDB"
});

// Connect 
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("✅ My SQL Connected...");
});

//--------------------------------------------
// Create Database // as nodemysqlDB
//--------------------------------------------
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE nodemysqlDB';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

//--------------------------------------------
// Create Table
//--------------------------------------------
app.get('/createposttable', (req, res) => {
  let sql = 'CREATE TABLE posts( _id int(10) primary key AUTO_INCREMENT, title VARCHAR(255), products VARCHAR(255))';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post table created...");
  });
});

//--------------------------------------------
// Insert Data
//--------------------------------------------
app.get('/addpost', (req, res) => {
  let post = { title: 'Post One', products: ' this is Post number One' }
  let sql = "INSERT INTO posts SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post 1 Added..");
  });
});

//--------------------------------------------
// Insert Data 2
//--------------------------------------------
app.get('/addpost2', (req, res) => {
  let post = { title: 'Post Two', products: ' this is Post number Two' }
  let sql = "INSERT INTO posts SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post 2 Added..");
  });
});

//--------------------------------------------
// Insert Data 2
//--------------------------------------------
app.get('/addpost2', (req, res) => {
  let post = { title: 'Post Two', products: ' this is Post number Two' }
  let sql = "INSERT INTO posts SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post 2 Added..");
  })
})

//--------------------------------------------
// Select All Posts 
//--------------------------------------------
app.get('/getposts', (req, res) => {
  let sql = "SELECT * FROM posts";
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Posts fetched...");
  });
});

//--------------------------------------------
// Select Single Post 
//--------------------------------------------
app.get('/getpost/:id', (req, res) => {
  let sql = `SELECT * FROM posts WHERE _id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post fetched...");
  });
});


//--------------------------------------------
// Update Post 
//--------------------------------------------
app.get('/updatepost/:id', (req, res) => {
  let newTitle = 'Updated Title Tree';             // added element
  let newProducts = 'this is Product number Tree'; // added element

  let sql = `UPDATE posts SET title = "${newTitle}" , products = "${newProducts}" WHERE _id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post Updated...");
  });
});


//--------------------------------------------
// Delete Post 
//--------------------------------------------
app.get('/deletepost/:id', (req, res) => {
  let sql = `DELETE FROM posts WHERE _id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post Deleted...");
  });
});

const port = 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))