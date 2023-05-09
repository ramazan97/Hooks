import { useState, useEffect } from "react";

function useForm(initialState, storageKey) {
  const [formValues, setFormValues] = useState(initialState);

  useEffect(() => {
    const storedValues = localStorage.getItem(storageKey);
    if (storedValues) {
      setFormValues(JSON.parse(storedValues));
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(formValues));
  }, [formValues, storageKey]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues); // istenilen işlem yapılabilir.
  };

  return { formValues, handleChange, handleSubmit };
}

// Kullanım örneği:
function MyComponent() {
  const STORAGE_KEY = "myFormValues";

  const { formValues, handleChange, handleSubmit } = useForm(
    {
      name: "",
      surname: "",
      age: "",
      email: "",
    },
    STORAGE_KEY
  );

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Surname:
        <input
          type="text"
          name="surname"
          value={formValues.surname}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formValues.age}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyComponent;
