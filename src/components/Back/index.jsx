import { Link } from "react-router-dom";
import styles from "./Back.module.scss";
import back from "assets/icons/arrow-back-circle-outline.svg";

const Back = ({link}) =>{

    return(
        <Link to={link} className={styles.back}>
            <img src={back} alt="voltar para página anterior"/>
        </Link>
    )
}

export default Back;