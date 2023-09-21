// import { Main } from "./containers/Main"; //if needed input the "<Main />" jsx element on line 7
import React, { useState } from "react";
// import { Login } from "./containers/Login";
// import { Register } from "./containers/Register";
import { Chart } from "./components/Chart";
import './App.css';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      <Chart />
    {/* {
      currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    } */}
    </div>
  );
}

export default App;
