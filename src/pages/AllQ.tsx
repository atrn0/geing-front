import React, { useEffect, useState } from 'react'
import { getQuestions, GetQuestionsRes } from '../client/geing/getQuestions'

const AllQ: React.FC = () => {
  const [ids, setIds] = useState([] as number[])

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res: GetQuestionsRes = await getQuestions({ limit: 10000000 })
        setIds(res.questions.map(q => q.id))
      } catch (e) {
        console.error(e)
      }
    }
    fetchQuestions()
  }, [])

  return (
    <>
      {ids.map(id => {
        return (
          <a href={`/${id}`} key={id}>
            {id}
          </a>
        )
      })}
    </>
  )
}

export default AllQ
