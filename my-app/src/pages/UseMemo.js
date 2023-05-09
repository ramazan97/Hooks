import React, { useState, useMemo } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [list, setList] = useState([
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig'
  ]);

  const filteredList = useMemo(() => {
    return list.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [list, searchTerm]);

  return (
    <div className='container'>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search..." />
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
