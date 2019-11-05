import React from 'react'
import { useParams } from 'react-router-dom'
import QuestionsList from '../components/QuestionsList'

const QAndA = () => {
  const { id } = useParams()
  return (
    <>
      <p>{id}</p>
      <QuestionsList />
    </>
  )
}

export default QAndA
