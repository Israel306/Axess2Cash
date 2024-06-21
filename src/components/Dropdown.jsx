import React from "react";
import DropdownItem from "./DropdownItem"; // Adjust the path if necessary

const Dropdown = () => {
  const items = Array(9).fill("How do I sign up for an account?");

  return (
    <div style={{ width: "100%", borderTop: "1px solid #FF790C" }}>
      {items.map((item, index) => (
        <DropdownItem key={index} text={item} />
      ))}
    </div>
  );
};

export default Dropdown;
