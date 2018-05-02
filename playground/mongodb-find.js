const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to mongodb server.');
	}
	console.log('Connected to mongodb server.');

	db.collection('Users').find({name: 'Moulik Rai'}).count().then((count) => {
		console.log('User Found');
		console.log('----------');
		console.log('Users count: ', count);
	}, (err) => {
		return console.log('Unable to fetch Users', err);
	});

	db.collection('Users').find({name: 'Moulik Rai'}).toArray().then((docs) => {
		console.log('Users');
		console.log('----------');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		return console.log('Unable to fetch Users', err);
	});
	db.close();
});


// db.collection('Users').find().count().then((count) => {
// 	console.log('Users count: ', count);
// }, (err) => {
// 	return console.log('Unable to fetch Users', err);
// });

// db.collection('Users').find(name: 'Moulik Rai').toArray().then((docs) => {
// 	console.log('Users');
// 	console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
// 	return console.log('Unable to fetch Users', err);
// });