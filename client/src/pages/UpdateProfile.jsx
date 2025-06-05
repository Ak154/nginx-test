import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const user = location.state;

  const [formData, setFormData] = useState({
    name: user[0]?.name || "",
    email: user[0]?.email || "",
    age: user[0]?.age || "",
    designation: user[0]?.designation || "",
  });

  const formStyle = {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "15px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:9000/api/user/update-user-by-id",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Reset form correctly
      setFormData({
        name: "",
        email: "",
        age: "",
        designation: "",
      });
      navigate("/");
    } catch (error) {
      console.log("Error in form submission:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={{ textAlign: "center" }}>Update Profile</h2>

      <label style={labelStyle}>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        style={inputStyle}
        placeholder="Enter your name"
        required
      />

      {/* <label style={labelStyle}>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        style={inputStyle}
        placeholder="Enter your email"
        required
      /> */}

      <label style={labelStyle}>Age</label>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        style={inputStyle}
        placeholder="Enter your age"
      />

      <label style={labelStyle}>Designation</label>
      <input
        type="text"
        name="designation"
        value={formData.designation}
        onChange={handleChange}
        style={inputStyle}
        placeholder="Enter your designation"
      />

      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
  );
};

export default UpdateProfile;
