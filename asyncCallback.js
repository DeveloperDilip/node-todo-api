console.log('Start');

var asyncAdd = (a, b, callback) => {
	process.nextTick(() => {
		callback(a+b)
	});
}

asyncAdd(5, 10, (sum) => {
	console.log(sum);
});

console.log('End');