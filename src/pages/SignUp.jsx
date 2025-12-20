//Components
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

//Stylesheets
import styles from './SignUp.module.css';

function SignUp(){
    let isSignUp = false;

    let hideElements = isSignUp ? "True" : "False";
    console.log(hideElements)

    return(
        <>
            <Header />
            <div className={styles.body}>
                <form className={styles.form}>
                    <h1>Sign Up | S+EM.</h1>

                    <div className={styles.nameContainer}>
                        {/*Name*/}
                        <input type="text" name="first_name" id="firstName" placeholder="First Name *" hidden={hideElements}/>
                        <input type="text" name="last_name" id="lastName" placeholder="Last Name *" hidden={hideElements}/>
                    </div>

                    <div className={styles.other}>
                        {/*Year Group*/}
                        <input type="number" name="year_group" id="yearGroup" placeholder="Year group of Child *" hidden={hideElements} />

                        {/* Post Code */}
                        <input type="text" name="post_code" id="postCode" placeholder="Post Code *" hidden="True"/>
                    </div>

                    <div className={styles.credentialsContainer}>
                        <p>Credentials</p>
                        <div className={styles.credentialsWrapper}>
                            {/* Email & Password */}
                            <input type="text" name="email" id="email" placeholder="Email *"/>
                            <input type="text" name="phone_number" id="phoneNumber" placeholder="Phone Number *" hidden="True"/>

                            <input type="text" name="password" id="password" placeholder="Password *"/>
                            <input type="text" name="confirm_password" id="confirmPassword" placeholder="Confirm password *" hidden="True"/>
                        </div>
                    </div>

                    <div className={styles.paragraphs}>
                        <p className={styles.smallText}>* means the field is required</p>
                        <p className={styles.smallText}>Never share this information with anyone</p>
                    </div>

                    <button type="submit">Submit</button>
                    <button>Log In Instead</button>
                </form>
            </div>
            <Footer />
        </>

    );
}

export default SignUp