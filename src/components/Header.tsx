import me from '../me.jpg'
import * as React from 'react'

const Header = () => {
  return (
    <div className="Header">
      <h2>あたらんの質問箱</h2>
      <img src={me} alt="me" />
    </div>
  )
}

export default Header
