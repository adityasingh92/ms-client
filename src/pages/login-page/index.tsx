import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// local import
import { AppDispatch } from '../../store'

import { login, AuthState } from '../../store/slice/auth.slice'
import styles from './styles.module.css'
import { loginApi } from '../../api/auth'
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
import LoadingScreen from '../../components/loading-screen'

function LoginPage () {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loader, setLoader] = useState<boolean>(false)

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setEmail(value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setPassword(value)
  }

  const goSignUpPage = () => {
    navigate('/sign-up')
  }

  const handleLogin = async () => {
    setLoader(true)

    loginApi({ email, password })
      .then(response => {
        if (response.status === 200) {
          const payload: AuthState = {
            getAuth: true,
            username: response.data.username,
            email: response.data.email,
            token: response.data.token,
            error: '',
            success: true
          }

          dispatch(login(payload))

          navigate('/home', { replace: true })
        }
      })
      .catch(error => {
        const payload: AuthState = {
          getAuth: false,
          username: '',
          email: '',
          token: '',
          error: error.response.data.message,
          success: true
        }

        dispatch(login(payload))
      })
      .finally(() => {
        setLoader(false)
      })
  }

  return (
        <React.Fragment>
          { loader && <LoadingScreen /> }
            <div className={styles.headerParent}>
                <div className={styles.header}>
                    <section className={styles.headerLogo}>
                        {appTitle}
                    </section>
                    <section className={styles.headerMenu}>
                    </section>
                    <section className={styles.headerLoginRegistrationOption}>
                        <p className={styles.headerMenuListItem}>{contactText}</p>
                        <Button label={signUpText} onClick={goSignUpPage} />
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
                        <LargeButton label={loginButtonLabel} onClick={handleLogin} />
                    </div>
                </div>
            </div>
        </React.Fragment>
  )
};

export default LoginPage
