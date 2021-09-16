import './App.css';
import './styles.css';
import '@google/model-viewer/dist/model-viewer.min.js';
import hand from './assets/hand.png';

function App() {
  const modelViewer = {
    backgroundColor: "#eee",
    overflowX: "hidden",
    posterColor: "#eee",
    width: 400,
    height: 300,
    borderRadius: 10,
    marginTop: 40,
    marginLeft: 40,
  }

  return (
    <div className={App}>
      <model-viewer className="modelviewer" style={modelViewer} src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
        ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
        alt="A 3D model of an astronaut"
        ar
        auto-rotate
        camera-controls> 

        <button slot="ar-button" className="arbutton">
          View in your space
        </button>

      </model-viewer>
    </div>
  );
}

export default App;