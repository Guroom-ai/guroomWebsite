const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require("express-session");
const bodyParser = require('body-parser');
const User = require('./user');

const app = express();

mongoose.connect("mongodb+srv://Guroom:Guroom.ai-20001122@cluster0.uc1pz.mongodb.net/test?retryWrites=true&w=majority",
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    },
    () => {
        console.log("Mongoose Is Connected");
    }
);

// Middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:3000", // <-- location of the react app we are connecting to 
    credentials: true // important to put this! 
}));

app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}));

app.use(cookieParser("secretcode"));

// Routes
app.post("/login", (req,res) => {
    console.log(req.body);
});

// if error, error. If there is a document, username inputed already exists so tell user exists. If document does not exist, create new user 
app.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
        const newUser = new User({
          username: req.body.username,
          password: hashedPassword,
        });
        await newUser.save();
        res.send("User Created");
      }
    });
  });
app.post("/user", (req,res) => {});

// Starting Server
app.listen(4000, () => {
    console.log('Server Has Started')
})
