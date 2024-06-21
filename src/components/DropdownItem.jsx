import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const DropdownItem = ({ text, backgroundColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div style={{ borderBottom: "1px solid #FF790C" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          backgroundColor: isOpen ? "#FF790C" : backgroundColor,
          color: isOpen ? "white" : "white",
          cursor: "pointer",
        }}
        onClick={toggleDropdown}
      >
        <span>{text}</span>
        {isOpen ? <FaCaretUp color="white" /> : <FaCaretDown color="#FF790C" />}
      </div>
      {isOpen && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#161518",
            color: "white",
          }}
        >
          Detailed information about "{text}".
        </div>
      )}
    </div>
  );
};

export default DropdownItem;
