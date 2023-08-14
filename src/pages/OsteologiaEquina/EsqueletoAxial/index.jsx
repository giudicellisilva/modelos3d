import Back from "components/Back";
import styles from "./EsqueletoAxial.module.scss";

const EsqueletoAxial = () =>{
    return(
        <div className={`${styles.esqueletoAxial} content`}>
            <Back link={"/osteologia-equina"} />
            
        </div>
    )
}

export default EsqueletoAxial;