# Functions

 In the previous lesson we checked the force against the capacity. We can do a similar check, and compare the overturning moment to the foundation _moment_ capacity.

Remembering our force against capacity calculation:

```python
f_cap = 100
f_tot = 10

if (f_cap - f_tot) > 1.0E-6:
	print("force exceeds the capacity!")
else if abs(f_cap - f_tot) < 1.0E-6:
	print("force is equal to capacity")
else:
	print("force is within capacity")
```

Our moment against capacity check would look like:

```python
m_cap = 100
m_tot = 10

if (m_cap - m_tot) > 1.0E-6:
	print("moment exceeds the capacity!")
else if abs(f_cap - f_tot) < 1.0E-6:
	print("moment is equal to capacity")
else:
	print("moment is within capacity")
```

Notice anything? We have essentially written the same if statement twice, just with different variables, and slightly different text.

This is where a `function` becomes very useful.
A function allows us to reuse a block of code multiple times, without writing it out every time.
It also gives us a single place to edit and maintain that code -
if we want to change the behaviour, we only have to change it once, in one place.

> 💡 If you find yourself writing a similar piece of code over and over, that's a good indication you might want to write a function.

In python, we define a function with the `def` keyword, followed by the function name.
The variables in the parentheses `()` are the function `arguments` - the values we must pass to the function for it to work.
The indented text on the next line is the function `body`, which is the piece of code we want to run every time we use the function.

```python
def check_against_capacity(tot, cap):
	if tot > cap:
		return "exceeds the capacity!"
	elif abs(tot - cap) < 1.0E-6:
		return "is equal to capacity"
	else:
		return "is within capacity"
```

We use the function by `call`ing it. We do this simply by using it in code.

> 💡 We've been using functions since lesson 1 - we've used functions like `print()`, `str()`, `range()` and `len()`.

Let's do this for the force against capacity check:
```python
f_cap = 100
f_tot = 10
output = "bearing force " + check_against_capacity(f_tot, f_cap)
print(output)
```

We can use the function again, to check the moment against the capacity:

```python
m_cap = 100
m_tot = 10
output = "moment " + check_against_capacity(m_tot, m_cap)
print(output)
```

By using this function, we just reused 7 lines of code (twice), and it only used up 2 lines in our program! Functions can be really powerful for keeping code short, and minimising the time it takes to write it.