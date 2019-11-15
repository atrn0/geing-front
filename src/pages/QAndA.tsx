import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { getQA, GetQARes } from '../client/geing/getQA'
import styles from './QAndA.module.scss'
import dayjs from 'dayjs'
import me from '../me.jpg'
import Helmet from 'react-helmet'
import { getOgpImage } from '../utils/cloudinary'

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

  const getQImageUrl = () => {
    return getOgpImage(qa.question)
  }

  if (qa.question) {
    return (
      <div className={styles.qanda}>
        <Helmet>
          <title>{qa.question}</title>
          <meta property="og:image" content={getQImageUrl()} />
        </Helmet>
        <div className={styles.date}>
          <span>{dayjs(qa.created_at).format('MM/DD')}</span>
        </div>
        <img alt={qa.question} src={getQImageUrl()} />
        <div className={styles.profile}>
          <img src={me} alt="me" />
          <span>あたらん</span>
        </div>
        <div className={styles.answer}>{qa.answer}</div>
        <Link className={styles.goBackButton} to={'/'}>
          <button>他の回答をみる</button>
        </Link>
      </div>
    )
  }
  return <></>
}

export default QAndA
