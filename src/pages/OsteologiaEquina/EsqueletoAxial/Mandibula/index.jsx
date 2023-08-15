import Modelo from "components/Modelo";
import mandibula from "assets/modelos3d/Mandibula.glb";
import madibulaMiniatura from "assets/miniaturas/Mandíbula.png";

const Mandibula = () =>{
    return(
        <Modelo modelo3d={mandibula} miniature={madibulaMiniatura} description={"indicação da Mandíbula no esqueleto completo"} />
    )
}

export default Mandibula;