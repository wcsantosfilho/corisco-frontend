import styles from './Header.module.css'

function Header({applicationName}) {
    return (
        <div className={styles.headerContainer}>
            <p className={styles.headerContent}>{applicationName}</p>
        </div>
    )
}

export default Header