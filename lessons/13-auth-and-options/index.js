// Create auth object
const auth = {
	username: 'YOUR_SKYCIV_USERNAME',
	key: 'YOUR_SKYCIV_API_KEY',
};

// Create options object - this is the default values so you could instead omit the entire object
const options = {
	validate_input: true,
	response_data_only: false,
};

// Create the api object and add auth and options
const apiObject = {
	auth: auth,
	options: options,
};
