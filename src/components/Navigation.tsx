import { NavLink } from "react-router-dom";
import styles from  "../styles/navigation.module.scss";

function Navigation() {
    return (
        <>
        <div className={styles.navbar}>
            <NavLink className={styles.link} to="/">TikTakToe</NavLink>
            <NavLink className={styles.link} to="/chess">Chess</NavLink>
            <NavLink className={styles.link} to="/controler">Controler</NavLink>
            <NavLink className={styles.link} to="/parent">Parent</NavLink>
            <NavLink className={styles.link} to="/usestateobject">useState with object</NavLink>
            <NavLink className={styles.link} to="/usestateexample">useState Example</NavLink>
            <NavLink className={styles.link} to="/userefexample">useRef Example</NavLink>
        </div>
        </>
    );
}

export default Navigation