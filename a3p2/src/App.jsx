// src/App.jsx

import FocusInput1 from "./components/FocusInput1";
import FocusInput2 from "./components/FocusInput2";
import ChangeColor1 from "./components/ChangeColor1";
import ChangeColor2 from "./components/ChangeColor2";
import "./index.css";

function App() {
  return (
    <div>
      <h1>Focus Input and Change Color Examples</h1>
      <FocusInput1 />
      <FocusInput2 />
      <ChangeColor1 />
      <ChangeColor2 />
    </div>
  );
}

export default App;
