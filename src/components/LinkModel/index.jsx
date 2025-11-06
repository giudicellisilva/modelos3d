import { Link } from "react-router-dom";
import styles from "./LinkModel.module.scss";

const LinkModel = ({img, link, description}) =>{

    return(
        <Link className={styles.linkModel} to={link}>
            <img className={styles.linkModel__img} src={img} />
            <h3 className={styles.linkModel__description} >{description}</h3>
        </Link>
    )
}

export default LinkModel;