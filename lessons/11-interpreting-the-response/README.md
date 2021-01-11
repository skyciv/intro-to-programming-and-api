# interpreting the response

To extract data from the response, we first need to "parse" the JSON response. The JSON libraries that we previously used have a method to parse this infomation. These methods take the json response and converts it to an object (or dictionary). Note that the terms object and dictionary may be used interchangeably from here.

#### JavaScript
```js
const parsedResults = JSON.parse(resData);
```

#### Python
```py
parsed_res = json.loads(res_data)
```

---

Carrying on, we now have the response as an object.

The following sample is a real response from the SkyCiv API. The call ran a function to start a session and nothing else. We will look further into the SkyCiv input and output objects in upcoming lessons. For now we are just going to grab some values from this response object.

```py
parsed_res = {
	"response": {
		"session_id": "1FOmVIqbBsF0K6vXVrJhcxmyc95p0LCG1PwnDsN2dfXIB3Grby3vxzNiSBEem8zR_0",
		"session_expiry_time": 1610337096,
		"msg": "S3D session successfully started.",
		"status": 0,
		"function": "S3D.session.start",
		"data": "",
		"last_session_id": "1FOmVIqbBsF0K6vXVrJhcxmyc95p0LCG1PwnDsN2dfXIB3Grby3vxzNiSBEem8zR_0"
	},
	"functions": [
		{
			"session_id": "1FOmVIqbBsF0K6vXVrJhcxmyc95p0LCG1PwnDsN2dfXIB3Grby3vxzNiSBEem8zR_0",
			"session_expiry_time": 1610337096,
			"msg": "S3D session successfully started.",
			"status": 0,
			"function": "S3D.session.start",
			"data": ""
		}
	]
}
```

The first thing worth noting is that the dictionary contains two keys, `"response"` and `"functions"`. The value of `"response"` is an object while the value of `"functions"` is an array.

---

### Accessing objects

Say we want to get the value of `"msg"` from the `"response"` object. In Python, we can do so like this:

```py
message = parsed_res["response"]["msg"]
```

However, if this key doesn't exist, we will get an error. Instead, we can check if the key exists and print it if so.

```py
if "msg" in parsed_res["response"]:
    message = parsed_res["response"]["msg"]
    print(message)
```

Similarly in JavaScript:

```js
const responseKeys =  Object.keys(parsedResults["response"]); // Gets an array of keys
if (responseKeys.includes("msg")) {
    const message = parsedResults["response"]["msg"];
    console.log(message);
}
```

In JavaScript you can also drill down an object by chaining keys:

```js
const message = parsedResults.response.msg;
```

However, to insert variable keys you will need to use the former method.

---

### Accessing arrays

Now looking at the `"functions"` array. This is an array of objects - in our case, one object. Let's get the value of the status key.

We know that arrays start from an index of 0, so we can get the first object in the array like so:

```py
first_func = parsed_res["functions"][0]
status = first_func["status"]
```

and in one line using JavaScript:

```js
const status = parsedResults.functions[0].status
```

Note using the chain syntax for an array index is not valid, for example `parsedResults.functions.0.status` will not work.

Have a look at the following files for a full example of starting a session.

* [Python](./index.py)
* [JavaScript](./index.js)
