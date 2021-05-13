import React from "react";

function Second (props) {
  return (
    <div id="second" className="second" style={{transform:`rotate(${props.deg}deg)`}} ></div>
  )
}
export default Second