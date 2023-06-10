
import React, { useEffect, useState } from 'react';
import "./style.css";



const Card = ({image,name,value}) => {
 



  return (
    <div className='card'>
        <div className="card-logo">{image}</div>
     <div className="card-info">
        <div className="card-value">{value}</div>
        <div className="card-name">{name}</div>
      </div>




    </div>
  );
};

export default Card;