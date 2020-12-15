//give us express
//we're requiring express, node assumes the file is in the modules
//if it's a file we create, we need to use ./
//this gets the ENTIRE express library
//express allows us to quickly build a server
const express = require('express')

//call express function, create a server, save in variable called app
//a server is like an engine, and it needs basic things to functions
const app = express();

//to turn on the server, we need a port
//think of a port like a house address (8080, 9000, 5000 are all common DONT USE 5432)
const PORT = 5000;

//this will serve static files, this will allow us to get things from the server:
//its part of our app (express). The .use functions gives more instructions
//in the function, we're going to tell the app what to use!
//express.static() will create a static file server, and express.static() needs to
//know where the static files are. We put a string in to tell it where the files are:
app.use(express.static('server/public'))

//static files are things like an html file, css file, or js file
//we can also send the user data (messages, saved photos, etc)
//we want the server to SERVE data
//We need to know a few things:
//where do we look for the data, and what do we do when we find it?
const people = ['Gabin', 'Josh', 'Joe'];

//where do we look for the data, and what do we do when we find it?
//When our user is looking at/for DATA, run a given function
//it has two parameters: req and res (order matters)
//req is incoming request
//res is the response from the server
app.get('/data', (req, res) => {
    //this is a GET REQUEST or GET ROUTE
    console.log('you got to /data!');
    //ALL SERVER REQUEST NEED RESPONSE
    //Basically, if they come here, log something to the server
    //AND, send them back something (in this case, the variable people)
    res.send(people)
})
//EVERY TIME YOU CHANGE THE SERVER, RESTART THE SERVER
//when you go to localhost:5000/data it'll log to the terminal
//and the browser will wait for the terminal to respond


//now we START UP THE SERVER
//listen is a function, we have to tell it where to listen and give it a callback function
//the callback function runs when the server starts
//HEY APP, start listening at PORT 5000, and when it is, run this function to let me know you're working
app.listen(PORT, () => {
    //THIS WILL RUN WHEN SERVER STARTS
    console.log('server running on PORT', PORT)
})
//to run the server, we have to run the server.js file with the terminal command:
// node server/server.js
//we type this command because we're still in the parent directory
//WHEN WE TURN THE KEY, we'll be stuck in NODE!
//UNTIL we hit ctrl+c (this stops the server) (ctrl+z would suspend it and keep it running in background)
//if you change things on your server, you have to stop it and start it again

//you can make the server easier to start. we go into the package.json file, and change the
//scripts object. JSON only uses double quotes (very strict). go into the object, and on a new line:
// "start" : "node server/server.js"
//then to start the script, we can just use:
//npm start

//we've told the server to grab the static files. We want to access the files on the server
//in our browser, we type in localhost: 5000 (aka the port)
//the server can still be running at this port even if you aren't aware of it
//if you want to stop ALL THE RIDES: killall node


//if you're running server code, your console.log will show up in the terminal
//if you're running client code, it'll show up in the console in the browser
