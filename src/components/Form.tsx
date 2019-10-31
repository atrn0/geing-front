import * as React from 'react'
import { ChangeEvent } from 'react'

type FormProps = {
  onHandleChange: (e: ChangeEvent) => void
  q: string
  onHandleSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
}

const Form = (props: FormProps) => {
  const handleChange = (e: any) => {
    props.onHandleChange(e)
  }

  return (
    <div>
      <textarea value={props.q} onChange={handleChange} />
      <button onClick={props.onHandleSubmit}>質問する</button>
    </div>
  )
}

export default Form
