//Components
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

//Stylesheets
import styles from './Contact.module.css';

function Contact(){
    return(
        <>
            <Header />
            <div className={styles.body}>
                <h1>Contact us here</h1>
                <p>Phone Number: </p>

            </div>
            <Footer />
        </>
    );
}

export default Contact