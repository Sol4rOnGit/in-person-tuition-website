//Modules
import TypeWriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

//Stylesheets
import styles from "./Landing.module.css";

//Components
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Landing(){
  const navigate = useNavigate();

  function CTOclicked(){
    navigate("/dashboard");
  }

  return (
    <>
      <Header />
      <div className={styles.body}>
        <p><strong className={styles.textshadow}>Top students to make your child a top student</strong></p>
        <h1 className={styles.textshadow}>
          Tutors in <span className={styles.dynamic}><TypeWriter
              options={{
                strings: ['maths', 'physics', 'computer science', 'person'],
                autoStart: true,
                loop: true,
                delay: 120,
                deleteSpeed: 80,
              }}
              wrapperClassName={styles.dynamic} // style the wrapper
              wrapper="span" // force it to render as <span> instead of <div>
            />
            </span></h1> {/* Need to make the "maths" type and retype dynamically*/}
        <h3></h3>
        <button className={styles.button} onClick={CTOclicked}>Test us for <strong className={styles.textshadow}>free</strong></button>
      </div>
      <Footer />
    </>
  );
}

export default Landing