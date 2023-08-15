import ModelViewer from "components/ModelViewer";
import styles from "./Cranio.module.scss";
import cranio from "assets/modelos3d/Cranio.glb"
import Back from "components/Back";
import Miniature from "components/Miniature";
import cranioMiniature from "assets/miniaturas/Crânio.png";

const Cranio = () =>{
    return(
        <div className={`${styles.cranio} content`}>
            <Back />
            <div className={styles.cranio__title}>
                <h2>Cranio Equino</h2>
            </div>
            <ModelViewer modelo={cranio} ></ModelViewer>
            <Miniature miniature={cranioMiniature} description={"indicação do crânio no esqueleto completo"} />
        </div>
    )
}

export default Cranio;