import Back from "components/Back";
import styles from "./EsqueletoAxial.module.scss";
import TitlePage from "components/TitlePage";
import LinkModel from "components/LinkModel";
import cranio from "assets/cranio-equino.png";

const modelos = [{link: "./cranio", img: cranio, description: "Cranio Equino"}]
const EsqueletoAxial = () =>{
    return(
        <div className={`${styles.esqueletoAxial} content`}>
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