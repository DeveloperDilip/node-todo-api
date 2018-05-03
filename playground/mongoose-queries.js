const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/model/User');

var id = '5aea8df6ef3b480dd850dfa8';

User.findById(id).then((user) => {
	if(!user){
		return console.log('ID not found.');
	}
	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e);
});
