
import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';



import "./style.css";



const ActivityTypes = ({data}) => {


  for (let i = 0; i < data.data.length; i++) {
    data.data[i].kind= data.kind[i+1]
  }


 
    

  return (
    <div className='activity-types'>
         <ResponsiveContainer width="100%" height="100%">
        <RadarChart   cx="50%" cy="50%" outerRadius="55%" data={data.data}>
          <PolarGrid gridType="polygon" radialLines={false}  />
          <PolarAngleAxis   dataKey="kind"  tick={{ fill: "white", fontSize: 11 }}   />
          <Radar name="kind" dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.9} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityTypes;