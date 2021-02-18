# Other languages - JavaScript

Before we move on to working with JSON, http requests and the SkyCiv API, let's recap what we've learned a little bit while taking a look at another popular programming language for the web: `JavaScript`.

What we're trying to get across here is that while the _syntax_ of particular languages varies, the same key concepts like `variables`, `collections`, `loops`, `ifs` and `objects` apply. Once you've got one language down, it's not a huge step to try your hand at another.

>💡 "Syntax" pretty much means "how do we put words and letters together to make sentences", or in the context of programming, "how do we put words and letters together to make statements / expressions".

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
console.log("Force = " + totalForce);
```

You'll notice a couple of other things:<br>
1. Each line ends with a semi-colon (`;`) 
2. Variables with longer names (`totalForce`) are defined using `camelCase` - in python, we used `snake_case`
3. We use `console.log()` rather than `print`
4. We don't need to get a `string` representation of the `float` value `totalForce` - JavaScript will do this for us when concatenating the string.

## Collections

Defining collections in JavaScript is simple. Just like in python, we use square brackets:

```javascript
var fs = [5.6, 4.3, 3.6, 2.8, 4.1];
var f1 = fs[0];
fs[-1] = 0.0; // not supported - has no effect
```

>💡 Negative indices are **not** supported in JavaScript

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

Otherwise, there are a few important differences we need to note:
1. The body of the loop is indicated by a pair of curly braces `{}` - everything between these braces will be executed for each iteration of the loop. Separate statements within the loop (on each line) are indicated with `;`, just like in other JavaScript code.
1. The loop definition requires us to declare a variable, in this case `i`, to be the _iterator_.
1. The stop condition comes next, and rather than being a value, is a logical statement based on the iterator variable (`i`).
1. Finally we must state how the iterator variable should change in value between iterations. In the case above, we put `i++`. `++` is another shorthand (like `+=`), which means increment the iterator by +1 for each new iteration.

## If statements

If statements again look pretty similar in JavaScript when compared with python. We start the statement with the `if` keyword. What follows is the condition (or set of conditions) that are checked to determine if they are true or not. The condition(s) _must_ be enclosed in parentheses `()` to be recognised. 

Following the condition(s), a pair of curly braces `{}` indicates the operations to execute should the condition(s) evalute to true. This is similar to the loop body as above (also indicated with `{}`).

We can add as many `else if` blocks as we like, to check further conditions, just like the `elif` blocks in python. Finally, we can add an `else` block, that will be executed if none of the `if` or `else if` blocks are executed.

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

We can define functions in JavaScript just like we can in python.

By now, the syntax will probably not surprise you: just like `loops` & `if` statements the function `body` is indicated by a pair of curly braces `{}`.

The function `body` is preceded by the keyword '`function`'. The function name comes next, followed by the arguments of the function, which are contained within parentheses. And just like in python, we indicate the value to send back to the function call site with the `return` keyword:

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

Finally we can show that JavaScript supports `objects` and `classes` as well. JavaScript objects and the _JavaScript Object Notation_ (JSON) can seem pretty similar and interchangeable. It's not _quite_ that simple, but we won't discuss it here - instead we tackle it in lesson 9.

Class definitions look pretty similar in JavaScript, with some important differences:

1. We use the `constructor` keyword instead of `__init__` to define the function that is run when we _initialize_ the class
1. We use the `this` keyword instead of `self` to refer to the instance of the class inside the class itself
1. We do not use `def` to define functions (and we also don't need the `function` keyword like we did above)

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
```

Using classes is _mostly_ the same:
1. We can declare a variable to be of the type of our class. If we want to set the value by calling the `constructor`, we must use the `new` keyword (which is not needed in python).
1. Using the value of class properties is similarly done by typing `className` __dot__ `propertyName`, e.g. `totalForce.Fx`.
1. Defining an array of classes, and using them within a loop, works very much the same.

```javascript
var f = new Force(-0.3, 0.8, 5.6);

var fs = [new Force(-0.3, 0.8, 5.6), 
          new Force(0.1, -0.3, 4.3), 
          new Force(0.5, 0.7, 3.6), 
          new Force(-0.3, 0.6, 2.8), 
          new Force(0.0, -0.1, 4.1)];

var totalForce = new Force(0.0, 0.0, 0.0);
for (var i = 0; i < fs.length; i++) {
  totalForce.X += fs[i].X;
  totalForce.Y += fs[i].Y;
  totalForce.Z += fs[i].Z;
}
```

## Extra content - array "prototype" methods & arrow functions

One extra cool feature of JavaScript that I find myself using a lot is _lambda functions_, especially those on arrays (referred to as array prototypes). 

Carrying on from the objects example above, we can rewrite that last loop using `forEach`. This is a special method which runs a loop, and at each 'iteration' executes a function that we define within the parentheses of the `forEach` statement.

In the following example, we define the function using the `arrow function` notation:

```javascript
var totalForce = new Force(0.0, 0.0, 0.0,);
fs.forEach(f => {
  totalForce.X += f.X;
  totalForce.Y += f.Y;
  totalForce.Z += f.Z;
})

console.log('totalForce = ' + totalForce.toString());
```

The arrow function is defined by `iterator => {body}`. It's a nice shorthand for defining a short function to run at each iteration of the `forEach` loop.

Don't worry if this is a little confusing - this is a more advanced programming topic - but it shows the power built into modern programming languages such as JavaScript.

Similar awesome features exist in python too!