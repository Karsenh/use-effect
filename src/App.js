import React, { useState } from 'react';

function App() {
  const [resourceType, setResourceType] = useState('Posts');

  return (
    <>
      <div>
        <button onClick={() => setResourceType('Posts')}>Posts</button>
        <button onClick={() => setResourceType('Users')}>Users</button>
        <button onClick={() => setResourceType('Comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default App;
