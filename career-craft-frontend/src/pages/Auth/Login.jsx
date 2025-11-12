import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Auth.css';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = (email) => {
    if (!email) {
      return 'Email is required';
    } else if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (!password) {
      return 'Password is required';
    } else if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }
    return '';
  };

  const validateForm = () => {
    const newErrors = {};
    
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    
    if (emailError) newErrors.email = emailError;
    if (passwordError) newErrors.password = passwordError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Validate on change if field has been touched
    if (touched[name]) {
      let error = '';
      if (name === 'email') {
        error = validateEmail(value);
      } else if (name === 'password') {
        error = validatePassword(value);
      }
      
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Validate on blur
    let error = '';
    if (name === 'email') {
      error = validateEmail(formData[name]);
    } else if (name === 'password') {
      error = validatePassword(formData[name]);
    }
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      // Call backend API
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors({ submit: data.message || 'Login failed' });
        setLoading(false);
        return;
      }

      // Store token and user in localStorage and update auth context
      login(data.token, data.user);

      console.log('Login successful:', data);
      
      // Navigate to dashboard immediately
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ submit: 'An error occurred. Please try again.' });
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>CareerCraft</h1>
          <p>Welcome Back</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
              className={`form-input ${errors.email && touched.email ? 'input-error' : ''}`}
            />
            {errors.email && touched.email && (
              <span className="error-message">
                ✕ {errors.email}
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your password"
              className={`form-input ${errors.password && touched.password ? 'input-error' : ''}`}
            />
            {errors.password && touched.password && (
              <span className="error-message">
                ✕ {errors.password}
              </span>
            )}
          </div>

          {/* Submit Error */}
          {errors.submit && (
            <div className="error-alert">⚠ {errors.submit}</div>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            className="auth-button"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* Link to Signup */}
        <div className="auth-footer">
          <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
