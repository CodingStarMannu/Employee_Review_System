const express = require('express'); // requiring express, 
const port = 8000; // assigning port, so that I can try and test as this post,
const app = express(); 

// requiring express-ejs-layout, it will help in rendering the page.
const expressLayout = require('express-ejs-layouts');

// requiring DataBase
const db = require('./config/mongoose');

const bodyParser = require('body-parser');

// Creating session
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local');

// requiring mongo-store, so that we can use the existing user even after server start
const MongoStore = require('connect-mongo');

// they are used for showing action notifications
const flash = require('connect-flash'); 
const flashMiddleWare = require('./config/flashMiddleware');

// For getting the output from req.body(it will parse the upcoming request to String or Arrays).
app.use(bodyParser.urlencoded({extended:false}));
// For using the file in assets folder.
app.use(express.static('./assets'));

// Setting up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(expressLayout);

// mongo store is used to store the session cookie in the db 
app.use(session({
    name: "ERS",
    // change secret during before deployment in production 
    secret: "employeeReviewSystem",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://whiteWolff:praduman@cluster0.an8uy3k.mongodb.net/ERS?retryWrites=true&w=majority',
        // mongoUrl:"mongodb+srv://manojpant097:mania1234@cluster0.a9wzm3t.mongodb.net/employee_review_system?retryWrites=true&w=majority",
        autoRemove: 'disabled'
    },
        (err) => {
            console.log(err || 'connect-mongo setup ok');
        }
    )
}))

// Using passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// Using Connect flash
app.use(flash());
app.use(flashMiddleWare.setFlash);

// setting up the router, following MVC structure.
app.use('/' , require('./routes/index'));



app.listen(port,(error)=>{
 if(error){
    console.log("Error in listening port", error);
    return;
 }
 console.log(`App is running on Port: ${port}`);
})
