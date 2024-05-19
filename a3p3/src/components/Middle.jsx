import React from "react";
import LeftSidebar from "./LeftSidebar.jsx";
import RightSection from "./RightSection.jsx";

export default function Middle() {
  return (
    <div className="middle">
      <LeftSidebar />
      <RightSection />
    </div>
  );
}
