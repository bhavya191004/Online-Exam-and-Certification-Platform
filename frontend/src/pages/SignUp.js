// import { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const navigate= useNavigate()

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     axios.post('http://localhost:3001/register',formData)
//     .then(result => {console.log(result)
//       navigate('/login')

//     })
//     .catch(err=> console.log(err))
    
//     // You can add form submission logic here, like API calls
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h2>Register</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name">
//               <strong>Name</strong>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Name"
//               autoComplete="off"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="form-control rounded-0"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Email</strong>
//             </label>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               autoComplete="off"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="form-control rounded-0"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password">
//               <strong>Password</strong>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               autoComplete="off"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="form-control rounded-0"
//             />
//           </div>
//           <div className="d-flex justify-content-between">
//             <button type="submit" className="btn btn-primary">Sign Up</button>
//             <Link to="/login" type="button" className="btn btn-link">Login</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/register', formData)
      .then(result => {
        console.log(result);
        // Show a simple alert message upon successful account creation
        alert("Account created successfully! Please log in.");
        navigate('/login');
      })
      .catch(err => {
        console.log(err);
        // Show an error alert if the registration fails
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control rounded-0"
            />
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">Sign Up</button>
            <Link to="/login" type="button" className="btn btn-link">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
