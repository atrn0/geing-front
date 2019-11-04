import me from '../me.jpg'
import * as React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <h2>あたらんの質問箱</h2>
      <img src={me} alt="me" />
    </div>
  )
}

export default Header
