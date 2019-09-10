import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = props => {
  //initialize some state here
  const [resources, setResources] = useState([]); //initialized as empty array

  //function to be called inside from useEffect
  const fetchResource = async resource => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    // console.log(result.data);
    setResources(result.data); // axios provides result inside of data
  };

  //use effect will be called with a function which will run each time (componentDidMount() & componentDidUpdate())
  // this will run everytime the component is rendered or updated
  //2nd argument checks if prop is changed & only then the function runs
  // if no 2nd ar is passed then it useEffect will always going to be called every single time the component re-renders (NOT RECOMMENDED)
  // if enpty array is passed then it will be called only one time (like componentDidMount
  //value inside array (like componentDidUpdate)

  useEffect(() => {
    //we must call this second function (or nothing)
    fetchResource(props.resource);
  }, [props.resource]);

  return (
    <div>
      <div>
        {resources.map(record => (
          <li>{record.title}</li>
        ))}
      </div>
    </div>
  );
};

export default ResourceList;
