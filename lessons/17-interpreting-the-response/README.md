# interpreting the response

We've done it! We now have a real response which has performed a bunch of useful functions.

Let's dig through the response.

---

### Breaking down the response

The first thing to understand is what the `response` and `functions` properties contain.

**The `response` key contains the same information as the `data` key of the last function in the functions array.**

The `functions` array contains an array of function responses. These are in the same order that was specified in the input object.

You can explore the output of our API object in one of the following files:
* [jsOutput.json](./jsOutput.json)
* [pyOutput.json](./pyOutput.json)

Like we did previously, we can loop the response objects and drill down into them to read certain values. So let's get the peak displacement in the Y and stresses about Z:
* [index.js](./index.js)
* [index.py](./index.py)