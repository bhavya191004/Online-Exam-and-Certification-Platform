// import { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [formData, setFormData] = useState({
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
    
//     axios.post('http://localhost:3001/login',formData)
//     .then(result => {
//       console.log(result)
//       if(result.data ==="Success"){
//         navigate('/home')
//       }
     

//     })
//     .catch(err=> console.log(err))
    
//     // You can add form submission logic here, like API calls
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
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
//             <button type="submit" className="btn btn-primary">Login</button>
//             <Link to="/signup" type="button" className="btn btn-link">Signup</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     axios.post('http://localhost:3001/login', formData)
//       .then(result => {
//         console.log(result);
//         if (result.data === "Success") {
//           alert("Login Successful! Redirecting to home page...");
//           setTimeout(() => {
//             navigate('/home');
//           }, 1500); // Redirect after 1.5 seconds to let user see the success message
//         } else {
//           alert("Invalid email or password. Please try again.");
//         }
//       })
//       .catch(err => {
//         console.log(err);
//         alert("An error occurred while logging in.");
//       });
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
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
//             <button type="submit" className="btn btn-primary">Login</button>
//             <Link to="/signup" type="button" className="btn btn-link">Signup</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
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

    axios.post('http://localhost:3001/login', formData)
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          setModalMessage("Login Successful! Redirecting to home page...");
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false);
            navigate('/home');
          }, 1500); // Close modal and navigate after 1.5 seconds
        } else {
          setModalMessage("Invalid email or password. Please try again.");
          setShowModal(true);
        }
      })
      .catch(err => {
        console.log(err);
        setModalMessage("An error occurred while logging in.");
        setShowModal(true);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-primary">Login</button>
            <Link to="/signup" type="button" className="btn btn-link">Signup</Link>
          </div>
        </form>
      </div>

      {/* Modal for Login Result */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;
