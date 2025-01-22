import React, { useState, useEffect } from "react";
import "./../styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from "./UserDetails";
import Users from "./Users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the list of users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <Router>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <Routes>
            <Route path="/" element={<UserDetails users={users} />} />
            <Route path="/users/:id" element={<Users />} />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;
