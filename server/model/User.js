var mongoose = require('mongoose');

var User = mongoose.model('User', {
	name: {
		type: String,
		required : true,
		minlength: 1,
		trim: true
	},
	email: {
		type: String,
		minlength: 1,
		trim: true
	},
	age: {
		type: Number,
		default: null
	},
	location: {
		type: String,
		default: 'N/A'
	},
	completedAt: {
		type: Number,
		default: null 
	}
});

module.exports = {
	User 
};

// save new something
// var NewUser = new User({
// 	name: 'Dilip Bhattarai',
// 	email: 'synister.dilip@gmail.com',
// 	age: 22,
// 	location: 'Madhumalla, Morang',
// 	completedAt: 1234156
// });

// NewUser.save().then((doc) => {
// 	console.log('Saved User', doc);
// }, (e) => {
// 	console.log('Unable to save todo', e);
// });




// var NewUser = new User({
// 	name: 'Dilip Bhattarai',
// 	age: 22,
// 	location: 'Madhumalla, Morang',
// 	completedAt: 1234156
// });

// NewUser.save().then((doc) => {
// 	console.log('Saved User', doc);
// }, (e) => {
// 	console.log('Unable to save todo');
// });