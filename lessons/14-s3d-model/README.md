# s3d model

In this lesson we will be looking at what we typically refer to as the `s3d_model`.

Every model that is built with SkyCiv, is stored as JSON. This makes it very easy to read, work with and integrate across platforms.

The `s3d_model` is a JSON definition that describes every attribute of the Structural 3D model. To prove this, open up any model in [S3D](https://platform.skyciv.com/structural) and click `File > Export > SkyCiv File (JSON for API) > v3`. Open the downloaded file in the code editor and have a look around! Tip: Firefox displays JSON files in a very readable format.

This may serve as a guide to create your own s3d_model. It's also a great way to create a template.

---

### Components

The following properties are the core pieces to creating the `s3d_model`. Detailed information on each of them can be found on the [`s3d_model` page](https://skyciv.com/api/v3/docs/s3d-model#s3d_model) of the docs.

* `settings`
* `nodes`
* `members`
* `plates`
* `meshed_plates`
* `sections`
* `materials`
* `supports`
* `settlements`
* `point_loads`
* `moments`
* `distributed_loads`
* `pressures`
* `area_loads`
* `self_weight`
* `load_combinations`

The `settings` property contains all the general setup information of the model whilst every other explicitly defines components of the model such as nodes, members, loads.