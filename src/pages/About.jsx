//Components
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

import AboutCard from '../components/cards/AboutCard.jsx';

//Stylesheets
import styles from './About.module.css';

function About(){
    return(
        <>
            <Header />
            <div className={styles.body}>
                <h1>About us</h1>
                <p>Bla bla bla</p>
                <div className={styles.cardContainer}>
                    <AboutCard name="hiresh" description="Computer Science"/>
                    <AboutCard name="tanmaya" description="Money"/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About