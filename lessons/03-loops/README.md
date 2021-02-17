# Loops 

Loops allow us to repeat an operation (or several operations) a number of times.
We can combine loops with lists to perform the operations for each item in the list.

Recalling our list of forces and list of distances:
```python
f = [5.6, 4.3, 3.6, 2.8, 4.1]		# forces
d = [0.0, 0.75, 1.5, 2.25, 3.0]		# distances
```

We have 5 items in our list, so we want to perform our calculation for force and moment 5 times.

We can run a loop with 5 iterations to calculate the total force:
```python
indexes = [0, 1, 2, 3, 4]
for i in indexes:
	f_tot += f[i]	# sum the forces (remember our += operator from Lesson 1)
```

>💡 Some lingo - The text indented under the for statement is the loop `body`. This is the set of operations that are performed at each `iteration` of the loop.<br> The operations **must** be indented to be recognised as the loop `body` in python. In other languages the `body` is often identified by a pair of braces {} after the for statement.

This is basically an automated way of doing what we did in the previous lesson:
```python
f_tot = f[0] + f[1] + f[2] + f[3] + f[4]
```

We can do the same thing for the total moment.
First however, for efficiency, let's calculate the midpoint before running the loop:
```python
mid = (d[-1] - d[0]) / 2
```
Furthermore, rather than writing out the indexes we want to use,
let's use the native python function 'range' to construct the list of indexes for us:
```python
for i in range(5):
	m_tot += f[i] * (mid - d[i]) #  sum the products of the force & distance
```
Again, this is just like what we did manually in the previous lesson.

The range function allows us to construct a list of indexes to loop through. We can define the `start` value of the loop, the value at which we want it to `stop` (and which should not be executed), and the `step` size - the difference between one index and the next. 
```python
range(0, 5, 1) = [0, 1, 2, 3, 4] 	# start at 0, stop at (before) 5, step by 1
range(5) = [0, 1, 2, 3, 4] 			# because the start value and step size are optional, we can omit them and get the same list
range(4,-1,-1) = [4, 3, 2, 1, 0] 	# we can step through the list the backwards and count down instead using step = -1
range(2,9,2) = [2, 4, 6, 8]			# with the right combination of start, stop & step values, we can create all kinds of lists
```

However, we're still not making full use of the power of loops combined with collections. Take a look again at our loops. In both cases we instructed the loop to run 5 times.

What if we have a list with more or fewer values?
We can accommodate this using the native python function 'len' to get the length of (_number of items in_) the list:
```python
n = len(f)
```
and use the range keyword to construct an array of indexes to run the loop with:
```python
for i in range(n):
	f_tot += f[i]
	m_tot += f[i] * (mid - d[i])
```

> ⏱ Another improvement to think about in our code, is to consider speed. Earlier, we used 2 loops, each comprising 5 iterations. So in total, we performed 10 iterations. Furthermore, there is a performance overhead in setting up the loop - extending execution time further. Since our calculations for total force and total moment are independent of each other, In the above for block, we can do both calculations at the same time, within one loop. This is what we've done in the code above, and it nearly halves the execution time 👍