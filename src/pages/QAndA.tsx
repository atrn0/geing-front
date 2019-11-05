import React from 'react'
import { useParams } from 'react-router-dom'

const QAndA = () => {
  const { id } = useParams()
  return (
    <>
      <p>{id}</p>
    </>
  )
}

export default QAndA
