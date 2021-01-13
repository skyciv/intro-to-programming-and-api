#  Flow control - 'If' statements

The next thing we want to do is check whether the total force we have calculated exceeds the bearing capacity of the foundation under the wall.

To do this, we can use an `If` statement, and alert the user if the foundation is not strong enough.

Let's start by defining the force capacity of the foundation:
```python
fcap = 100 #  set this value to whatever you want
```
We also have the value of total force we calculated in the previous lessons:
```python
ftot = 10  # the value we calculated ealier
```
With those 2 values, our if statement looks like:
```python
if ftot > fcap:
	print("bearing force exceeds the capacity!")
```
we can also add an "else if" statement using `elif`:
```python
elif ftot == fcap:
	print("bearing force is JUST within capacity")
```

If the first criterion is met, the `elif` condition will not be checked. If the first criterion is **not** met, the criterion in `elif` will be checked next.

	NOTE that when we want to check whether a value equals another, we use two '=' signs. This distinguishes checking equality from assigning a value to the variable.

Finally, we can add an else statement. If none of the conditions in `if` or `elif` are met
this code block will be processed.
```python
else:
	print("bearing force is within capacity")
```
all together that looks like:
```python
if ftot > fcap:
	print("bearing force exceeds the capacity!")
elif ftot == fcap:
	print("bearing force is JUST within capacity")
else:
	print("bearing force is within capacity")
```
TO DO !!! something about the accuracy of computer calcs

TO DO !!! we can add as many elifs as we want, but it might be better to use a switch case