const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to mongodb server.');
	}
	console.log('Connected to mongodb server.');
	
	//Fine one and Update
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID("5ae9b9ac9e585f1a84a6bb67")
	},{
		$set: {
			name: 'Moulik Rai',

		},
		$inc:{
			age : 5
		}
	},{
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
	db.close();
});