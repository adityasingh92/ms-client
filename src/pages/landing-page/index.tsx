import React from 'react'
import cx from 'classnames'
import { useNavigate } from 'react-router-dom'

// local imports
import styles from './styles.module.css'
import { HeaderLocaleEN, LandingBodyLocaleEN } from './locale/en'
import Button from '../../components/button'
import LargeButton from '../../components/large-button'

function LandingPage () {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }
  const handlePlanningClick = () => {}
  const handleLearnMoreClick = () => {}
  const handleSignUpClick = () => {
    navigate('/sign-up')
  }
  return (
        <React.Fragment>
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
                        <p onClick={handleLoginClick} className={styles.headerMenuListItem}>{HeaderLocaleEN.loginButtonLabel}</p>
                        <Button label={HeaderLocaleEN.registerButtonLabel} onClick={handleSignUpClick} />
                    </section>
                </div>
            </div>
            <main>
                <section className={styles.mainLandingPageTexts}>
                    <div className={styles.landingPageBigText}>{LandingBodyLocaleEN.planText}</div>
                    <div className={ cx(styles.landingPageBigText, styles.highlightedBigText) }>{LandingBodyLocaleEN.divideText}</div>
                    <div className={styles.landingPageBigText}>{LandingBodyLocaleEN.conquerText}</div>
                </section>
                <section className={styles.mainLandingPageDescription}>
                    <div className={styles.mainLandingPageDescriptionText}>{LandingBodyLocaleEN.description}</div>
                </section>
            </main>
            <div className={styles.infoButtonGroup}>
                <LargeButton label={LandingBodyLocaleEN.startPlanningButtonLabel} onClick={handlePlanningClick}/>
                <LargeButton label={LandingBodyLocaleEN.learnMoreButtonLabel} onClick={handleLearnMoreClick} inverted={true} />
            </div>
        </React.Fragment>
  )
}

export default LandingPage
