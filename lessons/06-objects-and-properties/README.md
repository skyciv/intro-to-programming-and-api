# Objects

So far we've worked with simple data. Storing single values in variables or with other values in a collection.
But the data that comes back from modern structural analysis and design software is usually much more sophisticated than this.

In our case, for each force along the bottom of the wall, we'd get back 3 components of the force, corresponding to all 3 degrees of freedom.

Expressed in a simple way, that data might look something like this:
```python
x: -1.3
y: 12.8
z: 0.0
```
Now we could express that using an array, where item 0 corresponds to the x direction, item 1 corresponds to the y direction, and item 2 corresponds to the z direction.

A clearer and more flexible way to hold this data, is with an `object`. The most common object seen in programming languages is the `class`.

## Using Classes

For our application, it's most useful for us to learn how to _use_ classes before we learn the ins and outs of creating them.

Nevertheless, we need to see the class definition and instantiation (more on those words later) to know what's going on.

Below is a `class` called _force_, with 3 `properties`, 1 for each component of that force in the 3 DOFs.

```python
class Force:
    def __init__(self, x, y, z):
        self.X = x
        self.Y = y
        self.Z = z
```

We can define a variable representing one instance of that class like so:

```python
f1 = Force(-1.2, 10.0, 0.1)
```

And we can access its properties by using the variable and the property, linked by a dot:

```python
print('Force in X = ' + f1.X)
print('Force in Y = ' + f1.Y)
print('Force in Z = ' + f1.Z)
```

That covers how we use classes.

## Defining Classes

Let's go back to our earlier code snippet and really break down what we're doing with the class definition.

```python
class Force:
    def __init__(self, x, y, z):
    self.X = x
    self.Y = y
    self.Z = z
```

On line 1 we define the class and give it a name 'Force'. On lines 2 to 5, we define a function that will be run every time we create a new instance of the class.

