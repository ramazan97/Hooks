import React, { useState, useEffect } from "react";

const App = () => {
  // Spread operatörü kullanarak iki diziyi birleştirelim
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combinedArr = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

  // Promise kullanarak veri çekme işlemi yapalım
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/userdata");
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Spread Operatörü ve Promise Örneği</h1>
      <p>
        Spread operatörü ile birleştirilmiş dizi: <code>{combinedArr.join(", ")}</code>
      </p>
      {userData ? (
        <div>
          <h2>Kullanıcı Bilgileri:</h2>
          <p>Ad: {userData.name}</p>
          <p>Yaş: {userData.age}</p>
        </div>
      ) : (
        <p>Veri yükleniyor...</p>
      )}
      {/* Verileri ekrana yazdırmak için yeni JSX yapıları */}
      <h2>Burada verileri görüntüleyebilirsiniz:</h2>
      <ul>
        <li>
          Birleştirilmiş dizi: {combinedArr.join(", ")}
        </li>
        {userData && (
          <li>
            Kullanıcı Adı: {userData.name}, Yaş: {userData.age}
          </li>
        )}
      </ul>
    </div>
  );
};

export default App;
