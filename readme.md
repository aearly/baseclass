#baseclass

> For when you just wan't Backbone's Class.extend() function.

[![Build Status](https://travis-ci.org/aearly/baseclass.png)](https://travis-ci.org/aearly/baseclass)

Backbone.js style inheritance.  The `extend` function has been taken directly from Backbone.  This is really [@bermi](https://github.com/bermi) 's idea.

Very similar to [uberclass](https://github.com/daffl/uberclass) and [class.js](http://ejohn.org/blog/simple-javascript-inheritance/) -- the main difference is that the prototype props and static props order has been reversed.

##Usage

```javascript
var BaseClass = require("baseclass");

var MyClass = BaseClass.extend({
    someProp: 'My property value',
    someMethod: function () { ... }
},{
    optionalStaticProp = "MyClass.optionalStaticProp"
});
```

##Licence

MIT
