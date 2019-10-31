import React, {useState} from "react";

const Form = (props) => {

  const handleChange = (e) => {
    props.onHandleChange(e)
  }

  return (
    <div>
      <textarea value={props.q} onChange={handleChange}/>
      <button onClick={props.onHandleSubmit}>質問する</button>
    </div>
  )
};

export default Form
