import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Auth.css';

function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  // Validation regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-Z\s]*$/;
  const mobileRegex = /^[0-9]{10}$/;
  const passwordRegex = {
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    number: /[0-9]/,
    special: /[!@#$%^&*]/
  };

  // Calculate password strength
  const calculatePasswordStrength = (password) => {
    if (!password) return '';
    let strength = 0;
    if (passwordRegex.uppercase.test(password)) strength++;
    if (passwordRegex.lowercase.test(password)) strength++;
    if (passwordRegex.number.test(password)) strength++;
    if (passwordRegex.special.test(password)) strength++;
    if (password.length >= 8) strength++;

    if (strength <= 2) return 'weak';
    if (strength <= 4) return 'medium';
    return 'strong';
  };

  // Field validation functions
  const validateName = (name) => {
    if (!name.trim()) {
      return 'Full name is required';
    } else if (name.trim().length < 2) {
      return 'Name must be at least 2 characters';
    } else if (name.length > 50) {
      return 'Name must not exceed 50 characters';
    } else if (!nameRegex.test(name)) {
      return 'Name can only contain letters and spaces';
    }
    return '';
  };

  const validateMobile = (mobile) => {
    const cleanedMobile = mobile.replace(/\D/g, '');
    if (!mobile) {
      return 'Mobile number is required';
    } else if (!mobileRegex.test(cleanedMobile)) {
      return 'Mobile number must be exactly 10 digits';
    }
    return '';
  };

  const validateEmail = (email) => {
    if (!email) {
      return 'Email is required';
    } else if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    } else if (email.length > 100) {
      return 'Email is too long';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (!password) {
      return 'Password is required';
    } else if (password.length < 6) {
      return 'Password must be at least 6 characters';
    } else if (password.length > 50) {
      return 'Password must not exceed 50 characters';
    } else if (!passwordRegex.uppercase.test(password)) {
      return 'Password must contain at least one uppercase letter';
    } else if (!passwordRegex.lowercase.test(password)) {
      return 'Password must contain at least one lowercase letter';
    } else if (!passwordRegex.number.test(password)) {
      return 'Password must contain at least one number';
    }
    return '';
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword) {
      return 'Please confirm your password';
    } else if (password !== confirmPassword) {
      return 'Passwords do not match';
    }
    return '';
  };

  const validateForm = () => {
    const newErrors = {};
    
    const nameError = validateName(formData.name);
    const mobileError = validateMobile(formData.mobileNumber);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const confirmPasswordError = validateConfirmPassword(formData.password, formData.confirmPassword);
    
    if (nameError) newErrors.name = nameError;
    if (mobileError) newErrors.mobileNumber = mobileError;
    if (emailError) newErrors.email = emailError;
    if (passwordError) newErrors.password = passwordError;
    if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Update password strength indicator
    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }
    
    // Validate on change if field has been touched
    if (touched[name]) {
      let error = '';
      if (name === 'name') {
        error = validateName(value);
      } else if (name === 'mobileNumber') {
        error = validateMobile(value);
      } else if (name === 'email') {
        error = validateEmail(value);
      } else if (name === 'password') {
        error = validatePassword(value);
      } else if (name === 'confirmPassword') {
        error = validateConfirmPassword(formData.password, value);
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
    if (name === 'name') {
      error = validateName(formData[name]);
    } else if (name === 'mobileNumber') {
      error = validateMobile(formData[name]);
    } else if (name === 'email') {
      error = validateEmail(formData[name]);
    } else if (name === 'password') {
      error = validatePassword(formData[name]);
    } else if (name === 'confirmPassword') {
      error = validateConfirmPassword(formData.password, formData[name]);
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
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          mobileNumber: formData.mobileNumber,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors({ submit: data.message || 'Signup failed' });
        setLoading(false);
        return;
      }

      // Store token and user in localStorage and update auth context
      login(data.token, data.user);

      console.log('Signup successful:', data);
      
      // Navigate to dashboard immediately
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ submit: 'An error occurred. Please try again.' });
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card signup-card">
        <div className="auth-header">
          <h1>CareerCraft</h1>
          <p>Join Our Community</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your full name"
              className={`form-input ${errors.name && touched.name ? 'input-error' : ''}`}
              maxLength="50"
            />
            {errors.name && touched.name && (
              <span className="error-message">✕ {errors.name}</span>
            )}
            {!errors.name && formData.name && touched.name && (
              <span className="validation-info valid">✓ Name looks good</span>
            )}
          </div>

          {/* Mobile Number Field */}
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number (10 digits)</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="10-digit mobile number"
              className={`form-input ${errors.mobileNumber && touched.mobileNumber ? 'input-error' : ''}`}
              maxLength="10"
            />
            {errors.mobileNumber && touched.mobileNumber && (
              <span className="error-message">✕ {errors.mobileNumber}</span>
            )}
            {!errors.mobileNumber && formData.mobileNumber && touched.mobileNumber && (
              <span className="validation-info valid">✓ Valid mobile number</span>
            )}
          </div>

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
              <span className="error-message">✕ {errors.email}</span>
            )}
            {!errors.email && formData.email && touched.email && (
              <span className="validation-info valid">✓ Valid email</span>
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
              placeholder="Create a strong password"
              className={`form-input ${errors.password && touched.password ? 'input-error' : ''}`}
              maxLength="50"
            />
            {errors.password && touched.password && (
              <span className="error-message">✕ {errors.password}</span>
            )}
            
            {/* Password Strength Indicator */}
            {formData.password && (
              <div className="password-strength">
                <div className="strength-bar">
                  <div className={`strength-fill ${passwordStrength}`}></div>
                </div>
                <span className={`strength-text ${passwordStrength}`}>
                  Strength: {passwordStrength.charAt(0).toUpperCase() + passwordStrength.slice(1)}
                </span>
              </div>
            )}

            {/* Password requirements checklist */}
            {touched.password && formData.password && (
              <div className="validation-info" style={{ marginTop: '8px' }}>
                <div style={{ fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ color: passwordRegex.uppercase.test(formData.password) ? '#27ae60' : '#999' }}>
                    {passwordRegex.uppercase.test(formData.password) ? '✓' : '○'} Uppercase letter
                  </span>
                  <span style={{ color: passwordRegex.lowercase.test(formData.password) ? '#27ae60' : '#999' }}>
                    {passwordRegex.lowercase.test(formData.password) ? '✓' : '○'} Lowercase letter
                  </span>
                  <span style={{ color: passwordRegex.number.test(formData.password) ? '#27ae60' : '#999' }}>
                    {passwordRegex.number.test(formData.password) ? '✓' : '○'} Number
                  </span>
                  <span style={{ color: formData.password.length >= 6 ? '#27ae60' : '#999' }}>
                    {formData.password.length >= 6 ? '✓' : '○'} At least 6 characters
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Confirm your password"
              className={`form-input ${errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''}`}
              maxLength="50"
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <span className="error-message">✕ {errors.confirmPassword}</span>
            )}
            {!errors.confirmPassword && formData.confirmPassword && touched.confirmPassword && 
             formData.password === formData.confirmPassword && (
              <span className="validation-info valid">✓ Passwords match</span>
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
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        {/* Link to Login */}
        <div className="auth-footer">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
