import { useState } from "react";

import "./styles/app.css";

function App() {
  const [values, setValues] = useState();

  function handleChangeValues(value) {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }

  function handleClickButton() {
    console.log(values);
  }

  return (
    <div className="app-container">
      <div className="register-container">
        <h1>Game Shop</h1>
        <div className="area-input">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            className="register-input"
            onChange={handleChangeValues}
          />
          <input
            type="text"
            name="preço"
            placeholder="Preço"
            className="register-input"
            onChange={handleChangeValues}
          />
          <input
            type="text"
            name="categoria"
            placeholder="Categoria"
            className="register-input"
            onChange={handleChangeValues}
          />
          <button onClick={() => handleClickButton()}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
