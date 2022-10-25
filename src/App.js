import { useState } from 'react';
import './App.css';

function App() {

  const [ buttonColor, setButtonColor ] = useState("red");
  const [ disabled, setDisabled ] = useState(false);

  const newButtonColor = buttonColor  == "red" ? "blue" : "red";

  const clickHandler = () => {
    setButtonColor(newButtonColor)
  }

  return (
    <div>
      <button 
        onClick={clickHandler} 
        style={{backgroundColor: buttonColor}}
        disabled={disabled}>
      Change to { newButtonColor }
      </button>
      <input 
        defaultChecked={disabled}
        id="disable-button-checkbox"
        type="checkbox"
        onChange={(e) => setDisabled(e.target.checked)} 
      >
      </input>
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
