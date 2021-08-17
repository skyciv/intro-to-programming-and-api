import skyciv

api_object = {
    "auth": {
        "username": 'YOUR_SKYCIV_USERNAME',
        "key": 'YOUR_SKYCIV_API_KEY',
    },
    "functions": [
        {
            "function": "S3D.session.start",
            "arguments": {
                "keep_open": False
            }
        }
    ]
}

# This next line will print an error as the data variable above is incorrect.
results = skyciv.request(api_object, {})

response = results["response"]

if "msg" in response:
    print(
        f'Successful request with the following response message from SkyCiv: {response["msg"]}')
