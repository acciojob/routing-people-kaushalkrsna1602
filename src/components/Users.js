import React from 'react';
import { useParams } from "react-router-dom"; 

function Users({users}) {
  const {id} = useParams();
  const itemId = parseInt(id, 10); // Parse the ID as an integer
  const selectedItem = users.find((user) => user.id === itemId);

  return (
    <div>

      <h1>User Details</h1>

      <p><b>Name:</b>{selectedItem.name}</p>
      <p><b>UserName:</b>{selectedItem.username}</p>
      <p><b>Email:</b>{selectedItem.email}</p>
      <p><b>Phone:</b>{selectedItem.phone}</p>
      <p><b>Website:</b>{selectedItem.website}</p>

        
    </div>
  )
}

export default Users