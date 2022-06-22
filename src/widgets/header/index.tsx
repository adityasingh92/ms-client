import React from 'react'

// local import
import styles from './styles.module.css'
import { HeaderLocaleEN } from './locale/en'
import Button from '../../components/button'

function Header () {
  const handleLogin = () => {}
  return (
        <div className={styles.parent}>
            <div className={styles.header}>
                <section className={styles.headerLogo}>
                    {HeaderLocaleEN.appTitle}
                </section>
                <section className={styles.headerMenu}>
                    <ul className={styles.headerMenuList}>
                        <li className={styles.headerMenuListItem}>
                            {HeaderLocaleEN.featureText}
                        </li>
                        <li className={styles.headerMenuListItem}>
                            {HeaderLocaleEN.companyText}
                        </li>
                        <li className={styles.headerMenuListItem}>
                            {HeaderLocaleEN.aboutText}
                        </li>
                    </ul>
                </section>
                <section className={styles.headerLoginRegistrationOption}>
                    <p className={styles.headerMenuListItem}>{HeaderLocaleEN.loginButtonLabel}</p>
                    <Button label={HeaderLocaleEN.registerButtonLabel} onClick={handleLogin} />
                </section>
            </div>
        </div>
  )
}

export default Header
