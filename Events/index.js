const EventEmitter = require('events');

const event = new EventEmitter();



//functionality of event (initialized)
event.on('sayMyName',()=>{
    console.log("the name")
})
event.on('sayMyName',()=>{
    console.log("is")
})
event.on('sayMyName',()=>{
    console.log("mihir verma")
})

event.on('checkpage',(sc,msg)=>{
    console.log(`${sc} ${msg} the page is fine`)
})

// event creation (fire) {you will fire event after the event function is defined+}
event.emit('checkpage',200,"ok");




