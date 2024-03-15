import React, { useState } from "react";

const DatesMatrix = ({ dates, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={{ marginBottom: "24px" }}>
      {dates.map((date) => (
        <div style={{ display: "flex", marginBottom: "8px" }} key={date}>
          {date.map((day) => (
            <div
              style={{
                width: "48px",
                height: "48px",
                textAlign: "center",
                cursor: "pointer",
                padding: "8px",
              }}
              onClick={() => {
                onSelect(day);
              }}
              key={Math.random()}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {day}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DatesMatrix;
