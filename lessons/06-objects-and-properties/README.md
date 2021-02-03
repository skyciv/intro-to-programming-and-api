# Objects

So far we've worked with simple data. Storing single values in variables or with other values in a collection.
But the data that comes back from modern structural analysis and design software, such as SkyCiv Structural 3D, is usually much more sophisticated than this.

In our case, for each force along the bottom of the wall, we'd get back 3 components of the force, corresponding to all 3 degrees of freedom (X, Y & Z).

Expressed in a simple way, that data might look something like this:
```python
x: -0.3
y: 0.8
z: 5.6
```
Now we could express that using an array, where item 0 corresponds to the x direction, item 1 corresponds to the y direction, and item 2 corresponds to the z direction.

A clearer and more flexible way to hold this data, is with an `object`. The most common object seen in programming languages is the `class`.

## Using Classes

For our application, it's most useful for us to learn how to _use_ classes before we learn the ins and outs of creating them.<br>
Nevertheless, we need to see the class definition and instantiation (see 💡 below) to know what's going on.<br>
Below is a `class` called _force_, with 3 `attributes`, 1 for each component of that force in the 3 DOFs.<br>

```python
class Force:
    def __init__(self, x, y, z):
        self.X = x
        self.Y = y
        self.Z = z

    def to_string(self):
      return str(self.X) + ', ' + str(self.Y) + ', ' + str(self.Z)
```

We can define a variable representing one _instance_ of that class like so:

```python
f1 = Force(-0.3, 0.8, 5.6)
```

>💡 The class `definition` is like a blueprint for the class. It represents the outline of what data is required, but doesn't represent the _actual_ set of values (much like in algebra, where a letter indicates a variable that can take on any value).<br>The actual set of values is represented by an `instance` of the class. If we have multiple forces, each force is an `instance` of the force class.<br>Creating an `instance` is called `instantiation`, but programmers will often refer to creating an instance of the class, and setting the _initial_ values, as `initializing`.

And we can get values from the class by using the variable and the _attribute_ we want to get, linked by a dot:

```python
print('Force in X = ' + str(f1.X))
print('Force in Y = ' + str(f1.Y))
print('Force in Z = ' + str(f1.Z))
```

Similarly, we can set values of attributes by placing _{variable}.{attribute}_ on the left hand side of the `=` operator:

```python
f1.X = 0.1
f1.Y = -0.1
f1.Z = 0.0
```

We can also call functions on the object using a dot, the function name, and parentheses with the required arguments:

```python
print('Force = ' + f1.to_string())
```

In the context of our earlier engineering question, when we eventually work with the API, we will often get back lists of objects.
These work in the same way as a list of values:

```python
fs = [Force(-0.3, 0.8, 5.6), 
      Force(0.1, -0.3, 4.3), 
      Force(0.5, 0.7, 3.6), 
      Force(-0.3, 0.6, 2.8), 
      Force(0.0, -0.1, 4.1)]

print('Force in Z = ' + str(fs[2].Z))
```

We can sum up the forces in that list to find a total force, using a loop (like in Lesson 4):

```python
f_tot = 0.0
for i in range(len(fs)):
  f_tot += fs[i].Z

print('Total Force = ' + str(f_tot))
```

However, we can make that loop read a lot clearer, by looping through the forces, rather than using an index to look up the values:

```python
f_tot = 0.0
for f in fs:
  f_tot += f.Z

print('Total Force = ' + str(f_tot))
```

Furthermore, we can define `f_tot` not as a single value, but _of type_ `Force` instead.
This means we can simultaneously sum all components of the force within the loop, and store them together on one force variable:

```python
f_t = Force(0,0,0)
for f in fs:
  f_t.X += f.X
  f_t.Y += f.Y
  f_t.Z += f.Z

print('Total Force = ' + f_t.to_string())
```

## BONUS content - Defining your own Classes

Let's go back to our earlier code snippet and really break down what we're doing with the class definition.

```python
class Force:
    def __init__(self, x, y, z):
    self.X = x
    self.Y = y
    self.Z = z
```

On line 1 we define the class and give it a name 'Force'. On lines 2 to 5, we define a function that will be run every time we create a new instance of the class.

