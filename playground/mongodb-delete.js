const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to mongodb server.');
	}
	console.log('Connected to mongodb server.');

	//Delete Many
	// db.collection('Users').deleteMany({name: 'Moulik Rai'}).then((result) => {
	// 	console.log(result);
	// }, (err) => {
	// 	if(err){
	// 		console.log('Cannot perform the delete operation.');
	// 	}
	// });

	//Delete One
	// db.collection('Users').deleteOne({name: 'Moulik Rai'}).then((result) => {
	// 	console.log(result);
	// }, (err) => {
	// 	if(err){
	// 		console.log('Cannot perform the delete operation.');
	// 	}
	// });

	//Find One and Delete
	// db.collection('Users').findOneAndDelete({name: 'Moulik Rai'}).then((result) => {
	// 	console.log(result);
	// }, (err) => {
	// 	if(err){
	// 		console.log('Cannot perform the delete operation.');
	// 	}
	// });

	
});