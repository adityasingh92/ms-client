import React from 'react'

import styles from './styles.module.css'

function LoadingScreen () {
  return (
        <div className={styles.parent}>
            <div className={styles.spinner}></div>
        </div>
  )
}

export default LoadingScreen
