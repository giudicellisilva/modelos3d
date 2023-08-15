import styles from "./Modelo.module.scss";
import Miniature from "components/Miniature";
import ModelViewer from "components/ModelViewer";
import Back from "components/Back";

const Modelo = ({modelo3d, miniature, description}) =>{
    return(
        <div className={`${styles.modelo} content`}>
            <Back />
            <div className={styles.modelo__title}>
                <h2>Cranio Equino</h2>
            </div>
            <ModelViewer modelo={modelo3d} ></ModelViewer>
            <Miniature miniature={miniature} description={description} />
        </div>
    )
}

export default Modelo