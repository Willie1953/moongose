const deIngresoService = require ("../services/login/deIngreso");
const usersDB = require('../utils/data/usuarios.json');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const fsPromises = require('fs').promises;
const path = require('path');
const { userInfo } = require("os");

const controldeLogin = async (req, res) => {
	const { user, pwd } = req.body;
	if (!user || !pwd)
		return res
			.status(400)
			.json({ message: 'Se requiere que ingrese Username y password.' });
	const foundUser = Array.from(usersDB).find(element => element.username === user);
	if (!foundUser) return res.sendStatus(401); //No autorizado
	res.send("Ha ingresado con exito");

	/** Se saltea la verificación del password */

	// const match = await bcrypt.compareSync(pwd, foundUser.password); {
	// if (!match) {
	// 	const roles = Object.values(foundUser.roles).filter(Boolean);
	// 	console.log(roles);
	// 	// create JWTs
	// 	const accessToken = jwt.sign(
	// 		{
	// 			UserInfo: {
	// 				"username": foundUser.username,
	// 				roles: roles,
	// 			},
	// 		},
	// 		process.env.ACCESS_TOKEN_SECRET,
	// 		{ expiresIn: '30s' }
	// 	);
	// 	const refreshToken = jwt.sign(
	// 		{ "username": foundUser.username },
	// 		process.env.REFRESH_TOKEN_SECRET,
	// 		{ expiresIn: '1d' }
	// 	);

	// 	/**  Saving refreshToken with current user */
	// 	const otherUsers = usersDB.users.filter(
	// 		(person) => person.username !== foundUser.username
	// 	);
	// 	const currentUser = { ...foundUser, refreshToken };
	// 	usersDB.setUsers([...otherUsers, currentUser]);
	// 	await fsPromises.writeFile(
	// 		path.join(__dirname, '..', 'model', 'users.json'),
	// 		JSON.stringify(usersDB.users)
	// 	);
	// 	res.cookie('jwt', refreshToken, {
	// 		httpOnly: true,
	// 		sameSite: 'None',
	// 		secure: true,
	// 		maxAge: 24 * 60 * 60 * 1000,
	// 	});
	// 	res.json({ accessToken });
	// } 
	// else 
	// {
	// 	res.sendStatus(401);
	// }
// }
};

module.exports = controldeLogin;