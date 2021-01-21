# Functions

 In the previous lesson we checked the force against the capacity. We can do a similar check, and compare the overturning moment to the foundation _moment_ capacity.

Remembering our force against capacity calculation:

```python
fcap = 100
ftot = 10

if ftot > fcap:
	print("bearing force exceeds the capacity!")
elif ftot == fcap:
	print("bearing force is JUST within capacity")
else:
	print("bearing force is within capacity")
```

our moment against capacity check would look like:

```python
mcap = 100
mtot = 10

if mtot > mcap:
	print("overturning moment exceeds the capacity!")
elif mtot == mcap:
	print("overturning moment is JUST within capacity")
else:
	print("overturning moment is within capacity")
```

Notice anything? We have essentially written the same if statement twice, just with different variables, and slightly different text.

This is where a `function` becomes very useful.
A function allows us to reuse a block of code multiple times, without writing it out every time.
It also gives us a single place to edit and maintain that code -
if we want to change the behaviour, we only have to change it once, in one place.

	TIP: if you find yourself writing a similar piece of code over and over, that's a good indication you might want to write a function.

In python, we define a function with the def keyword, followed by the function name.
The variables in the parentheses `()` are the function *arguments* - the values we must pass to the function for it to work.
The indented text on the next line is the function *body*, which is the piece of code we want to run every time we use the function.

```python
def CheckAgainstCapacity(tot, cap):
	if tot > cap:
		return "exceeds the capacity!"
	elif tot == cap:
		return "is JUST within capacity"
	else:
		return "is within capacity"
```

We use the function by 'calling' it. We do this simply by using it in code.
Let's do this for the force against capacity check
```python
fcap = 100
ftot = 10
output = "bearing force " + CheckAgainstCapacity(ftot, fcap)
print(output)
```

We can use the function again, to check the moment against the capacity:

```python
mcap = 100
mtot = 10
output = "moment " + CheckAgainstCapacity(mtot, mcap)
print(output)
```

By using this function, we just reused 7 lines of code (twice), and it only used up 2 lines in our program! Functions can be really powerful for keeping code, and the time it takes to write it, short.
