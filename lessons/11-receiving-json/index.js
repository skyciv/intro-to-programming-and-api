const skyciv = require('skyciv');

const apiObject = {
	auth: { "username": "YOUR_SKYCIV_USERNAME", "key": "OUR_SKYCIV_API_KEY" },
	functions: [
		{
			function: 'S3D.session.start',
			arguments: {
				keep_open: false,
			}
		}
	]
};

const callback = function (res) {
	const responseKeys = Object.keys(res['response']);
	if (responseKeys.includes('msg')) {
		console.log(
			`Successful request with the following response message from SkyCiv: ${res.response.msg}`
		);
	}
};

skyciv.request(apiObject, callback);
