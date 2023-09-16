import Back from "components/Back";
import styles from "./EsqueletoApendicularToracico.module.scss";
import TitlePage from "components/TitlePage";
import LinkModel from "components/LinkModel";

import escapola from "assets/capas/escapola.png";
import umero from "assets/capas/umero.png";
import radioUlna from "assets/capas/radioEUllna.png";
import carpo from "assets/capas/carpo.png";
import metacarpo from "assets/capas/metacarpo.png";
import falanges from "assets/capas/falanges.png";
import falangeDistal from "assets/capas/falangeDistal.png";

const modelos =[
    {link: "./escapula", img: escapola, description: "Escápula"},
    {link: "./umero", img: umero, description: "Úmero"},
    {link: "./radio-ulna", img: radioUlna, description: "Rádio e Ulna"},
    {link: "./carpo", img: carpo, description: "Carpo"},
    {link: "./metacarpo", img: metacarpo, description: "Metacarpo"},
    {link: "./falanges", img: falanges, description: "Falanges"},
    {link: "./falange-distal", img: falangeDistal, description: "Falange distal"},

]

const EsqueletoApendicularToracico = () =>{

    return(
        <div className={styles.esqueletoApendicularToracico}>
            <Back link={"/osteologia-equina"} />
            <TitlePage>Esqueleto Apendicular Torácico</TitlePage>
            <div className={styles.esqueletoApendicularToracico__modelos}>
                {
                    modelos.map( (modelo) =>{
                        return(
                            <LinkModel link={modelo.link} img={modelo.img} description={modelo.description} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default EsqueletoApendicularToracico;