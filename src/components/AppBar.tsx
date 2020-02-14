import styles from './AppBar.module.scss'
import React from 'react'

const AppBar = () => {
  return (
    <div className={styles.appBar}>
      <a href={'/'}>あたらんの質問箱</a>
    </div>
  )
}

export default AppBar
