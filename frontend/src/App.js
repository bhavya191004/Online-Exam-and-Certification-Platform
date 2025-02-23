import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import ExaminerDashboard from "./pages/ExaminerDashboard";


function App() {
  return (
 
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/examiner-dashboard" element={<ExaminerDashboard />} />
    </Routes>

  );
}

export default App;
