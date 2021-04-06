const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');




// Initializing the application
const app = express();

// Bringing in the Middlewares
// Form-Data Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

// Json Body Middleware
app.use(bodyParser.json());


app.use(cors());

// the static directory
app.use(express.static(path.join(__dirname, 'public')));

// The middleware that will help in authentication and all
app.use(passport.initialize());

require('./config/passport')(passport);




// path to the file that has the DB connection
const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});

// app.get('/', (req, res) => {
//     return res.send("<h1>Hello World</h1>");
// });
// Bring in the Users route
const users = require('./routes/api/users');
app.use('/api/users', users);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
    console.log(`N13 has been launched on  ${PORT}`);
}) 