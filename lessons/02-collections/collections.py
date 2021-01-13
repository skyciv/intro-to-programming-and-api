# In the previous example, we used 5 separate values for the forces along the base of the wall (f1 to f5)
# and 5 separate values for the distances of these forces (d1 to d5)

# Collections allow us to store multiple values in a single variable, and then manipulate those values.

# [OPTIONAL text (some kind of clickable box or skippable part in the course ???)]
# Every programming language has various types of collections, and each collection has a specific purpose.
# The characteristics which differ between collections are things like:
#  (i)   whether the values in the licollectionst are ordered (and preserve the order between operations)
#  (ii)  whether a value can appear more than once in the collection (whether duplicate values are permitted)
#  (iii) whether values can be added or removed from the collection
# Some examples of collections (from various languages) are:
# array, list, arraylist, dictionary, hashset, stack, concurrentbag, etc.

# We'll stick with lists for now (the simplest collection in python), because they are more than adequate for our current application.

# In python, the simplest collection is a List - an ordered collection of values.
# We define a list (as a variable) using square brackets []:
f = [5.6, 4.3, 3.6, 2.8, 4.1]  # forces
d = [0.0, 0.75, 1.5, 2.25, 3.0]  # distances

# We can get a value from the list by using its index to 'look it up':
f4 = [3]
# NOTE the indexing starts from 0 - the first value in the list is f[0], so:
f1 = f[0]
f2 = f[1]
f3 = f[2]
# etc ...

#Also NOTE, in python, we can get values starting from the end of the list, using negative numbers:
f5 = f[-1]

# We can also change the values in a list by assigning a new value to a specific index.
# For example, we could ignore the force near the middle by making it 0:
f[2] = 0.0
# Similarly we can change a number of values simultaneously (like making all the forces on the left = 0)
f[0:2] = 0.0

# We can also add, remove and insert values in the list, using append, remove, pop and insert:
f.append(1.7) 		# 1.7 is the new value that we want to add
f.remove(3.6) 		# 3.6 is the value we want to find in the list and then remove
f.pop(-1) 			# -1 is the index of the value we want to remove - in this case, the last value in the list
f.insert(0, 5.9)	# 0 is the index at which we want to insert the value, 5.9 is the value we want to insert

# Collections are especially useful when used in conjunction with loops, which we'll discuss in the next lesson.
# Without loops, we can access the values in the list, and calculate our total force & moment using the list values:
f = [5.6, 4.3, 3.6, 2.8, 4.1]  # forces
d = [0.0, 0.75, 1.5, 2.25, 3.0]  # distances

# For the total force, we just sum the values:
ftot = f[0] + f[1] + f[2] + f[3] + f[4]

# For the total moment, we sum the product of the force and distance from the midpoint:
mid = (d[-1] - d[0]) / 2.0 # NOTE how we use the -1 index to get the last item in the list. This has the benefit of working for any list, of any length
mtot = f[0] * (mid - d[0]) + f[1] * (mid - d[1]) + f[2] * (mid - d[2]) + f[3] * (mid - d[3]) + f[4] * (mid - d[4])
