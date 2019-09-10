import React, { useState, useEffect } from "react";
import axios from "axios";

//function which deals with all the hooks related logics
// this funciton takes input and gives output
const useResources = resource => {
  //initialize some state here
  const [resources, setResources] = useState([]); //initialized as empty array

  //use effect will be called with a function which will run each time (componentDidMount() & componentDidUpdate())
  // this will run everytime the component is rendered or updated
  //2nd argument checks if prop is changed & only then the function runs
  // if no 2nd ar is passed then it useEffect will always going to be called every single time the component re-renders (NOT RECOMMENDED)
  // if enpty array is passed then it will be called only one time (like componentDidMount
  //value inside array (like componentDidUpdate)

  useEffect(() => {
    //we must call this second function (or nothing)
    (async resource => {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResources(result.data); // axios provides result inside of data
    })(resource);
  }, [resource]);

  return resources; //return resources saved inside of this function
};

//-----------------------------------------------
const ResourceList = ({ resource }) => {
  const resources = useResources(resource); //getting recources

  return (
    <div>
      <ul>
        {resources.map(record => (
          <li key={record.id}>{record.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
