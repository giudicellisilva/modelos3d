import ButtonLink from "components/ButtonLink";
import styles from "./Home.module.scss";
import lapa from "assets/lapa.png"
import facepe from "assets/facepe.png";
import ufape from "assets/ufape.png";

const Home = () =>{
    return(
        <div className={`${styles.home} content`}>
            <img className={styles.home__imgLapa} src={lapa} alt="logo LAPA"/>
            <ButtonLink link={"/osteologia-equina"}>Osteologia Equina</ButtonLink>
            <div className={styles.home__divImgs}>
                <img className={styles.home__imgUfape} src={ufape} alt="logo UFAPE"/>      
                <img className={styles.home__imgFacepe} src={facepe} alt="logo FACEPE" />      
            </div>
        </div>
    )
}

export default Home;