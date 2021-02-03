# Other languages

## Variables

```javascript
var f1 = 5.6;
var f2 = 4.3;
var f3 = 3.6;
var f4 = 2.8;
var f5 = 4.1;

var totalForce = f1 + f2 + f3 + f4 + f5;
console.log("Force = " + totalForce)
```

## Collections

```javascript
var fs = [5.6, 4.3, 3.6, 2.8, 4.1];
var f1 = fs[0];
fs[-1] = 0.0; // not supported - has no effect
```

## Loops

```javascript
fs = [5.6, 4.3, 3.6, 2.8, 4.1];
var totalForce = 0;
for (var i = 0; i < fs.length; i++) {
  totalForce += fs[i];
}

console.log("Force = " + totalForce)
```

## If statements

```javascript
var totalForce = 100;
var capacity = 90;

if (totalForce > capacity){
  console.log("Force exceeds capacity!")
}
else if (abs(totalForce - capacity) < 1.0E-6){
  console.log("Force equals capacity")
}
else {
  console.log("Force is within capacity")
}
```

## Functions

```javascript
function checkAgainstCapacity(total, capacity){
  if (total > capacity){
    return "exceeds capacity!"  
  }
  else if (abs(total - capacity) < 1.0E-6){
    return "equals capacity"
  }
  else {
    return "is within capacity"
  }
}

console.log("Force " + checkAgainstCapacity(totalForce, capacity))
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
    return this.X + ', ' + this.Y + ', ' + this.Z
  }
}

var f = new Force(-0.3, 0.8, 5.6)

var fs = [new Force(-0.3, 0.8, 5.6), 
          new Force(0.1, -0.3, 4.3), 
          new Force(0.5, 0.7, 3.6), 
          new Force(-0.3, 0.6, 2.8), 
          new Force(0.0, -0.1, 4.1)]

var totalForce = new Force(0.0, 0.0, 0.0,)
for (var i = 0; i < fs.length; i++) {
  totalForce.X += fs[i].X;
  totalForce.Y += fs[i].Y;
  totalForce.Z += fs[i].Z;
}

var totalForce = new Force(0.0, 0.0, 0.0,)
fs.forEach((f) => {
  totalForce.X += f.X;
  totalForce.Y += f.Y;
  totalForce.Z += f.Z;
})

console.log('totalForce = ' + totalForce.toString())
```