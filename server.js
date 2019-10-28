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

app.get("/", (req, res, next) => {
	res.send("Hello World!");
});

//1-) connection to mySQL
app.use("/retrieve", (req, res, next) => {
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
