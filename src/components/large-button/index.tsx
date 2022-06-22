import React from 'react'
import styles from './style.module.css'

interface LargeButtonProps {
    label: string;
    onClick : () => void;
}

const LargeButton: React.FC<LargeButtonProps> = ({ label, onClick }) => {
  return (
        <button className={styles.button} onClick={onClick}>
            <div className={styles.label}>{label}</div>
        </button>
  )
}

export default LargeButton
