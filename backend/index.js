//  const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const EmployeeModel = require('./models/Employee');

// const app = express();

// // CORS configuration to allow frontend on port 3000
// const corsOptions = {
//   origin: 'http://localhost:3000',  // Allow only frontend running at this URL
//   methods: ['GET', 'POST'],        // Allow specific HTTP methods
//   allowedHeaders: ['Content-Type'], // Allow required headers
// };

// app.use(express.json());
// app.use(cors(corsOptions));

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/employee")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.log("Failed to connect to MongoDB", err));

// // Route to register employee
// app.post("/login", (req,res) =>{
//     const{email,password} =req.body;
//     EmployeeModel.findOne({email:email})
//     .then(user =>{
//         if(user){
//             if(user.password===password){
//                 res.json("Success")
//             }
//             else{
//                 res.json("Incorrect password")
//             }
//         }else{
//             res.json("No record existed")
//         }
//     }
//     )
// })

// app.post("/register", (req, res) => {
//   const { name, email, password } = req.body;

//   // Simple validation
//   if (!name || !email || !password) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   // Create new employee document
//   EmployeeModel.create(req.body)
//     .then(employee => res.status(201).json(employee))
//     .catch(err => res.status(500).json({ message: 'Error creating employee', error: err }));
// });

// // Start the server
// app.listen(3001, () => {
//   console.log("Server is running on http://localhost:3001");
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require('bcryptjs');
const EmployeeModel = require('./models/Employee');

const app = express();

// CORS configuration to allow frontend on port 3000
const corsOptions = {
  origin: 'http://localhost:3000',  // Allow only frontend running at this URL
  methods: ['GET', 'POST'],        // Allow specific HTTP methods
  allowedHeaders: ['Content-Type'], // Allow required headers
};

app.use(express.json());
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/employee")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Failed to connect to MongoDB", err));

// Route to register employee
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Hash the password before storing it
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: 'Error hashing password', error: err });
    }

    // Store user with hashed password
    EmployeeModel.create({ name, email, password: hashedPassword })
      .then(employee => res.status(201).json(employee))
      .catch(err => res.status(500).json({ message: 'Error creating employee', error: err }));
  });
});

// Route to login employee
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  EmployeeModel.findOne({ email })
    .then(user => {
      if (user) {
        // Compare the hashed password with the provided password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            return res.status(500).json({ message: 'Error comparing password', error: err });
          }

          if (isMatch) {
            res.json("Success");
          } else {
            res.json("Incorrect password");
          }
        });
      } else {
        res.json("No record existed");
      }
    })
    .catch(err => {
      console.error("Error:", err);
      res.status(500).json({ message: "Internal server error" });
    });
});

// Start the server
app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
