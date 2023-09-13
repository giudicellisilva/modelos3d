import Back from "components/Back";
import styles from "./EsqueletoApendicularPelvico.module.scss";
import TitlePage from "components/TitlePage";
import LinkModel from "components/LinkModel";

import prov from "assets/prov.jpg";

const modelos =[
    {link: "./pelve", img: prov  , description: "Pelve Equino"},
    {link: "./femur", img: prov, description: "Fêmur Equino"},
    {link: "./patela", img: prov, description: "Patela Equino"},
    {link: "./tibia", img: prov, description: "Tíbia Equino"},
    {link: "./tarso", img: prov, description: "Tarso Equino"},
    {link: "./metatarso", img: prov, description: "Metatarso Equino"},
    {link: "./falanges", img: prov, description: "Falanges Equino"},
    {link: "./falange-distal", img: prov, description: "Falange distal Equino"},

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