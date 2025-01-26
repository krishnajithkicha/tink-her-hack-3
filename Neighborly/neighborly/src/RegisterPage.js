import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db, storage } from './firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Update this line
import React from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [bio, setBio] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      // Firebase Auth: Create user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Firebase Storage: Upload profile picture
      if (profilePicture) {
        const storageRef = ref(storage, `profile_pictures/${user.uid}`);
        await uploadBytes(storageRef, profilePicture);
        const downloadURL = await getDownloadURL(storageRef);

        // Firebase Firestore: Store user info
        await setDoc(doc(db, 'users', user.uid), {
          email,
          bio,
          phoneNumber,
          profilePicture: downloadURL,
        });

        alert('Registration successful!');
        navigate('/login'); // Redirect to login page after successful registration
      } else {
        alert('Please upload a profile picture!');
      }
    } catch (error) {
      alert('Registration failed: ' + error.message);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1>REGISTER</h1>
        <form className="register-form" onSubmit={handleRegister}>
          <label>EMAIL</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>PASSWORD</label>
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>CONFIRM PASSWORD</label>
          <input
            type="password"
            placeholder="Re-enter password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <label>BIO</label>
          <textarea
            placeholder="Tell us about yourself"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          ></textarea>
          <label>PHONE NUMBER</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <label>UPLOAD YOUR PICTURE</label>
          <input type="file" onChange={(e) => setProfilePicture(e.target.files[0])} accept="image/*" />
          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
