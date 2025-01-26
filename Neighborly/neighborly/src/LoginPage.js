import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., validate credentials, fetch API, etc.)
    navigate("/DashBoard"); // Redirect to the dashboard after successful login
  };

  const submitLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/DashBoard'); // Redirect to homepage after successful login
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={submitLogin}>Login</button>
        <div className="forgot-password">Forgot Password?</div>
      </div>
    </div>
  );
};

export default LoginPage;
