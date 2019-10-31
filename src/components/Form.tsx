import * as React from 'react'

const Form = (props: {
  onHandleChange: (arg0: any) => void
  q: string | number | string[] | undefined
  onHandleSubmit:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined
}) => {
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
