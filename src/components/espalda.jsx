import React from 'react'
import { useState } from 'react';
import espalda1 from '../assets/espalda-bicep-trapecio/espalda1.png'
import espalda2 from '../assets/espalda-bicep-trapecio/espalda2.png'
import espalda3 from '../assets/espalda-bicep-trapecio/espalda3.png'
import espalda4 from '../assets/espalda-bicep-trapecio/espalda4.png'
import espalda5 from '../assets/espalda-bicep-trapecio/espalda5.png'
import espalda6 from '../assets/espalda-bicep-trapecio/espalda6.png'
import espalda7 from '../assets/espalda-bicep-trapecio/espalda7.png'
import espalda8 from '../assets/espalda-bicep-trapecio/espalda8.png'
import espalda9 from '../assets/espalda-bicep-trapecio/espalda9.png'
import espalda10 from '../assets/espalda-bicep-trapecio/espalda10.png'
import espalda11 from '../assets/espalda-bicep-trapecio/espalda11.png' 
import espalda12 from '../assets/espalda-bicep-trapecio/espalda12.png'
import espalda13 from '../assets/espalda-bicep-trapecio/espalda13.png'
import espalda14 from '../assets/espalda-bicep-trapecio/espalda14.png'
import espalda15 from '../assets/espalda-bicep-trapecio/espalda15.png'
import { useAppContext } from './Context';


