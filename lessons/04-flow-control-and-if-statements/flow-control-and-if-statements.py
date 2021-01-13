# The next thing we want to do is check whether the total force
# we have calculated exceeds the bearing capacity of the foundation under the wall

# To do this, we can use an If statement, and alert the user if the foundation is not strong enough

fcap = 100 # set this value to whatever you want (we can look at calculating it later)
ftot = 10 # copy the calculated value from ealier

# With those 2 values, our if statement looks like:
if ftot > fcap:
	print("bearing force exceeds the capacity!")

# we can also add an "else if" statement using elif. 
# If the first criterion is met, this will be ignored.
# If the first criterion is NOT met, the criterion in elif will be checked next
# We can add as many elif statements as we like
elif ftot == fcap:
	print("bearing force is JUST within capacity")

# NOTE that when we want to check whether a value equals another, we use two = signs.
# this distinguishes checking equality from assigning a value to the variable
# try putting just one equals sign - the IDE will flag an error.

# Finally, we can add an else statement. If none of the conditions in if or elif are met
# this code block will be processed.
else:
	print("bearing force is within capacity")

# all together that looks like:
if ftot > fcap:
	print("bearing force exceeds the capacity!")
elif ftot == fcap:
	print("bearing force is JUST within capacity")
else:
	print("bearing force is within capacity")

# NOTE !!! something about the accuracy of computer calcs

