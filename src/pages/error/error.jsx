

import React, { useContext }  from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import { ApiContext } from '../../context/context';





const Error = () => {

  const { apiToUse } = useContext(ApiContext);


  return (
<div className="error">
<p>ERROR when attempting to fetch: {apiToUse}</p>
<Link  className='backHome' to ="/">Click here to go back to home page</Link>


</div>
  );
};

export default Error;