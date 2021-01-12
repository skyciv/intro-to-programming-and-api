# functions

The SkyCiv API object takes an array of functions. The order which you provide these functions is the order they will be executed. Find a list of avaialable functions in [the docs](https://skyciv.com/api/v3/docs/the-request-object#functions).

When you send a request to the SkyCiv API, think of it exactly how you would achieve this if you were to use the browser.

A smaller workflow might look something like this:
1. First you need to **"start a session"** with skyciv.com which you do by opening the webpage and signing in.
2. Open Structural 3D and **"set your model"** by adding nodes, members etc.
3. Click the **"solve"** button to instruct the SkyCiv server to perform FEA on the model and give you results.
4. Click the **"design"** button to instruct the SkyCiv server to run a design on your model.
5. **"Save"** the model to our SkyCiv account.

Well, this is essentially what the `functions` property is for! We need to choose the set of instructions which suits our need.

Using the above workflow the functions array might look like this:
```py
{
    auth: {},
    options: {},
    functions: [
        {
            "function": "S3D.session.start",
            "arguments" : {
                "keep_open": False # Don't forget, Python syntax!
            }
        },
        {
            "function": "S3D.model.set",
            "arguments": {
                "s3d_model": s3d_model
            }
        },
        {
            "function": "S3D.model.solve",
            "arguments": {
                "analysis_type": "linear",
            }
        },
        {
            "function": "S3D.design.member.check",
            "arguments": {
                "design_code": "AS_4100-1998",
                "s3d_model": s3d_model,
            }
        },
        {
            "function": "S3D.file.save",
            "arguments": {
                "name": "simple-beam-test",
                "path": "api/intro-to-programming/"
            }
        }
    ]
}
```