# Create auth object
auth = {
    "username": "YOUR_SKYCIV_USERNAME",
    "key": "YOUR_SKYCIV_API_KEY"
}

# Create options object - this is the default values so you could instead omit the entire object
options = {
    "validate_input": True,
    "response_data_only": False
}

# Create the api object and add auth and options
api_object = {
    "auth": auth,
    "options": options
}
