let myObject = {
    foo: "bar",
    func: function() {
        let self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }.bind(this)());
    }
};
myObject.func();