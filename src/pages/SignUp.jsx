import { useState } from 'react';

//Components
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

//Stylesheets
import styles from './SignUp.module.css';

//Scripts
import "../firebase/auth.js";

function SignUp(){
    const [isSignUp, setIsSignUp] = useState(false);
    
    return(
        <>
            <Header />
            <div className={styles.body}>
                <form className={styles.form}>
                    <h1>{isSignUp ? "Sign Up | S+EM." : "Log In | S+EM."}</h1>

                    <div className={styles.formElementsWrapper}>
                        {isSignUp &&
                        <div className={styles.leftWrapper}>
                            <div className={styles.nameContainer}>
                                {/*Name*/}
                                <p>Name</p>
                                <input type="text" name="first_name" id="firstName" placeholder="First Name *" required/>
                                <input type="text" name="last_name" id="lastName" placeholder="Last Name *" required/>
                            </div>

                            <div className={styles.other}>
                                <p>Details</p>
                                {/*Year Group*/}
                                <input type="number" name="year_group" id="yearGroup" placeholder="Year group of Child *" required/>

                                {/* Post Code */}
                                <input type="text" name="post_code" id="postCode" placeholder="Post Code *" required/>
                            </div>
                        </div>}

                        <div className={styles.credentialsContainer}>
                            <p>Credentials</p>
                            <div className={styles.credentialsWrapper}>
                                {/* Email & Password */}
                                <input type="text" name="email" id="email" placeholder="Email *" required/>
                                {isSignUp && <input type="text" name="phone_number" id="phoneNumber" placeholder="Phone Number *" required/>}

                                <input type="password" name="password" id="password" placeholder="Password *" required/>
                                {isSignUp && <input type="password" name="confirm_password" id="confirmPassword" placeholder="Confirm password *" required/>}
                            </div>
                        </div>
                    </div>

                    <div className={styles.paragraphs}>
                        <p className={styles.smallText}>* means the field is required</p>
                        <p className={styles.smallText}>Never share this information with anyone</p>
                    </div>
                    
                    <button type="submit">Submit</button>
                    <button type="button" id="switchModeBtn" onClick={() => setIsSignUp(!isSignUp)}>{isSignUp ? "Log In Instead" : "Sign Up Instead"}</button>
                </form>
            </div>
            <Footer />
        </>

    );
}

export default SignUp

/* Log In Logic 

1. Ensure password and confirm password are the same
2. Log in with email, password into auth
3. Email with details? idk what to do ibsr

*/