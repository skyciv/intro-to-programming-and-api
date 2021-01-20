const skyciv = require('skyciv');

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

const callback = function (res) {
	console.log(res);
};

skyciv.request(apiObject, callback);
