# working with json

## How do we actually create JSON?

To understand how to create JSON, it is best that we consider the process of sending and receiving data. 

**So consider this scenario:**

* We have a language specific object.
* We want to send this information (the object) to a url and get a response via a HTTP request.
* We know the server at this url will know what to do with this object and it will then send information back.

**The next thing to think about is what is a HTTP request?**

HTTP means `Hypertext Transfer Protocol`. A bunch of big words but the main thing to realise here is that it is a way of sending text, **not objects!**

**JSON to the rescue!**

JSON uses a format that can easily be converted to a string (text) and also easily be **parsed** back to an object.

Coding languages typically have built in functions that will handle converting your objects to and from JSON.

---
## Examples

If you're still struggling with the difference between language objects and JSON, hopefully the difference between the following JavaScript and Python examples will make it clear!

We will include a boolean and an empty value to see the difference in the languages:

### JavaScript Example
```js
const plates = {
	plates: {
		1: {
			nodes: [4, 5, 7, 6],
            thickness: 50,
            is_meshed: true,
            some_empty_value: null
		},
	},
};

const platesToJson = JSON.stringify(plates);
```

After using `JSON.stringify` on the object, `platesToJson` now contains the string:

`"{"plates":{"1":{"nodes":[4,5,7,6],"thickness":50,"is_meshed":true,"some_empty_value":null}}}"`

---

### Python Example

Now in Python, `null` does not exist. Instead, the equivalent is `None`. Also, booleans are capitalised!

Compare the difference between the Python dictionary and the JavaScript Object. In particular `null` vs `None` and `true` vs `True`.

```py
import json

plates = {
    "plates": {
        "1": {
            "nodes": [4, 5, 7, 6],
            "thickness": 50,
            "is_meshed": True,
            "some_empty_value": None
        },
    },
}

plates_to_json = json.dumps(plates)
```

But after using Python's `json` library denoted by the `import json` at above the dictionary, the variable `plates_to_json` becomes:

`"{"plates": {"1": {"nodes": [4, 5, 7, 6], "thickness": 50, "is_meshed": true, "some_empty_value": null}}}"`

Which is the same as the JavaScript json string! Although Python doesn't trim the whitespaces which is not an issue.

--- 

### Sending a request

There are a few ways to make a HTTP request. We encourage using our NPM, Pip or NuGet package which you can [read more about here](https://skyciv.com/api/v3/docs/packages/). This page also walks you through setting up a project to use these packages. They reduce the amount of coding to a fraction of traditional ways.

The file [skycivCall.js](./skycivCall.js) shows you how to make the request using the `skyciv` NPM package.

The file [manualCall.js](./manualCall.js) shows you how to make this request using raw JavaScript. 