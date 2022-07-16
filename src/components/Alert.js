import React from "react";

export default function Alert(props) {
  const capitalise=(word)=>{
    return word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()
  }
  return (
   props.alert &&  <div>
      <div className={`alert alert-${props.alert.type} fade show`} role="alert">
        <strong>{capitalise(props.alert.type)}: </strong>{props.alert.msg}
      </div>
    </div>
  );
}
