import React, { useEffect, useState } from 'react';




import "./style.css";



const Hello = ({name}) => {
    return (
 <div className="hello">

     <span className='hello-top'>Bonjour  <span className="name">{name}</span></span>
     <span className='congratulations'>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
     
 </div>
    );
};

export default Hello;