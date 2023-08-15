import ModelViewer from "components/ModelViewer";
import cranio from "assets/modelos3d/Cranio.glb"
import Back from "components/Back";
import Miniature from "components/Miniature";
import cranioMiniature from "assets/miniaturas/Crânio.png";
import Modelo from "components/Modelo";

const Cranio = () =>{
    return(
       <Modelo modelo3d={cranio} miniature={cranioMiniature} description={"indicação do crânio no esqueleto completo"}/>
    )
}

export default Cranio;