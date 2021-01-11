import json
import http.client as httplib

# Mac users - if you get an error similar to this:
# [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1123)
# Go to the Python folder in the application directory and run the file "Install Certificates.command"


try:  # If anything inside this block fails, the "except" block will run

    # What kind of data we are sending
    headers = {'Content-Type': 'application/json'}

    # Create a connection to SkyCiv
    conn = httplib.HTTPSConnection('api.skyciv.com', 8085)

    # Prepare the payload
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

    json_string = json.dumps(api_object, separators=(',', ':'))

    conn.request('POST', '/v3', json_string, headers)
    raw_res = conn.getresponse()
    conn.close()

    res_data = raw_res.read()
    parsed_res = json.loads(res_data)

    if (parsed_res["response"]["status"] == 0):
        with open('pyOutput.json', 'w') as f:
            print(parsed_res, file=f)

    else:
        print(
            f'\nUnsuccessful solve with message: { parsed_res["response"]["msg"] }')

except Exception as e:
    print(f'\nThe following error occured: {e}')
