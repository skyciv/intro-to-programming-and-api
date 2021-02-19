#  Flow control - 'If' statements

The next thing we want to do is check whether the total force we have calculated exceeds the bearing capacity of the foundation under the wall.

To do this, we can use an `if` statement, and alert the user if the foundation is not strong enough.

An `if` statement allows us to instruct the program to process certain code, and ignore other code, depending on some criteria that we specify.

Let's look at this by first defining the force capacity of the foundation:
```python
f_cap = 100 # set this value to whatever you want
```
and the value of total force:
```python
f_tot = 10  # again, set this value ot whatever you want
```
With those 2 values, our `if` statement looks like:
```python
if f_tot > f_cap:
	print("force exceeds the capacity!")
```
we can also add an "else if" statement using `elif`:
```python
elif f_tot == f_cap:
	print("force is equal to capacity")
```

If the first criterion is met, the `elif` condition will not be checked. If the first criterion is **not** met, the criterion in `elif` will be checked next.

> 💡 When we want to check whether a value equals another, we use two `=` signs. This distinguishes checking equality from assigning a value to the variable.

Finally, we can add an else statement. If none of the conditions in `if` or `elif` are met
this code block will be processed.
```python
else:
	print("force is within capacity")
```
all together that looks like:
```python
if f_tot > f_cap:
	print("force exceeds the capacity!")
elif f_tot == f_cap:
	print("force is equal to capacity")
else:
	print("force is within capacity")
```

## Accuracy of calculations on computers

One thing to note when comparing non-integer numbers in programming code, is the calculations are done with <a href="https://en.wikipedia.org/wiki/Floating-point_arithmetic">floating point precision</a>.
What this basically means, is that numbers can be guaranteed to be accurate to only 15 significant figures.
So you could define a variable like 10.0, but when saved to memory, this variable will get slightly distorted. When you subsequently print this variable, you could see something like 10.0000000000004.

If you compare that value to 10.0 using `==` what's going to happen? The `if` statement will tell you that those numbers are not equal. But as engineers, we are comfortable accepting these values are equal - that tiny 0.0000000000004 makes no difference to quantities like 100s of kNs of force.

So, rather than comparing these values using `==`, we should compare their difference to some level of tolerance with which we are happy:

```python

# compare the difference in force to a small tolerance
if (f_cap - f_tot) > 1.0E-6:
	print("force exceeds the capacity!")
else if abs(f_cap - f_tot) < 1.0E-6:
	print("force is equal to capacity")
else:
	print("force is within capacity")
```