import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);
  const navigate = useNavigate();

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const thStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f2f2f2",
    textAlign: "left",
  };

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const getUserData = async () => {
    try {
      const response = await fetch(
        "http://localhost:9000/api/user/get-all-users"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json()
      console.log(data.data)
      setUser(data.data)
    } catch (error) {
      console.log("Internal server error", error);
    }
  };

  const handleEdit = async(id)=>{
    let userData = users.filter((elem)=> elem._id===id)
    console.log(userData)
    navigate("/update",{state: userData})
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Email</th>
          <th style={thStyle}>Age</th>
          <th style={thStyle}>Designation</th>
          <th style={thStyle}>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td style={tdStyle}>{user.name}</td>
            <td style={tdStyle}>{user.email}</td>
            <td style={tdStyle}>{user.age}</td>
            <td style={tdStyle}>{user.designation}</td>
            <td style={tdStyle}><button onClick={()=>handleEdit(user._id)}> Edit</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Home;
