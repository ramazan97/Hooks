import React from 'react';

const users = [
  { name: 'Ali', age: 20 },
  { name: 'Ayşe', age: 25 },
  { name: 'Mehmet', age: 30 },
  { name: 'Fatma', age: 35 },
];

const filteredUsers = users.filter((user) => user.age >= 30);

function App() {
  return (
    <div>
      <h1>30 yaşından büyük kullanıcılar:</h1>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
