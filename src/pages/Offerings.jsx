import { useNavigate } from 'react-router-dom';

//Styles
import styles from './Offerings.module.css';

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";

function Offerings(){
    const navigate = useNavigate();
    const whatsappLink = "https://wa.me/447368902619?text=Hello%2C%0AI%20would%20like%20to%20enroll%20my%20child%20in%20GCSE%20tuition.%0A%0AName%3A%0ASubject(s)%3A%0APreferred%20schedule%3A"

    const handleWhatsappClick = () => {
        window.open(whatsappLink, "_blank");
        navigate("/signup");
    }
    return(
        <>
            <Header />
            <div className={styles.body}>
                <div className={styles.card}>
                    <h1>
                        Expert GCSE Tutoring
                    </h1>
                    <p className={styles.priceTag}>
                        <s>£75</s> <strong>£50</strong>/month
                    </p>

                    <p>Experienced tutors helping your child excel in Maths, Sciences and Computer Science.</p>
                    <p>Secure your slot in our limited places NOW</p>

                    <button onClick={handleWhatsappClick}>
                        Start Boosting Grades
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Offerings