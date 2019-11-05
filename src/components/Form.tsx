import * as React from 'react'
import { ChangeEvent } from 'react'
import styles from './Form.module.scss'

type FormProps = {
  q: string
  onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void
  onHandleSubmit: (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
}

const Form = (props: FormProps) => {
  const handleChange = (e: any) => {
    props.onHandleChange(e)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Enter以外または何も入力されていないときは無視
    if (e.keyCode !== 13 || !props.q) return
    props.onHandleSubmit()
  }

  return (
    <div className={styles.form}>
      <textarea value={props.q} onChange={handleChange} onKeyDown={onKeyDown} />
      <div>
        <button onClick={props.onHandleSubmit} disabled={!props.q}>
          質問する
        </button>
      </div>
    </div>
  )
}

export default Form
