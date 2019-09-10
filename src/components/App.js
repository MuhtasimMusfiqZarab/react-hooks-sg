import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  //useState(array destructuring) // similar to  [someKey(state.someKey), setState({}) funct]= useState(initialValue state)
  //[currentData, function to set data]= userState("initial value")
  // useState("singleValue")
  const [resource, setResource] = useState("posts");

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
