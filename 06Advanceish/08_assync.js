const uno =()=>{
    console.log("1");
}
const dos =()=>{
    setTimeout(()=>{                //it waits for 3000ms and see that is any body else left if yes then it execute the left one first and then run this
        console.log("ommfooo");
    },3000);
    console.log("2");
}
const tres =()=>{ 
    console.log("3");
}

uno();
dos();
tres();
 
//The event loop got its name because of how it's usually implemented, which usually resembles:

// while (queue.waitForMessage()) {
//     queue.processNextMessage()
//   }
//   Copy to Clipboard
//   queue.waitForMessage() waits synchronously for a message to arrive (if one is not already available and waiting to be handled).