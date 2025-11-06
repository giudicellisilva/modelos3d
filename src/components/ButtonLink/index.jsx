import { Link } from "react-router-dom";
import styles from"./ButtonLink.module.scss";

const ButtonLink = ({link, children}) =>{
    return(
        <Link className={styles.buttonLink} to={link}>{children}</Link>
    )
}
export default ButtonLink;