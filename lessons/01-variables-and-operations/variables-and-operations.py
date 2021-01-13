# forces
f1 = 5.6
f2 = 4.3
f3 = 3.6
f4 = 2.8
f5 = 4.1

# distances from left hand side
d1 = 0.0
d2 = 0.75
d3 = 1.5
d4 = 2.25
d5 = 3.0 

# to calculate the total force, we can just add up the forces.

# we need somewhere to store the value of that force, so we can show it to the user, so we define a variable.
# we can then assign a value to that variable. In this case, we will assign the sum of the 5 forces we have:
totalForce = f1 + f2 + f3 + f4 + f5
# NOTE as well, that we are getting the value of forces f1 through f5 - 

# TO DO: something about types

# We can then show the user this value by printing it to the command line.
print('The total force is: ' + totalForce)

# to calculate the moment about the midpoint, we first find the midpoint from the smallest and largest distances:
midpoint = (d5 - d1) / 2.0

# we can then calculate in turn, the effect of each force on the moment.
# For the first force:
moment = f1 * (midpoint - d1)

# For the second force:
moment = moment + f2 * (midpoint - d2)
# NOTE that the code we write defies typical mathematical laws.
# A variable can appear on both sides of the '=' sign.
# The right hand side of '=' will be evaluated first, and then assigned to the left hand side

# a convenient shorthand for this, applied to the 3rd force, is:
moment += f3 * (midpoint - d3)
# NOTE '+=', '-=', '*=' & '/=' are language specific, but are supported in many modern programming languages

# we can finish the calculation of the total moment:
moment += f4 * (midpoint - d4)
moment += f5 * (midpoint - d5)