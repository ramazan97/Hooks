import React, { useState } from "react";

const ExampleComponent = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    phone: ""
  });

  const [userList, setUserList] = useState([]);

  const updateUserData = (name, value) => {
    setUser({
      ...user,
      [name]: value
    });
  };

  const addUserToList = () => {
    setUserList([...userList, user]);
    setUser({
      name: "",
      age: "",
      email: "",
      phone: ""
    });
  };

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => updateUserData("name", e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={user.age}
          onChange={(e) => updateUserData("age", e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => updateUserData("email", e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={user.phone}
          onChange={(e) => updateUserData("phone", e.target.value)}
        />
      </form>
      <button onClick={addUserToList}>Add User</button>
      <ul>
        {userList.map((user, index) => (
          <li key={index}>
            {user.name}, {user.age}, {user.email}, {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
