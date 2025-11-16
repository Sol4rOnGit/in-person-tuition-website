import styles from './AboutCard.module.css';

function AboutCard({name="Name", description="Default description"}){
    name = String(name).charAt(0).toUpperCase() + String(name).slice(1);

    return(
        <div className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default AboutCard