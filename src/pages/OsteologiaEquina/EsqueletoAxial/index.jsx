import Back from "components/Back";
import styles from "./EsqueletoAxial.module.scss";
import TitlePage from "components/TitlePage";
import LinkModel from "components/LinkModel";

import cranio from "assets/capas/cranio-equino.png";
import mandibula from "assets/capas/mandibula.png";
import atlas from "assets/capas/atlas.png";
import axis from "assets/capas/axis.png";
import vertebra3a6 from "assets/capas/3-6Vértebra cervical.png";
import vertebra7 from "assets/capas/7vertebraCervical.png";
import vertebraToracica1 from "assets/capas/1vertebraToracica.png";
import vertebraToracica9 from "assets/capas/9vertebraToracica.png";
import vertebraToracica15 from "assets/capas/15vertebraToracica.png";
import vertebraLombar5 from "assets/capas/5vertebraLombar.png";
import sacro from "assets/capas/sacro.png";
import esterno from "assets/capas/esterno.png";
// import cranio from "assets/cranio-equino.png";
// import madibula from "assets/Captura_mandibula.png";
// import atlas from "assets/atlas-equino.png"
// import axis from "assets/axis-equino.png";
// import vertebra_cervical from "assets/vertebra-cervical-equino.png";
// import vertebra7_cervical from "assets/7vertebra-cervical-equino.png";
// import vertebra1_toracica from "assets/1vertebra-toracica-equino.png";
// // import vertebra8_toracica from "assets/8vertebra-toracica-equino.png";
// import vertebra15_toracica from "assets/15vertebra-toracica-equino.png";
// import vertebra_lombar from "assets/5vertebra-lombar-equino.png";
// import sacro from "assets/sacro.png";
// import esterno from "assets/esterno.png";

import prov from "assets/prov.jpg";

const modelos = [
                {link: "./cranio", img: cranio, description: "Crânio Equino"},
                {link: "./mandibula", img: mandibula, description: "Mandíbula Equino"},
                {link: "./atlas", img: atlas, description: "Atlas Equino"},
                {link: "./axis", img: axis, description: "Áxis Equino"},
                {link: "./vertebra-cervical", img: vertebra3a6, description: "3ª~6ª Vértebra cervical Equino"},
                {link: "./7vertebra-cervical", img: vertebra7, description: "7ª Vértebra cervical Equino"},
                {link: "./1vertebra-toracica", img: vertebraToracica1, description: "1ª Vértebra torácica Equino"},
                {link: "./9vertebra-toracica", img: vertebraToracica9, description: "9ª Vértebra torácica Equino"},
                {link: "./15vertebra-toracica", img: vertebraToracica15, description: "15ª Vértebra torácica Equino"},
                {link: "./5vertebra-lombar", img: vertebraLombar5, description: "5ª Vértebra lombar Equino"},
                {link: "./sacro", img: sacro, description: "Sacro Equino"},
                {link: "./esterno", img: esterno, description: "Esterno Equino"},
                ]
                
const EsqueletoAxial = () =>{
    return(
        <div className={`${styles.esqueletoAxial}`}>
            <Back link={"/osteologia-equina"} />
            <TitlePage>Esqueleto axial</TitlePage>
            <div className={styles.esqueletoAxial__modelos}>
                {modelos.map( (modelo) => {
                    return(
                        <LinkModel link={modelo.link} img={modelo.img} description={modelo.description} />
                    )
                } )}
            </div>
        </div>
    )
}

export default EsqueletoAxial;