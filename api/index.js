const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173'
}));

mongoose.connect("")

app.get('/test', (req, res) => {
    res.json('Hello World!');

});

app.post("/register", (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    res.json({firstName, lastName, email, password});
});

app.listen(4000, () => {
    
    console.log('Server is running on port 4000');
} );
