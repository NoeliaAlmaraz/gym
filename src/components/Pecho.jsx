import React from 'react'
import { useAppContext } from './Context';
import { useState } from 'react';
import pecho1 from '../assets/pecho-hombro-tricep/pecho1.png'
import pecho2 from '../assets/pecho-hombro-tricep/pecho2.png'
import pecho3 from '../assets/pecho-hombro-tricep/pecho3.png'
import pecho4 from '../assets/pecho-hombro-tricep/pecho4.png'
import pecho5 from '../assets/pecho-hombro-tricep/pecho5.png'
import pecho6 from '../assets/pecho-hombro-tricep/pecho6.png'
import pecho7 from '../assets/pecho-hombro-tricep/pecho7.png'
import pecho8 from '../assets/pecho-hombro-tricep/pecho8.png'
import pecho9 from '../assets/pecho-hombro-tricep/pecho9.png'


export default function Pecho() {
    const { saveDataToFirestorePecho} = useAppContext();

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
            saveDataToFirestorePecho(inputValues, activePanel,activeInputName);
        } else {
            alert('Selecciona un panel antes de guardar.');
        }
        };
    return ( 
                <section>
                    <div>  
                        <button className='cart-button' onClick={() => togglePanel('pecho1')}>
                            <img src={pecho1} alt="pecho1" />
                        </button>
                        {activePanel === 'pecho1' && (
                            <div>
                            <img src={pecho1} alt="pecho1" />
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
                        <button className='cart-button' onClick={() => togglePanel('pecho2')}>
                            <img src={pecho2} alt="pecho2" />
                        </button>
                        {activePanel === 'pecho2' && (
                            <div>
                            <img src={pecho2} alt="pecho2" />
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
                        <button className='cart-button' onClick={() => togglePanel('pecho3')}>
                            <img src={pecho3} alt="pecho3" />
                        </button>
                        {activePanel === 'pecho3' && (
                            <div>
                            <img src={pecho3} alt="pecho3" />
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
                        <button className='cart-button' onClick={() => togglePanel('pecho4')}>
                            <img src={pecho4} alt="pecho4" />
                        </button>
                        {activePanel === 'pecho4' && (
                            <div>
                            <img src={pecho4} alt="pecho4" />
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
                        <button className='cart-button' onClick={() => togglePanel('pecho5')}>
                            <img src={pecho5} alt="pecho5" />
                        </button>
                        {activePanel === 'pecho5' && (
                            <div>
                            <img src={pecho5} alt="pecho5" />
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
                        <button className='cart-button' onClick={() => togglePanel('pecho6')}>
                            <img src={pecho6} alt="pecho6" />
                        </button>
                        {activePanel === 'pecho6' && (
                            <div>
                            <img src={pecho6} alt="pecho6" />
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
                        <button className='cart-button' onClick={() => togglePanel('pecho7')}>
                            <img src={pecho7} alt="pecho7" />
                        </button>
                        {activePanel === 'pecho7' && (
                            <div>
                            <img src={pecho7} alt="pecho7" />
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
                        <button className='cart-button' onClick={() => togglePanel('pecho8')}>
                            <img src={pecho8} alt="pecho8" />
                        </button>
                        {activePanel === 'pecho8' && (
                            <div>
                            <img src={pecho8} alt="pecho8" />
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
                        <button className='cart-button' onClick={() => togglePanel('pecho9')}>
                            <img src={pecho9} alt="pecho9" />
                        </button>
                        {activePanel === 'pecho9' && (
                            <div>
                            <img src={pecho9} alt="pecho9" />
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