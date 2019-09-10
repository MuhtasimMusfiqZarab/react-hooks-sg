import React, { useState } from "react";

const App = () => {
  //useState(array destructuring) // similar to  [someKey(state.someKey), setState({}) funct]= useState(initialValue state)
  //[currentData, function to set data]= userState("initial value")
  // useState("singleValue")
  const [resource, setResource] = useState("posts");

  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      {resource}
    </div>
  );
};

export default App;
