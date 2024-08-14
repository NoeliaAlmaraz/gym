
import './App.css'
import Espalda from './components/espalda'
import { useState } from 'react';
import Hombro from './components/hombro'
import Biceps from './components/bicep'
import Triceps from './components/tricep'
import Abdominales from './components/Abdominales'
import Pecho from './components/Pecho'
import Pierna from './components/pierna'
import { ContextProvider} from './components/Context';





function App() {

    const [activePanel, setActivePanel] = useState(null);

    const togglePanel = (panel) => {
      setActivePanel((prevPanel) => (prevPanel === panel ? null : panel));
    }

  

  return (
    <ContextProvider>
      <body> 

          <main>
            <div>
              <h2 className='cart-button' onClick={() => togglePanel('ESPALDA')}>ESPALDA</h2>
              {activePanel === 'ESPALDA' && (
                  <Espalda />
              )}
            </div>

            <div>
              <h2 className='cart-button' onClick={() => togglePanel('HOMBRO')}>HOMBRO</h2>
              {activePanel === 'HOMBRO' && (
                  <Hombro />
              )}
            </div>

            <div>
              <h2 className='cart-button' onClick={() => togglePanel('BICEPS')}>BICEPS</h2>
              {activePanel === 'BICEPS' && (
                  <Biceps />
              )}
            </div>

            <div>
              <h2 className='cart-button' onClick={() => togglePanel('TRICEPS')}>TRICEPS</h2>
              {activePanel === 'TRICEPS' && (
                  <Triceps />
              )}
            </div>

            <div>
              <h2 className='cart-button' onClick={() => togglePanel('PIERNACA')}>PIERNACA</h2>
              {activePanel === 'PIERNACA' && (
                  <Pierna />
              )}
            </div>

            <div>
              <h2 className='cart-button' onClick={() => togglePanel('ABDOMINALES')}>ABDOMINALES</h2>
              {activePanel === 'ABDOMINALES' && (
                  <Abdominales />
              )}
            </div>

            <div>
              <h2 className='cart-button' onClick={() => togglePanel('PECHO')}>PECHO</h2>
              {activePanel === 'PECHO' && (
                  <Pecho />
              )}
            </div>
          </main>
    </body>
    </ContextProvider>

      


  )
}

export default App
