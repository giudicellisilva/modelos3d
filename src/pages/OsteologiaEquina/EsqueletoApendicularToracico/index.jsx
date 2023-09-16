import Back from "components/Back";
import styles from "./EsqueletoApendicularToracico.module.scss";
import TitlePage from "components/TitlePage";
import LinkModel from "components/LinkModel";

import prov from "assets/prov.jpg";

const modelos =[
    {link: "./escapula", img: prov  , description: "Escápula Equino"},
    {link: "./umero", img: prov, description: "Úmero Equino"},
    {link: "./radio-unal", img: prov, description: "Rádio e Unal Equino"},
    {link: "./carpo", img: prov, description: "Carpo Equino"},
    {link: "./metacarpo", img: prov, description: "Metacarpo Equino"},
    {link: "./falanges", img: prov, description: "Falanges Equino"},
    {link: "./falange-distal", img: prov, description: "Falange distal Equino"},

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