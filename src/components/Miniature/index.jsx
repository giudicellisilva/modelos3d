import { useState } from "react";
import styles from "./Miniature.module.scss";
import arrow from "assets/icons/arrow-up.svg";
import arrowRight from "assets/icons/arrow-up-right.svg";

import "./animacao.css"

const Miniature = ({miniature, description}) =>{

    const [visible, setVisible] = useState(false);

    return(
        <div className={`${styles.miniature} ${visible? "active" : ""}`} >
            { visible ? 
            <div className={`${styles.arrow} activeArrow`} onClick={() => setVisible(false)}><img src={arrowRight} /></div> 
            : <div className={styles.arrow} onClick={() => setVisible(true)}><img src={arrow} /></div>}
            <img className={styles.miniature__img} src={miniature} alt={description}  />  
        </div>
    )
}

export default Miniature;