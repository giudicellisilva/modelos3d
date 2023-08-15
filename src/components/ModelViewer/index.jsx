import "./ModelViewer.scss";

const ModelViewer = ({modelo}) =>{
    return(
        <model-viewer class="modelViewer" src={modelo} camera-controls autoplay touch-action="pan-y">
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