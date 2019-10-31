import React, {useState} from 'react';
import Form from "../components/Form";

function Index() {
  const [q, setQ] = useState('')

  const handleChange = (e) => {
    setQ(e.target.value)
  }

  const handleSubmit = () => {
    console.log(q)
    setQ('')
  }

  return (
    <div className="Index">
      {/*<Header/>*/}
      <Form q={q} onHandleChange={handleChange} onHandleSubmit={handleSubmit}/>
    </div>
  );
}

export default Index;
