import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = props => {
  //initialize some state here
  const [resources, setResources] = useState([]); //initialized as empty array

  const fetchResource = async resource => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(result.data); // axios provides result inside of data
  };

  //use effect will be called with a function which will run each time (componentDidMount() & componentDidUpdate())
  // this will run everytime the component is rendered or updated

  useEffect(() => {
    fetchResource(props.resource);
  }, [props.resource]); //2nd argument checks if prop is changed & only then the function runs

  return (
    <div>
      <div>{resources.length}</div>
    </div>
  );
};

export default ResourceList;
