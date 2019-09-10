import React from "react";
import useResources from "./useResources";

const UserList = () => {
  const users = useResources("users"); //passing endpoint we need to fetch
  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
