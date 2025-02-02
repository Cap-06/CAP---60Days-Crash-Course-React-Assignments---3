// src/components/FocusInput1.jsx

import { useRef } from "react";

function FocusInput1() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput1;
