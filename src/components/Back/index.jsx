import { Link, useNavigate } from "react-router-dom";
import styles from "./Back.module.scss";
import back from "assets/icons/arrow-back-circle-outline.svg";

const Back = ({link}) =>{

    const navigate = useNavigate();

    function backLink(){
        navigate(-1);
    }
    return(
        <div className={styles.back} onClick={() => backLink()}>
            <img src={back} alt="voltar para página anterior"/>
        </div>
    )
}

export default Back;