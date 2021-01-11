const http = require('http');

const apiObject = {
	auth: {
		username: 'YOUR_SKYCIV_USERNAME',
		key: 'YOUR_SKYCIV_API_KEY',
	},
	functions: [
		{
			function: 'S3D.session.start',
			arguments: {
				keep_open: false,
			},
		},
	],
};

const jsonData = JSON.stringify(apiObject);

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
		const parsedResults = JSON.parse(res)
		console.log(parsedResults);
	});
};

const req = http.request(options, callback);
req.write(jsonData);
req.end();
