import React from "react";
import '../estilos/botonclear.css'


const BotonClear=(props)=> (
    <div className="clear"
    onClick={props.manejarClear}>
        {props.children}
    </div>
);
export default BotonClear;