import React, { useState, useEffect } from 'react';

function App() {
  const [resourceType, setResourceType] = useState('Posts');
  const [items, setItems] = useState([]);

  console.log('Rendered!');

  /**
   *   useEffect(() => {
    console.log('On Mount');
    // Empty array == onMount
  }, []);

  useEffect(() => {
    console.log('Resource updated');
    // Passing in array of values to watch for change
  }, [resourceType]);
   * 
   */

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default App;
