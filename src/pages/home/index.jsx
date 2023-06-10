

import React, { useContext }  from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import { ApiContext } from '../../context/context';





const Home = () => {

  const { apiToUse, toggleApi } = useContext(ApiContext);


  return (
<div className="home">
<Link to ="/12">userId:12</Link>
<Link to ="/18">userId:18</Link>
<button onClick={toggleApi}>Toggle Api</button>
<p>currently using: {apiToUse}</p>

</div>
  );
};

export default Home;