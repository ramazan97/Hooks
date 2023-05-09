import React, { useState } from 'react';

function UseState() {
  const [count, setCount] = useState(0);

const Arttır=()=>{
    setCount(count + 1)
}
const Azalt=()=>{
    setCount(count -1)
}

  return (
    <div className='container bg-warning '>
      <p>You clicked {count} times</p>
      <button onClick={() => Arttır()}
      className="btn btn-danger m-1">

        Arttır
      </button>
      <button onClick={() => Azalt()}
      className="btn btn-danger m-1">

        Azalt
      </button>
    </div>
  );
}

export default UseState;
