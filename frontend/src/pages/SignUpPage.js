import React from 'react';

function SignUpPage() {
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required />
        <br />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />
        <br />
        <label>Password:</label>
        <input type="password" placeholder="Create a password" required />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
