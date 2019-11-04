import * as React from 'react'
import { ChangeEvent } from 'react'
import styles from './Form.module.scss'

type FormProps = {
  q: string
  onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void
  onHandleSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
}

const Form = (props: FormProps) => {
  const handleChange = (e: any) => {
    props.onHandleChange(e)
  }

  return (
    <div className={styles.form}>
      <textarea value={props.q} onChange={handleChange} />
      <div>
        <button onClick={props.onHandleSubmit}>質問する</button>
      </div>
    </div>
  )
}

export default Form
