//Components
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

//Stylesheets
import styles from './Contact.module.css';

function Contact(){
    var phoneNumber = "";
    var email = "stemtutors2025@outlook.com";
    var mailto = "mailto:stemtutors2025@outlook.com";
    
    return(
        <>
            <Header />
            <div className={styles.body}>
                <h1>Contact us here</h1>
                <p>Phone Number: {phoneNumber}</p>
                <p>Email: <a className={styles.underlinebold}href={mailto}>{email}</a></p>
            </div>
            <Footer />
        </>
    );
}

export default Contact