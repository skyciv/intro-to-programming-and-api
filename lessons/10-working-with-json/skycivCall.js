const skyciv = require('skyciv');

const myObj = { some: 'value' };
const jsonData = JSON.stringify(myObj);

const callback = function (res) {
	const resObject = JSON.parse(res);
	console.log(resObject);
};

skyciv.request(jsonData, callback);
