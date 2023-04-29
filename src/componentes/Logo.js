import React from "react";
import Free from '../imagen/Free.jpg'



 export const Img = ({free}) => (

    <div className="free-contenedor">
    <img
    className="free"
    src={Free}
    alt="Logo"/>
    {free}
  </div>
    );


