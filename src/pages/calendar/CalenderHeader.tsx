import React from "react";

const CalenderHeader = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();
  return (
    <div style={{display : "flex" , justifyContent : "space-between " , marginBottom : "10px"}}>
      <span>{months[today.getMonth()]} , {today.getFullYear()}</span>
      <span>{weeks[today.getDay()]}</span>
    </div>
  );
};

export default CalenderHeader;
