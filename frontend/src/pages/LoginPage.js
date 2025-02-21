import React from 'react';


function LoginPage() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />
        <br />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
