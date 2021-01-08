const http = require('http');

const data = { some: 'value' };
const jsonData = JSON.stringify(data);

const options = {
	host: 'api.skyciv.com',
	path: '/v3',
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Content-Length': jsonData.length,
	},
};

callback = function (response) {
	let res = '';
	response.on('data', function (chunk) {
		res += chunk;
	});

	response.on('end', function () {
		console.log(JSON.parse(res));
	});
};

const req = http.request(options, callback);
req.write(jsonData);
req.end();
