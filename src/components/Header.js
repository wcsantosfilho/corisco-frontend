import styles from './Header.module.css'
import Button from './Button'
import Condicional from './Condicional'

function Header({applicationName}) {
    function clickNoHeader() {
        console.log(`êêê... este click foi no Header`)
    }

    return (
        <div className={styles.headerContainer}>
            <p className={styles.headerContent}>{applicationName}</p>
            <Button event={clickNoHeader} text="The Header Button" />
            {/*  <Condicional /> */}
        </div>
    )
}

export default Header