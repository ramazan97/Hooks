import React from 'react';

const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((acc, curr) => acc + curr, 0);

function App() {
  return (
    <div>
      <h1>Toplam (1+2+3+4+5): {total}</h1>
    </div>
  );
}

export default App;
