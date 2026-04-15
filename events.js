//creating a module to emit and listen to events
const events=require("events");
let emitter=new events.EventEmitter();
emitter.on("customEvent",(message,user)=>{
    console.log(`${user}: ${message}`);
});
emitter.emit("customEvent","Hello World","Computer");
emitter.emit("customEvent","That's pretty cool huh?","Alex");
emitter.on("customEvent",(message,user)=>{
    console.log(`${user}: ${message}`);
});
emitter.emit("customEvent","Hello World","Computer");
emitter.emit("customEvent","That's pretty cool huh?","Alex");