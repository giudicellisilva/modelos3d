import Back from "components/Back";
import styles from "./OsteologiaEquina.module.scss";
import ButtonLink from "components/ButtonLink";
const OsteologiaEquina = () =>{

    return(
        <div className={`${styles.osteologiaEquina} content`}>
            <Back link="/"/>
            <ButtonLink link="./esqueleto-axial">Esqueleto axial</ButtonLink>
            <ButtonLink link="./esqueleto-apendicular-toracico" >Esqueleto apendicular torácico</ButtonLink>
            <ButtonLink>Esqueleto apendicular pélvico</ButtonLink>
        </div>
    )
}

export default OsteologiaEquina;