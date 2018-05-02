var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User} = require('./model/User');

var app = express();
app.use(bodyParser.json());

app.post('/users', (request, response) => {
	var newUser = new User({
		name: request.body.name,
		email: request.body.email
	});

	newUser.save().then((doc) => {
		response.send(doc);
	}, (e) => {
		response.status(400).send(e);
	});
});

app.get('/users', (request, response) => {
	User.find().then((users) => {
		response.send({users});
	}, (e) => {
		response.send(400).send(e);
	});
})

app.listen(3000, () => {
	console.log('Started on port 3000');
});

module.exports = {
	app
};




