const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
	user: 'root',
	host: 'localhost',
	password: 'password',
	database: 'Players'
});

app.post('/create', (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const age = req.body.age;
	const wins = req.body.wins;
	const losses = req.body.losses;
	const scores = req.body.scores;

	db.query("INSERT INTO Foot (name, email, age, wins, losses, scores) VALUES (?, ?, ?, ?, ?, ?)", [name, email, age, wins, losses, scores ], (err, result) => {
		if (err) {
			console.log("err")
		}
		else{
			res.send ("Record save")
		}

	});
});

app.listen(3001, () => {
  console.log("hello you are welcome on port 3001");
});