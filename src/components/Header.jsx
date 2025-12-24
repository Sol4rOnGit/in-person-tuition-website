//React
import { useEffect, useState } from 'react';

//Firebase
import { auth, onAuthStateChanged } from '../firebase/app';

//Styles
import styles from './Header.module.css'

function Header(){
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const [button, setButton] = useState(<a className={styles.button} href="/#/signup">Sign In</a>)

    function showSideBar(){
        setSideBarOpen(true);
    }

    function hideSideBar(){
        setSideBarOpen(false);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setButton(<a className={styles.button} href="/#/dashboard">Dashboard</a>)
            }
            else{
                setButton(<a className={styles.button} href="/#/signup">Sign In</a>)
            }
        })
    }, [])

    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1 className={styles.title}>S+EM.</h1>
                <ul className={styles.hideOnMobile}>
                    <li><a className={styles.a} href="/">Home</a></li>
                    <li><a className={styles.a} href="/#/about">About</a></li>
                    <li><a className={styles.a} href="/#/contact">Contact</a></li>
                    <li>{button}</li>
                </ul>

                <ul className={styles.Hamburger}>
                    <li><button onClick={showSideBar}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></button></li>
                </ul>
            </nav>
            <ul className={styles.sidebar} style={{display : sideBarOpen ? "flex" : "none"}}>
                <li><button onClick={hideSideBar}><svg className={styles.close} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button></li>
                <li><a className={styles.a} href="/">Home</a></li>
                <li><a className={styles.a} href="/#/about">About</a></li>
                <li><a className={styles.a} href="/#/contact">Contact</a></li>
                <li><a className={styles.button} href="/#/signup">Sign In</a></li>
            </ul>
        </header>
    );
}

export default Header;