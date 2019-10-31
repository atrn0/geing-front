import React from 'react'

interface Question {
  id: number
  body: string
  created_at: string
}

const QuestionsList = () => {
  let questions: Question[] = [
    {
      id: 0,
      body: 'this is a question1',
      created_at: 'datestring'
    },
    {
      id: 1,
      body: 'this is a question2',
      created_at: 'datestring'
    }
  ]

  return (
    <ul>
      {questions.map(q => {
        return <li>{q.body}</li>
      })}
    </ul>
  )
}

export default QuestionsList
