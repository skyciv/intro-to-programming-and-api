import skyciv

api_object = {
    "auth": {
        "username": "YOUR_SKYCIV_USERNAME",
        "key": "YOUR_SKYCIV_API_KEY"
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

options = {
    'version': 3,
    'http_or_https': 'https'
}

# This next line will print an error as the api_object variable above is incorrect.
results = skyciv.request(api_object, options)

with open('pyOutput.json', 'w') as f:
    print(results, file=f)
