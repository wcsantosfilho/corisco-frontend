import styles from './Footer.module.css'

function Footer(props) {
    return (
        <div className={styles.footerContainer}>
            <p className={styles.footerContent}>{props.text}</p>
        </div>
    )
}

export default Footer