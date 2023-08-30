import styles from "./Modelo.module.scss";
import Miniature from "components/Miniature";
import ModelViewer from "components/ModelViewer";
import Back from "components/Back";
import { useParams } from "react-router-dom";

import cranio from "assets/modelos3d/Cranio.glb";
import cranioMiniature from "assets/miniaturas/Crânio.png";
import mandibula from "assets/modelos3d/Mandibula.glb";
import mandibulaMiniatura from "assets/miniaturas/Mandíbula.png";
import atlas from "assets/modelos3d/Atlas.glb";
import atlasMiniature from "assets/miniaturas/Atlas.png";
import axis from "assets/modelos3d/axis.glb";
import axisMiniature from "assets/miniaturas/Áxis.png";
import vertebra_cervical from "assets/modelos3d/3ª~6ª_Vértebra_Cervical.glb";
import vertebra_cervicalMiniature from "assets/miniaturas/Vértebras cervicais (3ª~6ª cervicais, 7ª cervival).png"
import vertebra7_cervical from "assets/modelos3d/7ª_Vértebra_Cervical.glb";
import vertebra1_toracica from "assets/modelos3d/1ª_Vértebra_Torácica.glb";
import vertebra_toracicaMiniature from "assets/miniaturas/Vértebras torácicas (1ª, 8ª, 15ª).png"
import vertebra8_toracica from "assets/modelos3d/8ª_Vértebra_Torácica.glb";
import vertebra15_toracica from "assets/modelos3d/15ª_Vértebra_Torácica.glb";
import vertebra_lombar from "assets/modelos3d/5ª_Vértebra_Lombar.glb";
import vertebra_lombarMiniature from "assets/miniaturas/Vértebras lombares.png";
import sacro from "assets/modelos3d/Sacro.glb";
import sacroMiniature from "assets/miniaturas/Sacro.png";
import esterno from "assets/modelos3d/esterno.glb";
import esternoMiniature from "assets/miniaturas/Esterno.png";

const Modelo = () =>{
    const params = useParams();
    const modelos = [
        {id: "cranio", modelo3d: cranio, miniature: cranioMiniature, description:"indicação do crânio no esqueleto completo", title:"Cranio Equino"},
        {id: "mandibula", modelo3d: mandibula, miniature: mandibulaMiniatura, description:"indicação da Mandíbula no esqueleto completo", title:"Mandíbula Equina"},
        {id: "atlas", modelo3d: atlas, miniature: atlasMiniature, description:"indicação do Atlas no esqueleto completo", title:"Atlas Equino"},
        {id: "axis", modelo3d: axis, miniature: axisMiniature, description:"indicação do Áxis no esqueleto completo", title:"Áxis Equino"},
        {id: "vertebra-cervical", modelo3d: vertebra_cervical, miniature: vertebra_cervicalMiniature, description:"indicação da 3ª~6ª Vértebra cervical no esqueleto completo", title:"3ª~6ª Vértebra cervical Equina"},
        {id: "7vertebra-cervical", modelo3d: vertebra7_cervical, miniature: vertebra_cervicalMiniature, description:"indicação da 7ª Vértebra cervical no esqueleto completo", title:"7ª Vértebra cervical Equina"},
        {id: "1vertebra-toracica", modelo3d: vertebra1_toracica, miniature: vertebra_toracicaMiniature, description:"indicação da 1ª Vértebra torácica no esqueleto completo", title:"1ª Vértebra torácica Equina"},
        {id: "8vertebra-toracica", modelo3d: vertebra8_toracica, miniature: vertebra_toracicaMiniature, description:"indicação da 8ª Vértebra torácica no esqueleto completo", title:"8ª Vértebra torácica Equina"},
        {id: "15vertebra-toracica", modelo3d: vertebra15_toracica, miniature: vertebra_toracicaMiniature, description:"indicação da 15ª Vértebra torácica no esqueleto completo", title:"15ª Vértebra torácica Equina"},
        {id: "5vertebra-lombar", modelo3d: vertebra_lombar, miniature: vertebra_lombarMiniature, description:"indicação da 5ª Vértebra lombar no esqueleto completo", title:"5ª Vértebra lombar Equina"},
        {id: "sacro", modelo3d: sacro, miniature: sacroMiniature, description:"indicação do Sacro no esqueleto completo", title:"Sacro Equino"},
        {id: "esterno", modelo3d: esterno, miniature: esternoMiniature, description:"indicação do Esterno no esqueleto completo", title:"Esterno Equino"},
    ];

    return(
        <div className={`${styles.modelo} content`}>
            <Back />
            {modelos.map( modelo => {
                if(modelo.id == params.id){
                    console.log("ass")
                    return(
                        <>
                            <div className={styles.modelo__title}>
                                <h2>{modelo.title}</h2>
                            </div>
                            <ModelViewer modelo={modelo.modelo3d} ></ModelViewer>
                            <Miniature miniature={modelo.miniature} description={modelo.description} />
                        </>
                    )
                }
            })}
        </div>
    )
}

export default Modelo;