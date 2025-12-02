import styles from './AboutCard.module.css';

function AboutCard({name="Name", description="Default description"}){
    name = String(name).charAt(0).toUpperCase() + String(name).slice(1);

    return(
        <div className={styles.card}>
            <p className={styles.nametag}>{name}</p>
            <p className={styles.description}>{description}</p>
        </div>
    );
}

export default AboutCard