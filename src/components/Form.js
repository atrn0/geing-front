import React, {useState} from "react";

const Form = () => {
  const [q, setQ] = useState('')

  const handleChange = (e) => {
    setQ(e.target.value)
  }

  const handleSubmit = () => {
    console.log(q)
    setQ('')
  }

  return (
    <div>
      <textarea value={q} onChange={handleChange}/>
      <button onClick={handleSubmit}>質問する</button>
    </div>
  )
};

export default Form
