//React
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Firebase
import { auth } from '/src/firebase/app.js';
import { signUp, logIn } from '/src/firebase/auth.js'; 

import { firestore, doc, setDoc, getDocFromServer, serverTimestamp } from '/src/firebase/app.js';

//Components
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

//Stylesheets
import styles from './SignUp.module.css';

//Scripts
import "../firebase/auth.js";

function SignUp(){
    const navigate = useNavigate();

    //Page state
    const [isSignUp, setIsSignUp] = useState(false);

    //Input field variables
    // Name
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // Details
    const [childYearGroup, setChildYearGroup] = useState("");
    const [postCode, setPostCode] = useState("");

    // Credentials
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
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

                    await setDoc(doc(firestore, "UserData", userId), {
                        FirstName: firstName,
                        LastName: lastName,
                        ChildYearGroup: childYearGroup,
                        PostCode: postCode,
                        PhoneNumber: phoneNumber
                    })

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
                                {/* First & Last Name*/}
                                <p>Name</p>
                                <input type="text" placeholder="First Name *" value={firstName} onChange={(event) => setFirstName(event.target.value)} required/>
                                <input type="text" placeholder="Last Name *" value={lastName} onChange={(event) => setLastName(event.target.value)} required/>
                            </div>

                            <div className={styles.other}>
                                <p>Details</p>
                                {/* Year group and Post Code */}
                                <input type="number" placeholder="Year group of Child *" value={childYearGroup} onChange={(event) => setChildYearGroup(event.target.value)}required/>
                                <input type="text" placeholder="Post Code *" value={postCode} onChange={(event) => setPostCode(event.target.value)} required/>
                            </div>
                        </div>}

                        <div className={styles.credentialsContainer}>
                            <p>Credentials</p>
                            <div className={styles.credentialsWrapper}>
                                {/* Email, Phone Number & Password */}
                                <input type="email" placeholder="Email *" value={email} onChange={(event) => setEmail(event.target.value)} required/>

                                {isSignUp && <input type="text" placeholder="Phone Number *" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} required/>}

                                <input type="password" placeholder="Password *" value={password} onChange={(event) => setPassword(event.target.value)} required/>
                                
                                {isSignUp && <input type="password" placeholder="Confirm password *" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required/>}
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