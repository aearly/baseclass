#baseclass

> For when you just wan't Backbone's Class.extend() function.

Backbone.js style inheritance.  The `extend` function has been taken directly from Backbone.  This is really @bermi 's idea.

Very similar to uberclass and class.js -- the main difference is that the proto prop and static props oder in .extend() have been reversed.

##Usage

	var BaseClass = require("baseclass");

    var MyClass = BaseClass.extend({
        someProp: 'My property value',
        someMethod: function () { ... }
    });

##Licence

MIT
