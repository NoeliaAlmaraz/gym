import React from 'react'
import { useAppContext } from './Context';
import { useState } from 'react';
import tricep1 from '../assets/pecho-hombro-tricep/tricep1.png'
import tricep2 from '../assets/pecho-hombro-tricep/tricep2.png'
import tricep3 from '../assets/pecho-hombro-tricep/tricep3.png'
import tricep4 from '../assets/pecho-hombro-tricep/tricep4.png'
import tricep5 from '../assets/pecho-hombro-tricep/tricep5.png'
import tricep6 from '../assets/pecho-hombro-tricep/tricep6.png'
import tricep7 from '../assets/pecho-hombro-tricep/tricep7.jpeg'



export default function Triceps() {
    const { saveDataToFirestoreTriceps} = useAppContext();

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
            saveDataToFirestoreTriceps(inputValues, activePanel,activeInputName);
        } else {
            alert('Selecciona un panel antes de guardar.');
        }
        };
    return ( 
                <section>
                    <div>  
                        <button className='cart-button' onClick={() => togglePanel('tricep1')}>
                            <img src={tricep1} alt="tricep1" />
                        </button>
                        {activePanel === 'tricep1' && (
                            <div>
                            <img src={tricep1} alt="tricep1" />
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
                        <button className='cart-button' onClick={() => togglePanel('tricep2')}>
                            <img src={tricep2} alt="tricep2" />
                        </button>
                        {activePanel === 'tricep2' && (
                            <div>
                            <img src={tricep2} alt="tricep2" />
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
                        <button className='cart-button' onClick={() => togglePanel('tricep3')}>
                            <img src={tricep3} alt="tricep3" />
                        </button>
                        {activePanel === 'tricep3' && (
                            <div>
                            <img src={tricep3} alt="tricep3" />
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
                        <button className='cart-button' onClick={() => togglePanel('tricep4')}>
                            <img src={tricep4} alt="tricep4" />
                        </button>
                        {activePanel === 'tricep4' && (
                            <div>
                            <img src={tricep4} alt="tricep4" />
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
                        <button className='cart-button' onClick={() => togglePanel('tricep5')}>
                            <img src={tricep5} alt="tricep5" />
                        </button>
                        {activePanel === 'tricep5' && (
                            <div>
                            <img src={tricep5} alt="tricep5" />
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
                        <button className='cart-button' onClick={() => togglePanel('tricep6')}>
                            <img src={tricep6} alt="tricep6" />
                        </button>
                        {activePanel === 'tricep6' && (
                            <div>
                            <img src={tricep6} alt="tricep6" />
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
                        <button className='cart-button' onClick={() => togglePanel('tricep7')}>
                            <img src={tricep7} alt="tricep7" />
                        </button>
                        {activePanel === 'tricep7' && (
                            <div>
                            <img src={tricep7} alt="tricep7" />
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