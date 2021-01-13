# Loops 

Loops allow us to repeat an operation (or several operations) a number of times.
We can combine this with lists to perform the operations for each item in the list.

Recalling our list of forces and list of distances:
```python
f = [5.6, 4.3, 3.6, 2.8, 4.1]		# forces
d = [0.0, 0.75, 1.5, 2.25, 3.0]		# distances
```

We have 5 items in our list, so we want to perform our calculation for force and moment 5 times.

Run a loop with 5 iterations to calculate the total force
```python
for i in [0, 1, 2, 3, 4]:
	ftot += f[i]	# sum the forces (remember our += operator from Lesson 1)
```

	NOTE some lingo: The text within the for block is the loop 'body'.
	This is the set of operations that are 'evaluated' at each 'iteration' of the loop.

This is basically an automated way of doing what we did in the previous lesson:
```python
ftot = f[0] + f[1] + f[2] + f[3] + f[4]
```

We can do the same thing for the total moment.
First however, for efficiency, let's calculate the midpoint before running the loop:
```python
mid = d[-1] - d[0]
```
Furthermore, rather than writing out the indexes we want to use,
let's use the native python function 'range' to construct the list of indexes for us:
```python
for i in range(5):
mtot += f[i] * (mid - d[i])  sum the products of the force & distance
```
(Again, this is just like what we did manually in the previous lesson)
```python
mtot = f[0] * (mid - d[0]) + f[1] * (mid - d[1]) + f[2] * (mid - d[2]) + f[3] * (mid - d[3]) + f[4] * (mid - d[4])
```
However, we're still not making full use of the power of loops combined with collections.
Take a look again at our loops. In both cases we instructed the loop to run 5 times. 

What if we have a list with more or fewer values?
We can accommodate this using the native python function 'len' to get the number of items in the list:
```python
N = len(f)
```
and use the range keyword to construct an array of indexes to run the loop with:
```python
for i in range(N):
	ftot += f[i]  sum the forces (remember our += operator from Lesson 1)
	mtot += f[i] * (mid - d[i])  sum the products of the force & distance
```

	NOTE another improvement to think about in our code, is to consider speed.
	Earlier, we used 2 loops, each comprising 5 iterations. So in total, we performed 10 iterations.
	Furthermore, there is a performance overhead in setting up the loop - extending execution time further.
	Since our calculations for total force and total moment are independent of each other, 
	In the above for block, we can do both calculations at the same time, within one loop.
	This effectively halves the execution time.