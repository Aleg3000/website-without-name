import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div>Project—d</div>
                <div className={styles.contactsContainer}>
                    <div>
                        <div>+79999999999</div>
                        <div>coolestmail@gmail.com</div>
                    </div>
                    <div className={styles.socialLinks}>
                        <div>Instagram</div>
                        <div>Behance</div>
                        <div>Telegram</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}