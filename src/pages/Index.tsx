import Form from '../components/Form'
import * as React from 'react'
import { ChangeEvent, useState } from 'react'
import Header from '../components/Header'
import QuestionsList from '../components/QuestionsList'
import { submitQuestion } from '../client/geing/submitQuestions'
import styles from './Index.module.scss'
import { Snackbar } from '@material/react-snackbar'
import '@material/react-snackbar/dist/snackbar.css'

function Index() {
  const [q, setQ] = useState('')
  const [isSnackBarOpen, setSnackBar] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value.replace(/\n/g, ''))
  }

  const handleSubmit = async () => {
    try {
      const res = await submitQuestion({ body: q })
      console.log(res)
      setQ('')
      setSnackBar(true)
    } catch (e) {
      console.error(e)
    }
  }

  const snackbar = (q: string) => {
    if (isSnackBarOpen) {
      return (
        <Snackbar
          message={'質問を送信しました'}
          timeoutMs={4000}
          onClose={() => setSnackBar(false)}
        />
      )
    }
    return <></>
  }

  return (
    <div className={styles.index}>
      <Header />
      <Form q={q} onHandleChange={handleChange} onHandleSubmit={handleSubmit} />
      <QuestionsList />
      {snackbar(q)}
    </div>
  )
}

export default Index
