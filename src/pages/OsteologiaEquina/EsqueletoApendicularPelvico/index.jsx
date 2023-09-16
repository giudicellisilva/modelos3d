import Back from "components/Back";
import styles from "./EsqueletoApendicularPelvico.module.scss";
import TitlePage from "components/TitlePage";
import LinkModel from "components/LinkModel";

import pelve from "assets/capas/pelve.png";
import femur from "assets/capas/femur.png";
import paleta from "assets/capas/patela.png";
import tibia from "assets/capas/tibia.png";
import tarso from "assets/capas/tarso.png";
import metatarso from "assets/capas/metatarso.png";
import falanges from "assets/capas/falanges.png";
import falangeDistal from "assets/capas/falangeDistal.png";

const modelos =[
    {link: "./pelve", img: pelve  , description: "Pelve Equino"},
    {link: "./femur", img: femur, description: "Fêmur Equino"},
    {link: "./patela", img: paleta, description: "Patela Equino"},
    {link: "./tibia", img: tibia, description: "Tíbia Equino"},
    {link: "./tarso", img: tarso, description: "Tarso Equino"},
    {link: "./metatarso", img: metatarso, description: "Metatarso Equino"},
    {link: "./falanges", img: falanges, description: "Falanges Equino"},
    {link: "./falange-distal-pelvico", img: falangeDistal, description: "Falange distal Equino"},

]

const EsqueletoApendicularPelvico = () =>{

    return(
        <div className={styles.esqueletoApendicularPelvico}>
            <Back link={"/osteologia-equina"} />
            <TitlePage>Esqueleto Apendicular Pélvico</TitlePage>
            <div className={styles.esqueletoApendicularPelvico__modelos}>
                {
                    modelos.map( (modelo) =>{
                        return(
                            <LinkModel link={modelo.link} img={modelo.img} description={modelo.description}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default EsqueletoApendicularPelvico;