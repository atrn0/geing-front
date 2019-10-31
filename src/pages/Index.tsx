import Form from '../components/Form'
import * as React from 'react'
import { ChangeEvent, FormEvent, useState } from 'react'

function Index() {
  const [q, setQ] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value)
  }

  const handleSubmit = () => {
    console.log(q)
    setQ('')
  }

  return (
    <div className="Index">
      {/*<Header/>*/}
      <Form onHandleChange={handleChange} onHandleSubmit={handleSubmit} />
    </div>
  )
}

export default Index
