import React from "react";

function Millisecond (props) {
  return (
    <div id="millisecond" className="millisecond" style={{transform:`rotate(${props.deg}deg)`}} ></div>
  )
}
export default Millisecond