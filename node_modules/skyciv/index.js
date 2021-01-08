var current_API_version_endpoint = 3;
var is_nodejs = typeof module !== 'undefined' && module.exports;

let request = function (data, callback, options) {
	if (!options) options = {};

	if (!options.version) options.version = current_API_version_endpoint;

	if (!options.http_or_https) options.http_or_https = 'https';

	if (typeof data === 'object') {
		data = JSON.stringify(data);
	}

	// Handle Node.js
	if (is_nodejs) {
		var req_module;
		var req_port;

		if (options.http_or_https == 'https') {
			req_module = require('https');
			req_port = 8085; // 443;
		} else {
			req_module = require('http');
			req_port = 8086; // 80;
		}

		var req_options = {
			hostname: 'api.skyciv.com',
			port: req_port,
			path: '/v' + options.version + '',
			method: 'POST',
			headers: {
				// these are compulsory for it to work properly
				'Content-Type': 'application/json',
				'Content-Length': Buffer.byteLength(data),
			},
			//timeout: timeout
		};

		var req = req_module.request(req_options, function (res) {
			res.setEncoding('utf8');

			var res_data = '';
			res.on('data', function (chunk) {
				res_data += chunk;
			});

			res.on('end', function () {
				if (!res_data) {
					res_data = JSON.stringify({
						response: {
							status: 1,
							msg: 'No response was received from the API. Please contact support@skyciv.com for more assistance with this.',
						},
					});
				}
				callback(res_data, options);
			});
		});

		req.on('error', function (e) {
			console.log('Problem with request: ' + e.message);
		});

		// Send the object as a JSON string
		req.write(data);
		req.end();
	} else {
		var req = new XMLHttpRequest();

		req.onreadystatechange = function () {
			if (req.readyState == XMLHttpRequest.DONE) {
				var response_obj;
				try {
					if (req.responseText) {
						response_obj = JSON.parse(req.responseText);
					} else {
						response_obj = {
							response: {
								status: 1,
								msg: 'No response was received from the API. Please contact support@skyciv.com for more assistance with this.',
							},
						};
					}
				} catch (e) {
					response_obj = {
						response: {
							status: 2,
							msg:
								'There was an issue parsing the response from the API. Please contact support@skyciv.com for more assistance with this.',
						},
					};
				}

				if (typeof response_obj === 'string') response_obj = JSON.parse(response_obj);
				if (callback) callback(response_obj, options);
			}
		};

		var req_port = '';
		if (options.http_or_https == 'https') {
			req_port = ':8085'; // 443;
		} else {
			req_port = ':8086'; // 80;
		}

		//req.timeout = timeout;
		req.open('POST', options.http_or_https + '://api.skyciv.com' + req_port + '/v' + options.version, true); // true=async
		req.setRequestHeader('Content-type', 'application/json');
		req.send(data);
	}
};

module.exports.request = request;