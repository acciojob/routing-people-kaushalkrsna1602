import React, { useState, useEffect } from "react";
import "./../styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from "./UserDetails";
import Users from "./Users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data when the component mounts for the first time
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Do not remove the main div */}
      <Router>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <Routes>
            <Route path="/" element={<UserDetails users={users} />} />
            <Route path="/users/:id" element={<Users users={users} />} />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;
