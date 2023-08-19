import React from "react";
import '../style/botonclear.css'


const BotonClear=(props)=> (
    <div className="clear"
    onClick={props.manejarClear}>
        {props.children}
    </div>
);
export default BotonClear;