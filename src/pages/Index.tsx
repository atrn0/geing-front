import Form from '../components/Form'
import * as React from 'react'
import { ChangeEvent, useState } from 'react'
import Header from '../components/Header'
import QuestionsList from '../components/QuestionsList'
import { submitQuestion } from "../client/geing/submitQuestions";

function Index() {
  const [q, setQ] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value)
  }

  const handleSubmit = async () => {
    try {
      const res = await submitQuestion({ body: q })
      console.log(res)
      setQ('')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="Index">
      <Header />
      <Form q={q} onHandleChange={handleChange} onHandleSubmit={handleSubmit} />
      <QuestionsList />
    </div>
  )
}

export default Index
