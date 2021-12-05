import React from 'react'
import styles from './LoadingCube.module.scss'

const LoadingCube = () => {
  return (
    <div className={styles.cube_container}>
      <div className={styles.cube}>
        <div className={styles.side}></div>
        <div className={styles.side}></div>
        <div className={styles.side}></div>
        <div className={styles.side}></div>
        <div className={styles.side}></div>
        <div className={styles.side}></div>
      </div>
    </div>
  )
}

export default LoadingCube
