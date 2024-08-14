import React from 'react'
import { useAppContext } from './Context';
import { useState } from 'react';
import hombro1 from '../assets/pecho-hombro-tricep/hombro1.png'
import hombro2 from '../assets/pecho-hombro-tricep/hombro2.png'
import hombro3 from '../assets/pecho-hombro-tricep/hombro3.png'
import hombro4 from '../assets/pecho-hombro-tricep/hombro4.png'
import hombro5 from '../assets/pecho-hombro-tricep/hombro5.png'
import hombro6 from '../assets/pecho-hombro-tricep/hombro6.png'
import hombro7 from '../assets/pecho-hombro-tricep/hombro7.png'


export default function Hombro() {
    const { saveDataToFirestoreHombro} = useAppContext();

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
            saveDataToFirestoreHombro(inputValues, activePanel,activeInputName);
        } else {
            alert('Selecciona un panel antes de guardar.');
        }
    };

    return ( 
                <section>
                    <div>  
                        <button className='cart-button' onClick={() => togglePanel('hombro1')}>
                            <img src={hombro1} alt="hombro1" />
                        </button>
                        {activePanel === 'hombro1' && (
                            <div>
                            <img src={hombro1} alt="hombro1" />
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
                        <button className='cart-button' onClick={() => togglePanel('hombro2')}>
                            <img src={hombro2} alt="hombro2" />
                        </button>
                        {activePanel === 'hombro2' && (
                            <div>
                            <img src={hombro2} alt="hombro2" />
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
                        <button className='cart-button' onClick={() => togglePanel('hombro3')}>
                            <img src={hombro3} alt="hombro3" />
                        </button>
                        {activePanel === 'hombro3' && (
                            <div>
                            <img src={hombro3} alt="hombro3" />
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
                        <button className='cart-button' onClick={() => togglePanel('hombro4')}>
                            <img src={hombro4} alt="hombro4" />
                        </button>
                        {activePanel === 'hombro4' && (
                            <div>
                            <img src={hombro4} alt="hombro4" />
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
                        <button className='cart-button' onClick={() => togglePanel('hombro5')}>
                            <img src={hombro5} alt="hombro5" />
                        </button>
                        {activePanel === 'hombro5' && (
                            <div>
                            <img src={hombro5} alt="hombro5" />
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
                        <button className='cart-button' onClick={() => togglePanel('hombro6')}>
                            <img src={hombro6} alt="hombro6" />
                        </button>
                        {activePanel === 'hombro6' && (
                            <div>
                            <img src={hombro6} alt="hombro6" />
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
                        <button className='cart-button' onClick={() => togglePanel('hombro7')}>
                            <img src={hombro7} alt="hombro7" />
                        </button>
                        {activePanel === 'hombro7' && (
                            <div>
                            <img src={hombro7} alt="hombro7" />
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