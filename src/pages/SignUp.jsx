import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { auth } from '/src/firebase/app.js';
import { signUp, logIn } from '/src/firebase/auth.js'; 

//Components
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

//Stylesheets
import styles from './SignUp.module.css';

//Scripts
import "../firebase/auth.js";

function SignUp(){
    const navigate = useNavigate();

    const [isSignUp, setIsSignUp] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

        
    async function submitForm(event){
        event.preventDefault();

        if(isSignUp){
            try{
                if(password === confirmPassword){
                    console.log(`Attempting signing up with ${email}, ${password}`);
                    const userCredential = await signUp(email, password);
                    console.log("Signed Up:", userCredential.user);
                    const userId = userCredential.user.uid;
                    navigate("/dashboard")
                }
                else{
                    throw new Error("Passwords do not match!")
                }

                //Firestore store attempt later here
            }
            catch(error){
                if(error === "Passwords do not match!"){
                    alert("Passwords do not match")
                }
                else if(error.code === "auth/email-already-in-use"){
                    alert("This email is already in use. Try to login or use another email address.")
                }
                else{
                    alert(`Failed to sign up! ${error.message} - Error code: ${error.code}. Please contact support.`)
                }
            }

        }

        if(!isSignUp){
            logIn(email, password).then((userCredential) => {
                const user = userCredential.user;
                console.log(`Logging in with ${email}, ${password}`);
                navigate("/dashboard")
            })
            .catch((error) => {
                if(error.code === "auth/invalid-credential"){
                    alert("Incorrect Credentials. Please check that your password or email is correct.")
                }
                else{
                    alert(`Failed to sign up! ${error.message} - Error code: ${error.code}. Please contact support.`)
                }
            });
        }
    }

    
    return(
        <>
            <Header />
            <div className={styles.body}>
                <form className={styles.form} onSubmit={submitForm}>
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
                                <input type="email"
                                    placeholder="Email *"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required/>
                                {isSignUp && <input type="text" name="phone_number" id="phoneNumber" placeholder="Phone Number *" required/>}

                                <input type="password"
                                    placeholder="Password *" 
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required/>
                                {isSignUp && <input type="password"
                                placeholder="Confirm password *" 
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}                                
                                required/>}
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