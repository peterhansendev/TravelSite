import React from "react";

function Times(props) {
  return (
    <div className="times">
      <div>Your appointment is set to {props.date.toDateString()}</div>
    </div>
  );
}

export default Times;
