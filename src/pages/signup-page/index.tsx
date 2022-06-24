import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// local imports
import styles from './styles.module.css'
import {
  appTitle,
  contactText,
  loginText,
  signUpToMilestone,
  termsAndServiceText,
  signUpButtonLabel,
  usernamePlaceHolderText,
  passwordPlaceHolderText,
  emailPlaceHolderText
} from './locale/en'
import LargeButton from '../../components/large-button'
import Button from '../../components/button'

function SignUpPage () {
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setUsername(value)
  }
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setEmail(value)
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setPassword(value)
  }

  const goToLoginPage = () => {
    navigate('/login')
  }

  return (
        <React.Fragment>
            <div className={styles.headerParent}>
                <div className={styles.header}>
                    <section className={styles.headerLogo}>
                        {appTitle}
                    </section>
                    <section className={styles.headerMenu}>
                    </section>
                    <section className={styles.headerLoginRegistrationOption}>
                        <p className={styles.headerMenuListItem}>{contactText}</p>
                        <Button label={loginText} onClick={goToLoginPage} />
                    </section>
                </div>
            </div>
            <div className={styles.parent}>
                <p className={styles.mainHelperText}>{signUpToMilestone}</p>
                <div className={styles.loginComponent}>
                    <form className={styles.loginInputForm}>
                        <input
                            className={styles.inputElement}
                            type={'text'}
                            value={username}
                            placeholder={usernamePlaceHolderText}
                            onChange={handleUsernameChange}
                        />
                        <input
                            className={styles.inputElement}
                            type={'text'}
                            value={email}
                            placeholder={emailPlaceHolderText}
                            onChange={handleEmailChange}
                        />
                        <input
                            className={styles.inputElement}
                            type={'password'}
                            value={password}
                            placeholder={passwordPlaceHolderText}
                            onChange={handlePasswordChange}
                        />
                    </form>
                    <div className={styles.buttonGroup}>
                        <p className={styles.helperButton}>{termsAndServiceText}</p>
                        <LargeButton label={signUpButtonLabel} onClick={() => {}} />
                    </div>
                </div>
            </div>
        </React.Fragment>
  )
}

export default SignUpPage
