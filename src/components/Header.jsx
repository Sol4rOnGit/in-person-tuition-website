import styles from './Header.module.css'

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
                <li><button className={styles.button}>Sign In</button></li>
            </ul>
    ;

    const WidescreenMenu = 
            <ul className={styles.ul}>
                <li><a className={styles.a} href="/">Home</a></li>
                <li><a className={styles.a} href="/#/about">About</a></li>
                <li><a className={styles.a} href="/#/contact">Contact</a></li>
                <li><a className={styles.button} href="/#/signup">Sign In</a></li>
            </ul>
    ;
    
    return (WidescreenMenu);
}

export default Header;