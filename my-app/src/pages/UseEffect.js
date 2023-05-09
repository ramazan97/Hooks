import React, { useEffect, useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, [count2]);

  // useEffect(()=>{

  // })
  // class componentlerdeki componnetDidMount gibi çalışır
  // sayfa sadece ilk çalıştırıldığında aktif onblur
  // sayfa her celıştığında malışmaz
  // componnetDidMount sadece ilk apdate olduğunda calışır demek

  // ancak sen bunu componnetDidUpdate olarak kullanmak isitiyorsan
  // useEffect(()=>{

  // },[])
  // bu şekilde kullanman lazım
  // componnetDidUpdateher updata olduğnda açalışır

  // componentWillUnMount temeizleme işlemelerim yapmak için kullanılıyor
  // kullanımı aşşağıda daır

  // useEffect(() => {
  //   const myTimer = setInterval(() => {
  //     setTimer((timer) => timer + 1);
  //   }, 1000);

  //   return () => clearInterval(myTimer);
  // }, []);

  // useEffect(()=>{
  //   console.log("timer ", timer)
  // })


  const Arttır = () => {
    setCount(count + 1);
  };

  return (
    <div className="container bg-warning ">
      <p>You clicked {count} times</p>
      <p>You clicked {count2} times</p>
      <button onClick={() => Arttır()} className="btn btn-danger m-1">
        Arttır
      </button>
      <button
        onClick={() => setCount2(count2 + 1)}
        className="btn btn-danger m-1"
      >
        Useeffect ile arttır
      </button>
    </div>
  );
}

export default UseState;
