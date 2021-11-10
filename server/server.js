const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const dbConfig = require("../config/db.config");
const bodyParser = require('body-parser');
const path = require('path');

const db = require('../models');
const Role = db.role;



const app = express();

//Setting the cors
var corsOptions = {
    origin: "http://localhost:4200"
  };
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
        console.log('Database connected')
    },
    error => {
        console.log('Database could not be connected : ' + error)
    }
)
// Routes
require("../routes/auth.routes")(app);
require("../routes/user.routes")(app);
require("../routes/pto.route")(app);
require("../routes/service.route")(app);
require("../routes/cause.route")(app);
require("../routes/solution.route")(app);



const port = process.env.PORT || 8080
app.listen(port, () => {
 console.log('Server running on port:', port);
});

// Find 404 and hand over to error handler
app.use((req, res, next) => {
    next(createError(404));
});


// Index Route
app.get('/', (req, res) => {
    res.send('invaild endpoint');
});

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
    
});

function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }

  initial();