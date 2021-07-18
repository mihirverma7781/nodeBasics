// Events module
// you can create fire or listen your events



const EventEmitter = require('events');


// creating an object of event class
const event = new EventEmitter();


// Defining an event
// sayMyName is an emit named event


// we can also call multiple actions callbacks with single named event

event.on('checkPage',(sc,msg)=>{
    console.log(`the status code is ${sc} and page is ${msg}`)
})


// event.on('sayMyName',()=>{
//     console.log("Sunil")
// })


// Firing an event
// we can also pass the other params also
event.emit("checkPage",200,"ok");