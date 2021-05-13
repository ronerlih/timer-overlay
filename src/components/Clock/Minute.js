import React from "react";

function Minute (props) {
  return (
    <div id="minute" className="minute" style={{transform:`rotate(${props.deg}deg)`}} ></div>
  )
}
export default Minute