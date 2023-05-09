import React from 'react';

const names = ['Ali', 'Ayşe', 'Mehmet', 'Fatma'];


function App() {
const listItems = names.map((name) => <li key={name}>{name}</li>);

  return (
    <div>
      <h1>İsimler:</h1>
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;
