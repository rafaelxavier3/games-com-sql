import { useState } from "react";
import axios from "axios";

import "./styles/app.css";

function App() {
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  function handleClickButton() {
    axios
      .post("http://localhost:5001/register", {
        name: values.name,
        price: values.price,
        category: values.category,
      })
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <div className="app-container">
      <div className="register-container">
        <h1>Game Shop</h1>
        <form className="form">
          <input
            type="text"
            className="register-nome"
            name="name"
            placeholder="Nome"
            onChange={handleChangeValues}
          />
          <input
            type="text"
            className="register-preço"
            name="price"
            placeholder="Preço"
            onChange={handleChangeValues}
          />
          <input
            type="text"
            className="register-categoria"
            name="category"
            placeholder="Categoria"
            onChange={handleChangeValues}
          />
          <button onClick={handleClickButton}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
