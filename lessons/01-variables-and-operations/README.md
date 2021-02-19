# Variables and Operations

## Our starting data

Let's just take a moment to remind ourselves of the starting data:
```python
# Forces:
f1 = 5.6
f2 = 4.3
f3 = 3.6
f4 = 2.8
f5 = 4.1

# Distances from the left hand side:
d1 = 0.0
d2 = 0.75
d3 = 1.5
d4 = 2.25
d5 = 3.0 
```

What we've done above, in that code, is define 10 variables, f1-f5 & d1-d5, and set their values.

We can now use those variables to calculate the total force, by adding the values together.

We need somewhere to store the value of that force, so we define a variable. We can simultaneously assign a value to that variable. And in this case, we will assign the sum of the 5 forces we have:
```python
total_force = f1 + f2 + f3 + f4 + f5
```
>💡 When we write the variables f1, f2, etc. in our piece of code, we are saying "use the value of f1, f2, etc. here".

We can then show the user this value by printing it to the command line.

```python
print('The total force is: ' + str(total_force) + 'kN')
```

>💡 The print statement also reveals something about our variables. They have a `type` - our forces and distances are numbers, in this case `floats`. We want to print a `string` to the command line. So we must use the `str()` function to turn our numerical value into a string.

To calculate the moment about the midpoint, we first find the midpoint from the smallest and largest distances:
 ```python
midpoint = (d5 - d1) / 2.0
```

We can then calculate in turn, the effect of each force on the moment:

```python
# For the first force:
total_moment = f1 * (midpoint - d1)

# For the second force:
total_moment = total_moment + f2 * (midpoint - d2)
```
NOTE that the code we write defies typical mathematical laws.
A variable can appear on both sides of the '=' sign.
The right hand side of '=' will be evaluated first, and then assigned to the left hand side.

This operation is so common, that python has a convenient shorthand for this: `+=`. Applied to the 3rd force, that looks like:
```python
 # For the third force
total_moment += f3 * (midpoint - d3)
```

NOTE: The exact syntax of '+=', '-=', '*=' & '/=' is language specific, but these kinds of operations are supported in many modern programming languages.

We can finish the calculation of the total moment, and print it as well:
```python
total_moment += f4 * (midpoint - d4) # fourth force
total_moment += f5 * (midpoint - d5) # fifth force

print('The total moment is: ' + str(total_moment) + 'kNm')
```