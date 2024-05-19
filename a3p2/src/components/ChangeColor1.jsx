// src/components/ChangeColor1.jsx

import { useRef, useEffect } from "react";

function ChangeColor1() {
  const divRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      divRef.current.style.backgroundColor = "yellow";
    }, 3000);
  }, []);

  return (
    <div>
      <div
        ref={divRef}
        style={{ width: "100px", height: "100px", backgroundColor: "teal" }}
      >
        Color Box
      </div>
    </div>
  );
}

export default ChangeColor1;
