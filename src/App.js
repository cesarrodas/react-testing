import { useState } from "react";
import "./App.css";

import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  let newButtonColor = buttonColor == "red" ? "blue" : "red";

  const clickHandler = () => {
    setButtonColor(newButtonColor);
  };

  return (
    <div>
      <button
        onClick={clickHandler}
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        defaultChecked={disabled}
        id="disable-button-checkbox"
        type="checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
      ></input>
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
