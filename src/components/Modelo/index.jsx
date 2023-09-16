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
import vertebra9_toracica from "assets/modelos3d/9ª_Vértebra_Torácica.glb";
import vertebra15_toracica from "assets/modelos3d/15ª_Vértebra_Torácica.glb";
import vertebra_lombar from "assets/modelos3d/5ª_Vértebra_Lombar.glb";
import vertebra_lombarMiniature from "assets/miniaturas/Vértebras lombares.png";
import sacro from "assets/modelos3d/Sacro.glb";
import sacroMiniature from "assets/miniaturas/Sacro.png";
import esterno from "assets/modelos3d/esterno.glb";
import esternoMiniature from "assets/miniaturas/Esterno.png";
import escapula from "assets/modelos3d/Escápula_Direita.glb";
import escapulaMiniature from "assets/miniaturas/Escápula.png";
import umero from "assets/modelos3d/Úmero.glb";
import umeroMiniature from "assets/miniaturas/Úmero.png";
import radio_unal from "assets/modelos3d/Rádio-ulna.glb";
import radio_unalMiniature from "assets/miniaturas/Rádio e Ulna.png";
import carpo from "assets/modelos3d/Carpo.glb";
import carpoMiniature from "assets/miniaturas/Carpo.png";
import metacarpo from "assets/modelos3d/Metacarpo.glb";
import metacarpoMiniature from "assets/miniaturas/Metacarpo.png";
import falanges from "assets/modelos3d/Falanges.glb";
import falangesMiniature from "assets/miniaturas/Falanges.png";
import falnage_distal from "assets/modelos3d/Falange_distal.glb";
import falnage_distal_pelvico from "assets/modelos3d/Falange_distal_(membro_pélvico).glb";
import falange_distalMiniature from "assets/miniaturas/Falange distal.png";
import pelve from "assets/modelos3d/Pelve.glb";
import pelveMiniature from "assets/miniaturas/Pelve.png";
import femur from "assets/modelos3d/Femur.glb";
import femurMiniature from "assets/miniaturas/Fêmur.png";
import patela from "assets/modelos3d/Patela.glb";
import patelaMiniature from "assets/miniaturas/Patela.png";
import tibia from "assets/modelos3d/Tíbia.glb";
import tibiaMiniature from "assets/miniaturas/Tíbia.png";
import tarso from "assets/modelos3d/Tarso.glb";
import tarsoMiniature from "assets/miniaturas/Tarso.png";
import metatarso from "assets/modelos3d/Metatarso.glb";
import metatarsoMiniature from "assets/miniaturas/Metatarso.png"; 

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
        {id: "9vertebra-toracica", modelo3d: vertebra9_toracica, miniature: vertebra_toracicaMiniature, description:"indicação da 9ª Vértebra torácica no esqueleto completo", title:"9ª Vértebra torácica Equina"},
        {id: "15vertebra-toracica", modelo3d: vertebra15_toracica, miniature: vertebra_toracicaMiniature, description:"indicação da 15ª Vértebra torácica no esqueleto completo", title:"15ª Vértebra torácica Equina"},
        {id: "5vertebra-lombar", modelo3d: vertebra_lombar, miniature: vertebra_lombarMiniature, description:"indicação da 5ª Vértebra lombar no esqueleto completo", title:"5ª Vértebra lombar Equina"},
        {id: "sacro", modelo3d: sacro, miniature: sacroMiniature, description:"indicação do Sacro no esqueleto completo", title:"Sacro Equino"},
        {id: "esterno", modelo3d: esterno, miniature: esternoMiniature, description:"indicação do Esterno no esqueleto completo", title:"Esterno Equino"},
        {id: "escapula", modelo3d: escapula, miniature: escapulaMiniature, description:"indicação da Escápula no esqueleto completo", title:"Escápula Equino"},
        {id: "umero", modelo3d: umero, miniature: umeroMiniature, description:"indicação do Úmero no esqueleto completo", title:"Úmero Equino"},
        {id: "radio-ulna", modelo3d: radio_unal, miniature: radio_unalMiniature, description:"indicação do Rádio e ulna no esqueleto completo", title:"Rádio e ulna Equino"},
        {id: "carpo", modelo3d: carpo, miniature: carpoMiniature, description:"indicação do Carpo no esqueleto completo", title:"Carpo Equino"},
        {id: "metacarpo", modelo3d: metacarpo, miniature: metacarpoMiniature, description:"indicação do Metacarpo no esqueleto completo", title:"Metacarpo Equino"},
        {id: "falanges", modelo3d: falanges, miniature: falangesMiniature, description:"indicação das falanges no esqueleto completo", title:"Falanges Equino"},
        {id: "falange-distal", modelo3d: falnage_distal, miniature: falange_distalMiniature, description:"indicação da Falange distal no esqueleto completo", title:"Falange distal Equino"},
        {id: "falange-distal-pelvico", modelo3d: falnage_distal, miniature: falange_distalMiniature, description:"indicação da Falange distal no esqueleto completo", title:"Falange distal Equino"},
        {id: "pelve", modelo3d: pelve, miniature: pelveMiniature, description:"indicação da Pelve no esqueleto completo", title:"Pelve Equino"},
        {id: "femur", modelo3d: femur, miniature: femurMiniature, description:"indicação da Fêmur no esqueleto completo", title:"Fêmur Equino"},
        {id: "patela", modelo3d: patela, miniature: patelaMiniature, description:"indicação da Patela no esqueleto completo", title:"Patela Equino"},
        {id: "tibia", modelo3d: tibia, miniature: tibiaMiniature, description:"indicação da Tíbia no esqueleto completo", title:"Tìbia Equino"},
        {id: "tarso", modelo3d: tarso, miniature: tarsoMiniature, description:"indicação do Tarso no esqueleto completo", title:"Tarso Equino"},
        {id: "metatarso", modelo3d: metatarso, miniature: metatarsoMiniature, description:"indicação da Metatarso no esqueleto completo", title:"Metatarso Equino"},
    ];

    return(
        <div className={`${styles.modelo} content`}>
            <Back />
            {modelos.map( modelo => {
                if(modelo.id == params.id){
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