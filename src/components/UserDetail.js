import React from "react";
import { NavLink } from "react-router-dom";

function UserDetails({ users }) {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDetails;
