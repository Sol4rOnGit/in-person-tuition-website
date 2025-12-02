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
                <p>Description Paragraph</p>
                <div className={styles.cardContainer}>
                    <p className={styles.separation}>Founders</p>
                    <AboutCard name="tanmaya" description="Big money man"/>
                    <AboutCard name="hiresh" description="Computer Science"/>
                    <p className={styles.separation}>Staff</p>
                    <AboutCard name="prince" description="Mathematical Genius"/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About