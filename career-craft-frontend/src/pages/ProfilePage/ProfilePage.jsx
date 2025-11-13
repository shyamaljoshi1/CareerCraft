import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../services/api';
import Navbar from '../../Components/Navbar/Navbar'; // Corrected path with capital 'C'
import { Edit2, Save, XCircle, Loader } from 'lucide-react';
import './ProfilePage.css'; // We'll create this new CSS file

// This is our fake data. We'll use this until the backend is ready.
const MOCK_QUIZ_HISTORY = [
  { _id: '1', domain: 'Cybersecurity', score: 18, totalPoints: 20, dateTaken: new Date() },
  { _id: '2', domain: 'Data Science', score: 14, totalPoints: 20, dateTaken: new Date(Date.now() - 86400000 * 2) },
];

function ProfilePage() {
  const { user, setUser, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', mobileNumber: '' });
  const [quizHistory, setQuizHistory] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // 1. Load user data into the form when the component mounts
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        mobileNumber: user.mobileNumber,
      });
    }
  }, [user]);

  // 2. Load Quiz History (using mock data for now)
  useEffect(() => {
    const fetchQuizHistory = async () => {
      setLoadingHistory(true);
      
      // --- THIS IS THE REAL CODE TO USE LATER ---
      // try {
      //   const { data } = await api.get('/quiz/history'); // This route doesn't exist yet
      //   setQuizHistory(data.data);
      // } catch (err) {
      //   console.error("Failed to fetch quiz history", err);
      // }
      // ------------------------------------------

      // --- MOCK DATA IMPLEMENTATION ---
      setTimeout(() => { // Simulate a network delay
        setQuizHistory(MOCK_QUIZ_HISTORY);
        setLoadingHistory(false);
      }, 1000);
      // --------------------------------
    };

    fetchQuizHistory();
  }, []);

  // 3. Handle the form submission when updating
  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const { data } = await api.put(`/users/${user._id}`, formData);
      if (setUser) {
        setUser(data.user); // Update the user in the global context
      }
      setMessage('Profile updated successfully!');
      setIsEditing(false); // Exit edit mode
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update profile');
    }
  };

  // 4. Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 5. Reset form if "Cancel" is clicked
  const handleCancelEdit = () => {
    setIsEditing(false);
    if (user) {
      setFormData({ // Reset changes
        name: user.name,
        email: user.email,
        mobileNumber: user.mobileNumber,
      });
    }
  };

  if (!user) {
    return <div>Loading...</div>; // Or a full-page spinner
  }

  return (
    <>
      <Navbar />
      <div className="profile-page-container">
        <h1 className="profile-page-title">My Profile & History</h1>
        
        {message && <div className="profile-message success">{message}</div>}
        {error && <div className="profile-message error">{error}</div>}

        <div className="profile-content-grid">
          
          {/* --- CARD 1: USER DETAILS --- */}
          <form className="profile-card" onSubmit={handleUpdate}>
            <div className="profile-card-header">
              <h2>My Details</h2>
              {!isEditing ? (
                <button type="button" className="edit-button" onClick={() => setIsEditing(true)}>
                  <Edit2 size={16} /> Edit
                </button>
              ) : (
                <div className="edit-controls">
                  <button type="button" className="cancel-button" onClick={handleCancelEdit}>
                    <XCircle size={16} /> Cancel
                  </button>
                  <button type="submit" className="save-button">
                    <Save size={16} /> Save
                  </button>
                </div>
              )}
            </div>

            <div className="profile-card-body">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                ) : (
                  <p className="profile-data-text">{user.name}</p>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                {isEditing ? (
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                ) : (
                  <p className="profile-data-text">{user.email}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="mobileNumber">Mobile Number</label>
                {isEditing ? (
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    className="form-input"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                  />
                ) : (
                  <p className="profile-data-text">{user.mobileNumber}</p>
                )}
              </div>
            </div>
          </form>

          {/* --- CARD 2: QUIZ HISTORY --- */}
          <div className="profile-card">
            <div className="profile-card-header">
              <h2>My Quiz History</h2>
            </div>
            <div className="profile-card-body">
              {loadingHistory ? (
                <div className="loading-history">
                  <Loader size={24} className="spinner" />
                  <p>Loading history...</p>
                </div>
              ) : quizHistory.length > 0 ? (
                <div className="quiz-history-list">
                  {quizHistory.map((result) => (
                    <QuizHistoryCard key={result._id} result={result} />
                  ))}
                </div>
              ) : (
                <p>You haven't taken any quizzes yet!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// --- A New Component for the Quiz History Card ---
function QuizHistoryCard({ result }) {
  const percentage = Math.round((result.score / result.totalPoints) * 100);
  const date = new Date(result.dateTaken).toLocaleDateString();

  return (
    <div className="quiz-card">
      <div className="quiz-card-info">
        <span className="quiz-card-domain">{result.domain}</span>
        <span className="quiz-card-date">{date}</span>
      </div>
      <div className="quiz-card-score">
        <span className="score-text">Score: {percentage}%</span>
        <div className="score-bar">
          <div className="score-bar-fill" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;