// ModelViewer.jsx (Versão Final Limpa)

import "./ModelViewer.scss";

const ModelViewer = ({modelo, exposicao}) =>{ 
    
    const exposicaoFinal = exposicao || "1.0"; 

    return(
        <model-viewer 
            class="modelViewer" 
            src={modelo} 
            camera-controls 
            autoplay 
            touch-action="pan-y"
            
            exposure={exposicaoFinal}
            environment-image="neutral"
            shadow-intensity="0.1" 
            tone-mapping="neutral" 
        >
            <div class="progress-bar hide" slot="progress-bar">
                <div class="update-bar"></div>
            </div>
            <button slot="ar-button" id="ar-button">
                View in your space
            </button>
        </model-viewer>
    )
}

export default ModelViewer;