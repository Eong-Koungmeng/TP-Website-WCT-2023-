// Profile.jsx
import React, { useState } from "react";
import "./Profile.scss";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-01-01",
    contactInformation: "john.doe@example.com",
    phoneNumber: "123-456-7890",
  });

  const handleChange = (field, value) => {
    setProfileData({
      ...profileData,
      [field]: value,
    });
  };

  const handleSaveChanges = () => {
    console.log("Changes saved:", profileData);
  };

  const handleDeleteAccount = () => {
    console.log("Account deleted");
  };

  const handleLogout = () => {
    console.log("Logged out");
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <table>
        <tbody>
          <tr>
            <td>First Name:</td>
            <td colSpan="3">
              <input
                type="text"
                value={profileData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td colSpan="3">
              <input
                type="text"
                value={profileData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Date of Birth:</td>
            <td colSpan="3">
              <input
                type="date"
                value={profileData.dateOfBirth}
                onChange={(e) => handleChange("dateOfBirth", e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td colSpan="3">
              <input
                type="text"
                value={profileData.contactInformation}
                onChange={(e) =>
                  handleChange("contactInformation", e.target.value)
                }
              />
            </td>
          </tr>
          <tr>
            <td>Phone Number:</td>
            <td colSpan="3">
              <input
                type="text"
                value={profileData.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="action-buttons">
        <button onClick={handleDeleteAccount}>Delete Account</button>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleSaveChanges}>Save Changes</button>
      </div>
    </div>
  );
};

export default Profile;
