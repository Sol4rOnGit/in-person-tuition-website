//Components
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

//Stylesheets
import styles from './SignUp.module.css';

function SignUp(){
    return(
        <>
            <Header />
            <div className={styles.body}>
                <h1>Sign Up Page Test</h1>
                {/*???*/}
            </div>
            <Footer />
        </>

    );
}

export default SignUp