import React from 'react'
import { useAppContext } from './Context';
import { useState } from 'react';
import pierna1 from '../assets/pierna-abdominales/pierna1.png'
import pierna2 from '../assets/pierna-abdominales/pierna2.png'
import pierna3 from '../assets/pierna-abdominales/pierna3.png'
import pierna4 from '../assets/pierna-abdominales/pierna4.png'
import pierna5 from '../assets/pierna-abdominales/pierna5.png'
import pierna6 from '../assets/pierna-abdominales/pierna6.png'
import pierna7 from '../assets/pierna-abdominales/pierna7.png'
import pierna8 from '../assets/pierna-abdominales/pierna8.png'
import pierna9 from '../assets/pierna-abdominales/pierna9.png'
import pierna10 from '../assets/pierna-abdominales/pierna10.png'
import pierna11 from '../assets/pierna-abdominales/pierna11.png'


export default function Pierna() {
    const { saveDataToFirestorePierna} = useAppContext();

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
            saveDataToFirestorePierna(inputValues, activePanel,activeInputName);
        } else {
            alert('Selecciona un panel antes de guardar.');
        }
        };
    return ( 
                <section>
                    <div>  
                        <button className='cart-button' onClick={() => togglePanel('pierna1')}>
                            <img src={pierna1} alt="pierna1" />
                        </button>
                        {activePanel === 'pierna1' && (
                            <div>
                            <img src={pierna1} alt="pierna1" />
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
                        <button className='cart-button' onClick={() => togglePanel('pierna2')}>
                            <img src={pierna2} alt="pierna2" />
                        </button>
                        {activePanel === 'pierna2' && (
                            <div>
                            <img src={pierna2} alt="pierna2" />
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
                        <button className='cart-button' onClick={() => togglePanel('pierna3')}>
                            <img src={pierna3} alt="pierna3" />
                        </button>
                        {activePanel === 'pierna3' && (
                            <div>
                            <img src={pierna3} alt="pierna3" />
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
                        <button className='cart-button' onClick={() => togglePanel('pierna4')}>
                            <img src={pierna4} alt="pierna4" />
                        </button>
                        {activePanel === 'pierna4' && (
                            <div>
                            <img src={pierna4} alt="pierna4" />
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
                        <button className='cart-button' onClick={() => togglePanel('pierna5')}>
                            <img src={pierna5} alt="pierna5" />
                        </button>
                        {activePanel === 'pierna5' && (
                            <div>
                            <img src={pierna5} alt="pierna5" />
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
                        <button className='cart-button' onClick={() => togglePanel('pierna6')}>
                            <img src={pierna6} alt="pierna6" />
                        </button>
                        {activePanel === 'pierna6' && (
                            <div>
                            <img src={pierna6} alt="pierna6" />
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
                        <button className='cart-button' onClick={() => togglePanel('pierna7')}>
                            <img src={pierna7} alt="pierna7" />
                        </button>
                        {activePanel === 'pierna7' && (
                            <div>
                            <img src={pierna7} alt="pierna7" />
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
                        <button className='cart-button' onClick={() => togglePanel('pierna8')}>
                            <img src={pierna8} alt="pierna8" />
                        </button>
                        {activePanel === 'pierna8' && (
                            <div>
                            <img src={pierna8} alt="pierna8" />
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
                        <button className='cart-button' onClick={() => togglePanel('pierna9')}>
                            <img src={pierna9} alt="pierna9" />
                        </button>
                        {activePanel === 'pierna9' && (
                            <div>
                            <img src={pierna9} alt="pierna9" />
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
                        <button className='cart-button' onClick={() => togglePanel('pierna10')}>
                            <img src={pierna10} alt="pierna10" />
                        </button>
                        {activePanel === 'pierna10' && (
                            <div>
                            <img src={pierna10} alt="pierna10" />
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
                        <button className='cart-button' onClick={() => togglePanel('pierna11')}>
                            <img src={pierna11} alt="pierna11" />
                        </button>
                        {activePanel === 'pierna11' && (
                            <div>
                            <img src={pierna11} alt="pierna11" />
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