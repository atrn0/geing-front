import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getQA, GetQARes } from '../client/geing/getQA'
import styles from './QAndA.module.scss'
import dayjs from 'dayjs'

const QAndA = () => {
  const { id } = useParams()
  const history = useHistory()

  const [qa, setQA] = useState({} as GetQARes)

  useEffect(() => {
    const fetchQA = async (id: number) => {
      const res: GetQARes = await getQA({ id: id })
      setQA(res)
    }

    try {
      if (!id) {
        history.push('/')
        return
      }
      fetchQA(parseInt(id, 10))
    } catch (e) {
      console.error(e)
    }
  }, [history, id])

  if (qa.question) {
    return (
      <div className={styles.qanda}>
        <div className={styles.date}>
          <span>{dayjs(qa.created_at).format('MM/DD')}</span>
        </div>
        <img
          alt={qa.question}
          src={`https://res.cloudinary.com/dfrif3y8l/image/upload/w_800/c_fit,q_10,h_300,l_text:omklw31ggvthvlk7b8i3.ttf_40:${encodeURIComponent(
            qa.question
          )},w_700,y_-15/geing-ogp`}
        />
      </div>
    )
  }
  return <></>
}

export default QAndA