export default function Espalda() {
    const { saveDataToFirestoreEspalda} = useAppContext();

    const [activePanel, setActivePanel] = useState(null);
    const [activeInputName, setActiveInputName] = useState('');

    const togglePanel = (panel) => {
      setActivePanel((prevPanel) => (prevPanel === panel ? null : panel));
    }


    const [inputValues, setInputValues] = useState({
        noelia: '',
        abel: '',
        claudia: '',
        annie: ''
      });

      
      

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
        setActiveInputName(name);

      };




      const handleSave = () => {
        if (activePanel) {
            saveDataToFirestoreEspalda(inputValues, activePanel,activeInputName);
        } else {
            alert('Selecciona un panel antes de guardar.');
        }
    };


    return ( 
                <section>
                    <div>  
                    <button className='cart-button' onClick={() => togglePanel('espalda1')}>
                        <img src={espalda1} alt="espalda1" />
                    </button>
                    {activePanel === 'espalda1' && (
                        <div>
                        <img src={espalda1} alt="espalda1" />
                        <input
                            type="number"
                            placeholder="peso Noe"
                            name="noelia"
                            value={inputValues.noe}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Abel"
                            name="abel"
                            value={inputValues.abel}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Clau"
                            name="claudia"
                            value={inputValues.clau}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Annie"
                            name="annie"
                            value={inputValues.annie}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSave}>Guardar</button>
                        </div>
                    )}
                    </div>
                    <div>
                        <button className='cart-button' onClick={() => togglePanel('espalda2')}><img src={espalda2} alt="espalda2"></img></button>
                        {activePanel === 'espalda2' && (
                        <div>
                        <img src={espalda2} alt="espalda2" />
                        <input
                            type="number"
                            placeholder="peso Noe"
                            name="noelia"
                            value={inputValues.noe}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Abel"
                            name="abel"
                            value={inputValues.abel}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Clau"
                            name="claudia"
                            value={inputValues.clau}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Annie"
                            name="annie"
                            value={inputValues.annie}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSave}>Guardar</button>
                        </div>
                        )}
                    </div>
                    <div>
                        <button className='cart-button' onClick={() => togglePanel('espalda3')}><img src={espalda3} alt="espalda3"></img></button>
                        {activePanel === 'espalda3' && (
                            <div>
                        <img src={espalda3} alt="espalda3" />
                        <input
                            type="number"
                            placeholder="peso Noe"
                            name="noelia"
                            value={inputValues.noe}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Abel"
                            name="abel"
                            value={inputValues.abel}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Clau"
                            name="claudia"
                            value={inputValues.clau}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Annie"
                            name="annie"
                            value={inputValues.annie}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSave}>Guardar</button>
                        </div>
                        )}
                    </div>
                    <div>
                        <button className='cart-button' onClick={() => togglePanel('espalda4')}><img src={espalda4} alt="espalda4"></img></button>
                        {activePanel === 'espalda4' && (
                            <div>
                        <img src={espalda4} alt="espalda4" />
                        <input
                            type="number"
                            placeholder="peso Noe"
                            name="noelia"
                            value={inputValues.noe}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Abel"
                            name="abel"
                            value={inputValues.abel}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Clau"
                            name="claudia"
                            value={inputValues.clau}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Annie"
                            name="annie"
                            value={inputValues.annie}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSave}>Guardar</button>
                        </div>
                        )}
                    </div>
                    <div>  
                        <button className='cart-button' onClick={() => togglePanel('espalda5')}><img src={espalda5} alt="espalda5"></img></button>
                        {activePanel === 'espalda5' && (
                            <div>
                        <img src={espalda5} alt="espalda5" />
                        <input
                            type="number"
                            placeholder="peso Noe"
                            name="noelia"
                            value={inputValues.noe}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Abel"
                            name="abel"
                            value={inputValues.abel}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Clau"
                            name="claudia"
                            value={inputValues.clau}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Annie"
                            name="annie"
                            value={inputValues.annie}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSave}>Guardar</button>
                        </div>
                        )}
                    </div>
                    <div>  
                        <button className='cart-button' onClick={() => togglePanel('espalda6')}><img src={espalda6} alt="espalda6"></img></button>
                        {activePanel === 'espalda6' && (
                            <div>
                        <img src={espalda6} alt="espalda6" />
                        <input
                            type="number"
                            placeholder="peso Noe"
                            name="noelia"
                            value={inputValues.noe}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Abel"
                            name="abel"
                            value={inputValues.abel}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Clau"
                            name="claudia"
                            value={inputValues.clau}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Annie"
                            name="annie"
                            value={inputValues.annie}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSave}>Guardar</button>
                        </div>
                        )}
                    </div>
                    <div>  
                        <button className='cart-button' onClick={() => togglePanel('espalda7')}><img src={espalda7} alt="espalda7"></img></button>
                        {activePanel === 'espalda7' && (
                            <div>
                        <img src={espalda7} alt="espalda7" />
                        <input
                            type="number"
                            placeholder="peso Noe"
                            name="noelia"
                            value={inputValues.noe}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Abel"
                            name="abel"
                            value={inputValues.abel}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Clau"
                            name="claudia"
                            value={inputValues.clau}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Annie"
                            name="annie"
                            value={inputValues.annie}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSave}>Guardar</button>
                        </div>
                        )}
                    </div>
                    <div>  
                        <button className='cart-button' onClick={() => togglePanel('espalda8')}><img src={espalda8} alt="espalda8"></img></button> 
                        {activePanel === 'espalda8' && (
                            <div>
                        <img src={espalda8} alt="espalda8" />
                        <input
                            type="number"
                            placeholder="peso Noe"
                            name="noelia"
                            value={inputValues.noe}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Abel"
                            name="abel"
                            value={inputValues.abel}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Clau"
                            name="claudia"
                            value={inputValues.clau}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Annie"
                            name="annie"
                            value={inputValues.annie}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSave}>Guardar</button>
                        </div>
                        )}
                    </div>
                    <div>  
                        <button className='cart-button' onClick={() => togglePanel('espalda9')}><img src={espalda9} alt="espalda9"></img></button>
                        {activePanel === 'espalda9' && (
                            <div>
                        <img src={espalda9} alt="espalda9" />
                        <input
                            type="number"
                            placeholder="peso Noe"
                            name="noelia"
                            value={inputValues.noe}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Abel"
                            name="abel"
                            value={inputValues.abel}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Clau"
                            name="claudia"
                            value={inputValues.clau}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Annie"
                            name="annie"
                            value={inputValues.annie}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSave}>Guardar</button>
                        </div>
                        )}
                    </div>
                    <div>  
                        <button className='cart-button' onClick={() => togglePanel('espalda10')}><img src={espalda10} alt="espalda10"></img></button>
                        {activePanel === 'espalda10' && ( 
                            <div>
                        <img src={espalda10} alt="espalda10" />
                        <input
                            type="number"
                            placeholder="peso Noe"
                            name="noelia"
                            value={inputValues.noe}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Abel"
                            name="abel"
                            value={inputValues.abel}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Clau"
                            name="claudia"
                            value={inputValues.clau}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Annie"
                            name="annie"
                            value={inputValues.annie}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSave}>Guardar</button>
                        </div>
                        )}  
                    </div>
                    <div>
                        <button className='cart-button' onClick={() => togglePanel('espalda11')}><img src={espalda11} alt="espalda11"></img></button>
                        {activePanel === 'espalda11' && (
                            <div>
                        <img src={espalda11} alt="espalda11" />
                        <input
                            type="number"
                            placeholder="peso Noe"
                            name="noelia"
                            value={inputValues.noe}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Abel"
                            name="abel"
                            value={inputValues.abel}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Clau"
                            name="claudia"
                            value={inputValues.clau}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Annie"
                            name="annie"
                            value={inputValues.annie}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSave}>Guardar</button>
                        </div>
                        )}
                    </div>
                    <div>
                        <button className='cart-button' onClick={() => togglePanel('espalda12')}><img src={espalda12} alt="espalda12"></img></button>
                        {activePanel === 'espalda12' && (
                            <div>
                        <img src={espalda12} alt="espalda12" />
                        <input
                            type="number"
                            placeholder="peso Noe"
                            name="noelia"
                            value={inputValues.noe}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Abel"
                            name="abel"
                            value={inputValues.abel}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Clau"
                            name="claudia"
                            value={inputValues.clau}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Annie"
                            name="annie"
                            value={inputValues.annie}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSave}>Guardar</button>
                        </div>
                        )}
                    </div>
                    <div>
                        <button className='cart-button' onClick={() => togglePanel('espalda13')}><img src={espalda13} alt="espalda13"></img></button>
                        {activePanel === 'espalda13' && (
                            <div>
                        <img src={espalda13} alt="espalda13" />
                        <input
                            type="number"
                            placeholder="peso Noe"
                            name="noelia"
                            value={inputValues.noe}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Abel"
                            name="abel"
                            value={inputValues.abel}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Clau"
                            name="claudia"
                            value={inputValues.clau}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Annie"
                            name="annie"
                            value={inputValues.annie}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSave}>Guardar</button>
                        </div>
                        )}
                    </div>
                    <div>
                        <button className='cart-button' onClick={() => togglePanel('espalda14')}><img src={espalda14} alt="espalda14"></img></button>
                        {activePanel === 'espalda14' && (
                            <div>
                        <img src={espalda14} alt="espalda14" />
                        <input
                            type="number"
                            placeholder="peso Noe"
                            name="noelia"
                            value={inputValues.noe}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Abel"
                            name="abel"
                            value={inputValues.abel}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Clau"
                            name="claudia"
                            value={inputValues.clau}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Annie"
                            name="annie"
                            value={inputValues.annie}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSave}>Guardar</button>
                        </div>
                        )}
                    </div>
                    <div>
                        <button className='cart-button' onClick={() => togglePanel('espalda15')}><img src={espalda15} alt="espalda15"></img></button>
                        {activePanel === 'espalda15' && (
                            <div>
                        <img src={espalda15} alt="espalda15" />
                        <input
                            type="number"
                            placeholder="peso Noe"
                            name="noelia"
                            value={inputValues.noe}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Abel"
                            name="abel"
                            value={inputValues.abel}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Clau"
                            name="claudia"
                            value={inputValues.clau}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="peso Annie"
                            name="annie"
                            value={inputValues.annie}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSave}>Guardar</button>
                        </div>
                        )}
                    </div>
                </section>
     )
}


