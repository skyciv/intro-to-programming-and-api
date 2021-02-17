# Other languages - JavaScript

Before we move on to working with JSON, http requests and the SkyCiv API, let's recap what we've learned a little bit while taking a look at another popular programming language for the web: JavaScript.

What we're trying to get across here is that while the _syntax_ of particular languages varies, the same key concepts like `variables`, `collections`, `loops`, `ifs` and `objects` apply. Once you've got one language down, it's not a huge step to try your hand at another.

>💡 "Syntax" pretty much means "how do we put words and letters together to make sentences, or in the context of programming, to make statements / expressions".

## Variables

If you remember in the video lesson on variables we talked about how other languages require a keyword for declaring variables, well JavaScript is just one such language.<br>
We define variables in JavaScript with `var`:

```javascript
var f1 = 5.6;
var f2 = 4.3;
var f3 = 3.6;
var f4 = 2.8;
var f5 = 4.1;

var totalForce = f1 + f2 + f3 + f4 + f5;
console.log("Force = " + totalForce)
```

You'll notice a couple of other things:<br>
1. Each line ends with a semi-colon (`;`) 
2. Variables with longer names (`totalForce`) are defined using `camelCase` - in python, we used `snake_case`
3. We use `console.log()` rather than `print`
4. We don't need to get a `string` representation of the `float` value `totalForce` - JavaScript will do this for us when concatenating the string.

## Collections

Defining collections in JavaScript is simple, just like in python, we use square brackets:

```javascript
var fs = [5.6, 4.3, 3.6, 2.8, 4.1];
var f1 = fs[0];
fs[-1] = 0.0; // not supported - has no effect
```

>💡 Negative indices are not supported in JavaScript

## Loops

Loops work similarly in JavaScript - we use them to repeat an operation or set of operations multiple times.
The syntax in JavaScript starts with the `for` keyword, just as in python:

```javascript
fs = [5.6, 4.3, 3.6, 2.8, 4.1];
var totalForce = 0;
for (var i = 0; i < fs.length; i++) {
  totalForce += fs[i];
}

console.log("Force = " + totalForce)
```



>💡 

## If statements

```javascript
var totalForce = 100;
var capacity = 90;

if (totalForce > capacity){
  console.log("Force exceeds capacity!");
}
else if (abs(totalForce - capacity) < 1.0E-6){
  console.log("Force equals capacity");
}
else {
  console.log("Force is within capacity");
}
```

## Functions

```javascript
function checkAgainstCapacity(total, capacity){
  if (total > capacity){
    return "exceeds capacity!";
  }
  else if (abs(total - capacity) < 1.0E-6){
    return "equals capacity";
  }
  else {
    return "is within capacity";
  }
}

console.log("Force " + checkAgainstCapacity(totalForce, capacity));
```

## Objects and Classes

```javascript
class Force {
  constructor(x, y, z) {
    this.X = x;
    this.Y = y;
    this.Z = z;
  }

  toString() {
    return this.X + ', ' + this.Y + ', ' + this.Z;
  }
}

var f = new Force(-0.3, 0.8, 5.6);

var fs = [new Force(-0.3, 0.8, 5.6), 
          new Force(0.1, -0.3, 4.3), 
          new Force(0.5, 0.7, 3.6), 
          new Force(-0.3, 0.6, 2.8), 
          new Force(0.0, -0.1, 4.1)];

var totalForce = new Force(0.0, 0.0, 0.0,);
for (var i = 0; i < fs.length; i++) {
  totalForce.X += fs[i].X;
  totalForce.Y += fs[i].Y;
  totalForce.Z += fs[i].Z;
}

var totalForce = new Force(0.0, 0.0, 0.0,);
fs.forEach((f) => {
  totalForce.X += f.X;
  totalForce.Y += f.Y;
  totalForce.Z += f.Z;
})

console.log('totalForce = ' + totalForce.toString());
```