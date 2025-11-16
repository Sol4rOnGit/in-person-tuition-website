import './Stylesheets/global.css';
import styles from './Stylesheets/Header.module.css'

function Header(){
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1 className={styles.title}>S+EM.</h1>
                <MenuElements />
            </nav>
        </header>
    );
}

function MenuElements(){
    //Need to change later for responsive design

    const MobileMenu = 
            <ul className={styles.ul}>
                <li><a className={styles.a} href="#">|||</a></li>
                <li><button className={styles.button}>Sign In</button></li>
            </ul>
    ;

    const WidescreenMenu = 
            <ul className={styles.ul}>
                <li><a className={styles.a} href="#">Home</a></li>
                <li><a className={styles.a} href="#">About</a></li>
                <li><a className={styles.a} href="#">Contact</a></li>
                <li><button className={styles.button}>Sign In</button></li>
            </ul>
    ;
    
    return (WidescreenMenu);
}

export default Header;