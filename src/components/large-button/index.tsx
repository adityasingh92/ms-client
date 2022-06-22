import React from 'react'
import styles from './styles.module.css'

interface LargeButtonProps {
    label: string;
    onClick : () => void;
    inverted?: boolean;
}

const LargeButton: React.FC<LargeButtonProps> = ({ label, onClick, inverted }) => {
  return (
    <button className={inverted ? styles.invertedButton : styles.button} onClick={onClick}>
        <div className={ inverted ? styles.invertedLabel : styles.label}>{label}</div>
    </button>
  )
}

export default LargeButton
