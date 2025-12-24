//React
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Firebase
import { auth, onAuthStateChanged } from "../firebase/app";
import { logOut } from "../firebase/auth";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";

//Styles
import styles from './Dashboard.module.css'

function Dashboard(){
    const [userName, setName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                const uid = user.uid;
                const user_email = user.email;
                setName(user_email);
                console.log(`User logged in as ${uid}`)
            }
            else{
                navigate("/signup")
            }
        })
    }, []);

    return(
        <>
            <Header />
            <div className={styles.body}>
                <h1>Welcome {userName}</h1>

                <button onClick={logOut}>LogOut</button>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard