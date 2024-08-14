import React from 'react'
import { useAppContext } from './Context';
import { useState } from 'react';
import bicep1 from '../assets/espalda-bicep-trapecio/bicep1.png'
import bicep2 from '../assets/espalda-bicep-trapecio/bicep2.png'
import bicep3 from '../assets/espalda-bicep-trapecio/bicep3.jpeg'
import bicep4 from '../assets/espalda-bicep-trapecio/bicep4.jpeg'
import bicep5 from '../assets/espalda-bicep-trapecio/bicep5.jpeg'
import bicep6 from '../assets/espalda-bicep-trapecio/bicep6.png'


export default function Biceps() {
    const { saveDataToFirestoreBiceps} = useAppContext();

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
            saveDataToFirestoreBiceps(inputValues, activePanel,activeInputName);
        } else {
            alert('Selecciona un panel antes de guardar.');
        }
    };



    return ( 
                <section>
                   <div>  
                    <button className='cart-button' onClick={() => togglePanel('bicep1')}>
                        <img src={bicep1} alt="bicep1" />
                    </button>
                    {activePanel === 'bicep1' && (
                        <div>
                        <img src={bicep1} alt="bicep1" />
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
                    <button className='cart-button' onClick={() => togglePanel('bicep2')}>
                        <img src={bicep2} alt="bicep2" />
                    </button>
                    {activePanel === 'bicep2' && (
                        <div>
                        <img src={bicep2} alt="bicep2" />
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
                    <button className='cart-button' onClick={() => togglePanel('bicep3')}>
                        <img src={bicep3} alt="bicep3" />
                    </button>
                    {activePanel === 'bicep3' && (
                        <div>
                        <img src={bicep3} alt="bicep3" />
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
                    <button className='cart-button' onClick={() => togglePanel('bicep4')}>
                        <img src={bicep4} alt="bicep4" />
                    </button>
                    {activePanel === 'bicep4' && (
                        <div>
                        <img src={bicep4} alt="bicep4" />
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
                    <button className='cart-button' onClick={() => togglePanel('bicep5')}>
                        <img src={bicep5} alt="bicep5" />
                    </button>
                    {activePanel === 'bicep5' && (
                        <div>
                        <img src={bicep5} alt="bicep5" />
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
                    <button className='cart-button' onClick={() => togglePanel('bicep6')}>
                        <img src={bicep6} alt="bicep6" />
                    </button>
                    {activePanel === 'bicep6' && (
                        <div>
                        <img src={bicep6} alt="bicep6" />
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