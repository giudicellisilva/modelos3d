import Back from "components/Back";
import styles from "./EsqueletoApendicularToracico.module.scss";
import TitlePage from "components/TitlePage";
import LinkModel from "components/LinkModel";

import escapula from "assets/escapula-direita-equino.png";

const modelos =[
    {link: "./escapula", img: escapula, description: "Escápula Equino"},
    {link: "./escapula", img: "", description: "Crânio Equino"},
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