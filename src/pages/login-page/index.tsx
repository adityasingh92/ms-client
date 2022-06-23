import React, { useState } from 'react'

// local import
import styles from './styles.module.css'
import LargeButton from '../../components/large-button'
import Button from '../../components/button'
import {
  appTitle,
  contactText,
  signUpText,
  loginToMilestoneText,
  emailPlaceHolderText,
  passwordPlaceHolderText,
  forgotPasswordText,
  loginButtonLabel
} from './locale/en'

function LoginPage () {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setEmail(value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setPassword(value)
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
                        <Button label={signUpText} onClick={() => {}} />
                    </section>
                </div>
            </div>
            <div className={styles.parent}>
                <p className={styles.mainHelperText}>{loginToMilestoneText}</p>
                <div className={styles.loginComponent}>
                    <form className={styles.loginInputForm}>
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
                        <p className={styles.helperButton}>{forgotPasswordText}</p>
                        <LargeButton label={loginButtonLabel} onClick={() => {}} />
                    </div>
                </div>
            </div>
        </React.Fragment>
  )
};

export default LoginPage
