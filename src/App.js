import Boton from'./components/boton';
import './App.css';
import Free from './imagen/react.jpg';
import Pantalla from './components/pantalla';
import './style/pantalla.css'
import BotonClear from './components/botonclear';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [ input , setInput ] = useState ('');
  const agregarInput = val =>{
   setInput (input+val);
  };
  const calcularRespuesta = () =>{
    if (input){
    setInput (evaluate(input));
  } else {
      alert ( 'ingrese valores para realizar el calculo.')
    };
  }


  return (
    <div className="App">
    <div className="free-contenedor">
      <img
      className="react"
      src={Free}
      alt="Logo"/>
    </div>
    <div className='contenedor-principal'>

      <Pantalla input={input}/>

    <div className='fila'>
    <Boton manejarClic={agregarInput}>1</Boton>
    <Boton manejarClic={agregarInput}>2</Boton>
    <Boton manejarClic={agregarInput}>3</Boton>
    <Boton manejarClic={agregarInput}>+</Boton>
    </div>
  
    <div className='fila'>
    <Boton manejarClic={agregarInput}>4</Boton>
    <Boton manejarClic={agregarInput}>5</Boton>
    <Boton manejarClic={agregarInput}>6</Boton>
    <Boton manejarClic={agregarInput}>-</Boton>
    </div>
    <div className='fila'>
    <Boton manejarClic={agregarInput}>7</Boton>
    <Boton manejarClic={agregarInput}>8</Boton>
    <Boton manejarClic={agregarInput}>9</Boton>
    <Boton manejarClic={agregarInput}>*</Boton>
    </div>
    <div className='fila'>
    <Boton manejarClic={calcularRespuesta}>=</Boton>
    <Boton manejarClic={agregarInput}>0</Boton>
    <Boton manejarClic={agregarInput}>.</Boton>
    <Boton manejarClic={agregarInput}>/</Boton>
    </div>
    <div className='fila'>
    <BotonClear manejarClear={()=>setInput(' ')}>Borrar</BotonClear>
    </div> 
    </div>
    </div>
  );
}

export default App;
