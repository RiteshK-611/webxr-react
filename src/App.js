import './App.css';
import './styles.css';
import '@google/model-viewer/dist/model-viewer.min.js';
import hand from './assets/CHAIR.glb';
import chair from './assets/coconchair.usdz';
import QRCode from 'qrcode.react'

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

  if( navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  ) 
  {
    return (
      <div className={App}>
        <model-viewer className="modelviewer" style={modelViewer} src={hand} /* "https://github.com/RiteshK-611/webxr-ar/blob/main/assets/sofa.gltf" */
          ios-src={chair}
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
  else {
    return (
      <div className={App}>
        <model-viewer className="modelviewer" style={modelViewer} src={hand}
          ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
          alt="A 3D model of an astronaut"
          ar
          auto-rotate
          camera-controls> 
        </model-viewer>
        <div style={{display: 'flex', marginLeft: 50}}>
          <QRCode 
            id="1234"
            value={window.location.href}
            size={128}
            bgColor={'#ffffff'}
            fgColor={'#000000'}
            level={'H'}
            includeMargin={true}
          />
          <h5 style={{marginTop: 50}}>QRCode URL: {window.location.href}</h5>
        </div>
      </div>
    );
  }

}

export default App;