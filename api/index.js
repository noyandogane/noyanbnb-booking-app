const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10000);

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173'
}));

mongoose.connect(process.env.MONGO_URL)

app.get('/test', (req, res) => {
    res.json('Hello World!');

});

app.post("/register", async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    const userDocument = await User.create({
        firstName,
        lastName,
        email,
        password:bcrypt.hashSync(password, bcryptSalt),
    });

    res.json(userDocument);
});


app.listen(4000, () => {
    
    console.log('Server is running on port 4000');
} );
