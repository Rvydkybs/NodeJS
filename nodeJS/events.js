//creating a module to emit and listen to events
//Using emitter.emit allows us to trigger custom events that can be handled elsewhere in the code, such as within the ask function, providing better separation of concerns and more modular code.
const events=require("events");
let emitter=new events.EventEmitter();
emitter.on("customEvent",(message,user)=>{//if customevent is emitted, this function will be called
    console.log(`${user}: ${message}`);
});
emitter.emit("customEvent","Hello World","Computer");
emitter.emit("customEvent","That's pretty cool huh?","Alex");
emitter.on("customEvent",(message,user)=>{//if customevent is emitted, this function will be called
    console.log(`${user}: ${message}`);
});
emitter.emit("customEvent","Hello World","Computer");//we are calling the customEvent function-so emitter.on will be triggered
emitter.emit("customEvent","That's pretty cool huh?","Alex");
//