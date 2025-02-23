// // const express = require("express");
// // const connectDB = require("./config/db");
// // const cors = require("cors");
// // const bodyParser = require("body-parser");
// // const authRoutes = require("./routes/authRoutes");



// // require("dotenv").config();

// // const app = express();
// // connectDB();

// // app.use(cors());
// // app.use(bodyParser.json());

// // app.use("/api/auth", authRoutes);

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// // 🔹 Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/authDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // 🔹 User Schema
// const UserSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// const User = mongoose.model("User", UserSchema);

// // 🔹 Middleware to verify JWT token
// const verifyToken = (req, res, next) => {
//   const token = req.headers["authorization"];
//   if (!token) return res.status(403).send("Access Denied");

//   jwt.verify(token, "secret", (err, decoded) => {
//     if (err) return res.status(401).send("Invalid Token");
//     req.user = decoded;
//     next();
//   });
// };

// // 🔹 Register API
// app.post("/register", async (req, res) => {
//   const { username, password } = req.body;
//   const existingUser = await User.findOne({ username });

//   if (existingUser) return res.status(400).send("User already exists");

//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = new User({ username, password: hashedPassword });

//   await newUser.save();
//   res.status(201).send("User registered successfully");
// });

// // 🔹 Login API
// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ username });

//   if (!user) return res.status(400).send("User not found");

//   const isValid = await bcrypt.compare(password, user.password);
//   if (!isValid) return res.status(400).send("Invalid credentials");

//   const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });
//   res.json({ token });
// });

// // 🔹 Protected Route Example (Dashboard)
// app.get("/dashboard", verifyToken, (req, res) => {
//   res.send("Welcome to your Dashboard, " + req.user.id);
// });

// // 🔹 Start Server
// app.listen(5000, () => console.log("Server running on port 5000"));
