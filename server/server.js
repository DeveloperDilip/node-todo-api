var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {User} = require('./model/User');

var app = express();
app.use(bodyParser.json());

//POST a user
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

//GET all users
app.get('/users', (request, response) => {
	User.find().then((users) => {
		response.send({users});
	}, (e) => {
		response.send(400).send(e);
	});
})

//GET users/:id
app.get('/users/:id', (request, response) => {
	var id = request.params.id;

	//Validating id using mongoose query isValid()
	if(!ObjectID.isValid(id)){
		return response.status(404).send();
	}

	User.findById(id).then((user) => {
		if(!user){
			response.status(404).send(user);
		}
		response.status(200).send(user);
	}, (err) => {
		response.send(400).send(err);
	});

	// User.isValid(id).then((err) => {
	// 	if(err){
	// 		return response.status(404).send('User not found');
	// 	}

	// }).catch(e) => response.status(400).send(e);
});

app.listen(3000, () => {
	console.log('Started on port 3000');
});

module.exports = {
	app
};




