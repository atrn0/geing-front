import me from '../me.jpg'
import * as React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={me} alt="me" />
      <p>何でも質問してください！</p>
    </div>
  )
}

export default Header
