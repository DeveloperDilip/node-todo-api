const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {User} = require('./../model/User');

beforeEach((done) => {
	User.remove({}).then(() => done());
});

describe('POST / users', () => {
	it('should create a new user', (done) => {
		var name = 'Test User name';


		request(app)
			.post('/users')
			.send({name})
			.expect(200)
			.expect((res) => {
				expect(res.body.name).toBe(name);
			})
			.end((err, res) => {
				if(err){
					return done(err);
				}

				User.find().then((users) => {
					expect(users.length).toBe(1);
					expect(users[0].name).toBe(name);
					done();
				}).catch((e) => done(e));
			});
	});

	it('should not create user with invalid body data', (done) => {
		request(app)
			.post('/users')
			.send({})
			.expect(400)
			.end((err, res) => {
				if(err){
					return done(err);
				}
				User.find().then((users) => {
					expect(users.length).toBe(0);
					done();
				}).catch((e) => done(e));
			})
	});
});