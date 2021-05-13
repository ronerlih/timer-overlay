import React from "react";
import "./style.css"

function Button (props){
  let disable = props.disable ? "disable" : "";
  return(
    <div className="btn bg-dark" style={props.style}disabled={disable} onClick={props.onClick}>
      {props.children}
      
    </div>
  )
}
export default Button;