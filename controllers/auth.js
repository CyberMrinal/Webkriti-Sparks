const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const client = require('../configs/database')


exports.register = (req, res) => {
    const {firstName, lastName, gender, email, password} = req.body;

    const isValid = client
	.query(`SELECT * FROM users WHERE email = ${email}`)
	.then((data) => {
		isValid = data.rows;

		if (isValid.length !== 0) {
			res.status(400).json({
				error: 'User already exists!'
			});
		} else {			
			bcrypt.hash(password, 10, (err, hash) => {
				if (err) {
					res.status(500).json({
						error: 'Internal Server Error'
					});
				}

				const user = {
					firstName,
					lastName,
					gender,
					email,
					password: hash
				}

				client
				.query(`INSERT INTO users VALUES (${user.email}, ${user.password}, ${user.firstName}, ${user.lastName}, ${user.gender})`)
				.then((data) => {
					const token = jwt.sign(
						{
							email: email
						}, 
						process.env.SECRET_KEY
					);	
					res.status(200).json({
						message: 'User added successfully!',
						token: token
					});
				})
				.catch((err) => {
					res.status(500).json({
						error: "Database error occurred!",
					});
				});
			});
		}							
	})
	.catch((err) => {
		console.log(err);
	});

}


exports.login = (req, res) => {
	const {email, password} = req.body;

	client
	.query(`SELECT * FROM users WHERE email = ${email}`)
	.then((data) => {
		userData = data.rows;

		if (userData.length === 0) {
			res.status(400).json({
				error: "User does not exist, Register instead!",
			});
		} else {
			bcrypt.compare(password, userData[0].password, (err, result) => {
				if (err) {
					res.status(500).json({
						error: "Internal Server Error!",
					});
				} else if (result === true) {
					const token = jwt.sign(
						{
							email: email,
						},
						process.env.SECRET_KEY
					);
					res.status(200).json({
						message: "Login Successful!",
						token: token,
					});
				} else {
					res.status(400).json({
						error: "Enter correct password!",
					});
				}
			});
		}
	})
	.catch((err) => {
		res.status(500).json({
			error: "Database Error Occurred!",
		});
	});
}