const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./models/User");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const app = express();
const jwt = require("jsonwebtoken");
const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);

// Register
app.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const isUserRegistered = User.findOne({ email });
  if (!isUserRegistered) {
    res.status(422).json({ message: "User already registered" });
  }
  else {const userDocument = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDocument);
}
  
  
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDocument = await User.findOne({ email });
  if (userDocument) {
    const isPasswordValid = bcrypt.compareSync(password, userDocument.password);
    if (isPasswordValid) {
      const token = jwt.sign({ // this is the payload
        id: userDocument._id,
        email: userDocument.email,
      }, process.env.JWT_SECRET, {
        // expiresIn: "1d",
      },
      {},

      );
      res.cookie("token", token).json(userDoc)
    } else {
      res.status(422).json({ message: "Invalid credentials" });
    }
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
