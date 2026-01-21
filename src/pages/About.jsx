//Components
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

import AboutCard from '../components/cards/AboutCard.jsx';

//Stylesheets
import styles from './About.module.css';

function About(){
    /* Hi, I’m Tanmaya, founder of and tutor at s+em tutors.*/

    return(
        <>
            <Header />
            <div className={styles.body}>
                <h1>About us</h1>
                <p>Description Paragraph</p>
                <div className={styles.cardContainer}>
                    <div>
                        <p className={styles.separation}>Founders</p>
                        <div className={styles.verticalCardContainer}>
                            <AboutCard name="Tanmaya Bharara" description="My expertise lies in Maths and physics which I am studying for A-Level (alongside Economics and Further Maths) at the London Academy of Excellence. Previously I have achieved all nines at GCSE in 11 subjects (99.98 percentile) and an A in Additional Maths and have tutored maths up to year 11/12."/>
                            <AboutCard name="Hiresh Solanki" description="Specialises in computer science with almost a decade of coding experience, I built the very website you're looking at from the ground up, and I'll be giving your child the knowledge and skills needed to get top grades in computer science and mathematics."/>
                        </div>
                    </div>
                    <div>
                        <p className={styles.separation}>Staff</p>
                        <div className={styles.verticalCardContainer}>
                            <AboutCard name="Prince Patel" description="Aspiring Aerospace Engineer with a strong passion for mathematics, I'll bring your child to the next level in physics and mathematics."/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About