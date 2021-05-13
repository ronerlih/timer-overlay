import React from "react";

function Hour (props) {
  return (
    <div id="hour" className="hour" style={{transform:`rotate(${props.deg}deg)`}} ></div>
  )
}
export default Hour