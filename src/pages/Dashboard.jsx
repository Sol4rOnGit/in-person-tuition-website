//React
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

//Firebase
import { auth, onAuthStateChanged } from "../firebase/app";
import { changePassword, logOut } from "../firebase/auth";
import { getUserData, deleteAccount } from "../firebase/firestore";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";

//Styles
import styles from './Dashboard.module.css'

function Dashboard(){
    const [userData, setUserData] = useState("");

    const navigate = useNavigate();

    const [showUserData, setShowUserData] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if(!user){
                navigate("/signup");
                return;
            }

            const uid = user.uid;

            setUserData(await getUserData(uid));

            console.log(`User logged in as ${uid}`)
        });

        return () => unsubscribe();
    }, []);

    return(
        <>
            <Header />
            <div className={styles.body}>
                <h1>Welcome {userData.FirstName}</h1>

                <div>
                    <div className={styles.accountControlsWrapper}>
                        <h2 className={styles.h2AccountControls}>Account Controls</h2>

                        <button className={styles.logOutBtn} onClick={logOut}>Log Out</button>

                        {!showUserData &&
                            <div className={styles.personalDataWrapper}>
                                <h4>Personal Data</h4>
                                <button onClick={() => {setShowUserData(true)}}>Show User Data</button>
                            </div>
                        }
                        {showUserData && 
                        <div className={styles.personalDataWrapper}>
                            <h4>Personal Data</h4>
                            <p>First Name: {userData.FirstName}</p>
                            <p>Last Name: {userData.LastName}</p>

                            <p>Child's Year Group: {userData.ChildYearGroup}</p>

                            <p>Phone Number: {userData.PhoneNumber}</p>
                            <p>PostCode: {userData.PostCode}</p>

                            <button onClick={() => {setShowUserData(false)}}>Hide User Data</button>
                        </div>
                        }

                        <div className={styles.dangerZone}>
                            <h3>DANGER ZONE</h3>
                            <div className={styles.dangerZoneBtnWrapper}>
                                <button onClick={() => {changePassword()}}>Change Password</button>
                                <button onClick={() => {deleteAccount(auth.currentUser.uid, navigate)}}> Permanently Delete Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard