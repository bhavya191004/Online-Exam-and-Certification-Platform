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




// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require('bcryptjs');
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


//   app.get("/api/questions", async (req, res) => {
//     try {
//       const questions = await Question.aggregate([{ $sample: { size: 5 } }]); // Fetch 5 random questions
//       res.json(questions);
//     } catch (error) {
//       res.status(500).json({ error: "Error fetching questions" });
//     }
//   });
  



// // Route to register employee
// app.post("/register", (req, res) => {
//   const { name, email, password } = req.body;

//   // Simple validation
//   if (!name || !email || !password) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   // Hash the password before storing it
//   bcrypt.hash(password, 10, (err, hashedPassword) => {
//     if (err) {
//       return res.status(500).json({ message: 'Error hashing password', error: err });
//     }

//     // Store user with hashed password
//     EmployeeModel.create({ name, email, password: hashedPassword })
//       .then(employee => res.status(201).json(employee))
//       .catch(err => res.status(500).json({ message: 'Error creating employee', error: err }));
//   });
// });

// // Route to login employee
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   EmployeeModel.findOne({ email })
//     .then(user => {
//       if (user) {
//         // Compare the hashed password with the provided password
//         bcrypt.compare(password, user.password, (err, isMatch) => {
//           if (err) {
//             return res.status(500).json({ message: 'Error comparing password', error: err });
//           }

//           if (isMatch) {
//             res.json("Success");
//           } else {
//             res.json("Incorrect password");
//           }
//         });
//       } else {
//         res.json("No record existed");
//       }
//     })
//     .catch(err => {
//       console.error("Error:", err);
//       res.status(500).json({ message: "Internal server error" });
//     });
// });

// // Start the server
// app.listen(3001, () => {
//   console.log("Server is running on http://localhost:3001");
// });



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const http = require("http");
const socketIo = require("socket.io");

const EmployeeModel = require("./models/Employee");
const Question = require("./models/Question"); // Make sure you have a Question model

const app = express();
const server = http.createServer(app); // Create HTTP server
const io = socketIo(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", methods: ["GET", "POST"], allowedHeaders: ["Content-Type"] }));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/employee")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Failed to connect to MongoDB", err));

// WebSocket Connection
io.on("connection", (socket) => {
  console.log("New client connected");

  let timeLeft = 600; // 10 minutes
  const interval = setInterval(() => {
    timeLeft -= 1;
    socket.emit("timerUpdate", timeLeft);

    if (timeLeft <= 0) {
      clearInterval(interval);
      socket.emit("timeUp");
    }
  }, 1000);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

// Fetch random questions
app.get("/api/questions", async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 5 } }]); // Fetch 5 random questions
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: "Error fetching questions" });
  }
});

// Submit exam & auto-grade
app.post("/api/submit", async (req, res) => {
  const userAnswers = req.body.answers;
  let score = 0;

  try {
    for (const [questionId, selectedOption] of Object.entries(userAnswers)) {
      const question = await Question.findById(questionId);
      if (question.correctAnswer === selectedOption) {
        score += 1;
      }
    }
    res.json({ score });
  } catch (error) {
    res.status(500).json({ error: "Error grading test" });
  }
});

// Register route
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: "Error hashing password", error: err });
    }

    EmployeeModel.create({ name, email, password: hashedPassword })
      .then(employee => res.status(201).json(employee))
      .catch(err => res.status(500).json({ message: "Error creating employee", error: err }));
  });
});

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  EmployeeModel.findOne({ email })
    .then(user => {
      if (!user) {
        return res.json("No record existed");
      }

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          return res.status(500).json({ message: "Error comparing password", error: err });
        }

        return isMatch ? res.json("Success") : res.json("Incorrect password");
      });
    })
    .catch(err => {
      console.error("Error:", err);
      res.status(500).json({ message: "Internal server error" });
    });
});

// Start the server
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
