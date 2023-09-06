import Back from "components/Back";
import styles from "./EsqueletoAxial.module.scss";
import TitlePage from "components/TitlePage";
import LinkModel from "components/LinkModel";
import cranio from "assets/cranio-equino.png";
import madibula from "assets/Captura_mandibula.png";
import atlas from "assets/atlas-equino.png"
import axis from "assets/axis-equino.png";
import vertebra_cervical from "assets/vertebra-cervical-equino.png";
import vertebra7_cervical from "assets/7vertebra-cervical-equino.png";
import vertebra1_toracica from "assets/1vertebra-toracica-equino.png";
import vertebra8_toracica from "assets/8vertebra-toracica-equino.png";
import vertebra15_toracica from "assets/15vertebra-toracica-equino.png";
import vertebra_lombar from "assets/5vertebra-lombar-equino.png";
import sacro from "assets/sacro.png";
import esterno from "assets/esterno.png";

const modelos = [
                {link: "./cranio", img: cranio, description: "Crânio Equino"},
                {link: "./mandibula", img: madibula, description: "Mandíbula Equino"},
                {link: "./atlas", img: atlas, description: "Atlas Equino"},
                {link: "./axis", img: axis, description: "Áxis Equino"},
                {link: "./vertebra-cervical", img: vertebra_cervical, description: "3ª~6ª Vértebra cervical Equino"},
                {link: "./7vertebra-cervical", img: vertebra7_cervical, description: "7ª Vértebra cervical Equino"},
                {link: "./1vertebra-toracica", img: vertebra1_toracica, description: "1ª Vértebra torácica Equino"},
                {link: "./8vertebra-toracica", img: vertebra8_toracica, description: "8ª Vértebra torácica Equino"},
                {link: "./15vertebra-toracica", img: vertebra15_toracica, description: "15ª Vértebra torácica Equino"},
                {link: "./5vertebra-lombar", img: vertebra_lombar, description: "5ª Vértebra lombar Equino"},
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