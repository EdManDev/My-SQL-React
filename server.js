const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

//2-) after we put the var  config of mySQL
var config = {
	host: "localhost",
	port: "8889",
	user: "root",
	password: "root",
	database: "react_sql"
};

// ROOT
app.get("/", (req, res, next) => {
	res.send("Hello World!");
});

// GET DATA
app.use("/get", (req, res, next) => {
	var mysql = require("mysql");
	var connection = mysql.createConnection(config);
	// retrieve data in database
	var sql = "SELECT * FROM `products`";
	connection.query(sql, (err, results, fields) => {
		connection.end();
		if (err) {
			next(err);
		} else {
			res.json(results);
		}
	});
});

// CREATE DATA
app.use("/create", (req, res, next) => {
	var mysql = require("mysql");
	var connection = mysql.createConnection(config);
	// retrieve data in database
	var sql = "INSERT INTO `products`SET ?";
	// THAT CAN BE USE
	// var sql = "INSERT INTO `products`SET `id`=?, `name`=?, `price`=?, `date`=?";
	connection.query(
		sql,
		req.body,
		// THAT CAN BE USE
		// [req.body.id, req.body.name, req.body.price, req.body.date],
		(err, results, fields) => {
			connection.end();
			if (err) {
				next(err);
			} else {
				res.json(results);
			}
		}
	);
});

// DELETE DATA
app.use("/delete", (req, res, next) => {
	var mysql = require("mysql");
	var connection = mysql.createConnection(config);
	// retrieve data in database
	var sql =
		"DELETE  FROM `products` WHERE " +
		connection.escape(req.bogy.filename) +
		"=" +
		connection.escape(req.body.fieldvalue);
	connection.query(
		sql,
		[req.body.filename.req.body.fieldvalue],
		(err, results, fields) => {
			connection.end();
			if (err) {
				next(err);
			} else {
				res.json(results);
			}
		}
	);
});

// error handling
app.use((req, res, next) => {
	res.send("Sorry, cannot recognize" + req.url);
});

// midleware
app.use((err, req, res, next) => {
	res.send("ErrorHandlingMidleware:" + err.message);
});

// const port = process.env.port || 5000;
// app.listen(port, () => {
// 	console.log("Example app listening on port  ✅  " + port);
// });

// declare in new express
const port = 5000;
app.listen(port, () =>
	console.log(`Example app listening on port ${port} ✅!`)
);
