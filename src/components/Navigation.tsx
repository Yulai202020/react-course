import styles from  "../styles/navigation.module.scss";

function Navigation() {
    return (
        <>
        <nav className={styles.navbar}>
            <li><a href="/">TikTakToe</a></li>
            <li><a href="/chess">Chess</a></li>
            <li><a href="/controler">Controler</a></li>
            <li><a href="/parent">Parent</a></li>
            <li><a href="/usestateobject">useState with object</a></li>
            <li><a href="/usestateexample">useState Example</a></li>
            <li><a href="/userefexample">useRef Example</a></li>
        </nav>
        </>
    );
}

export default Navigation