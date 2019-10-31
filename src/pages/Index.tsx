import Form from '../components/Form'
import * as React from 'react'
import { useState } from 'react'

function Index() {
  const [q, setQ] = useState('')

  const handleChange = (e: any) => {
    setQ(e.target.value)
  }

  const handleSubmit = () => {
    console.log(q)
    setQ('')
  }

  return (
    <div className="Index">
      {/*<Header/>*/}
      <Form q={q} onHandleChange={handleChange} onHandleSubmit={handleSubmit} />
    </div>
  )
}

export default Index
