import React from "react";

const Bio =props=>{
  
  const styleObj = {
    margin: 0,
    fontSize: 50
  }

  return(
    <div className="bio" style={{color: "green"}}>
      <h2 style={styleObj}>My name is: {props.name}</h2>
    </div>
  )
}

export default Bio