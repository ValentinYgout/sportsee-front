import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer, Rectangle,Text } from 'recharts';


import "./style.css";


const days=["L","M","M","J","V","S","D"]

const SessionDuration = ({sessions}) => {
const CustomCursor= ({points})=>{
  return( <rect opacity={0.2}  width='100%' height='100%' y="0" x={points[0].x}></rect>)
}

 for (let i = 0; i < sessions.length; i++) {
  sessions[i].day = days[i];
}

const highLength= Math.max(sessions.map((element) => element.sessionLength));

    

  return (
    <div className='session-duration'>
      <span className='duration-title'>Durée moyenne des sessions</span>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={sessions} margin={{ top: 30, right: 30, left: 20, bottom: 30 }}>
        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#FFFFFF' }} />
        <YAxis hide={true} domain={[0, highLength + 10]} />
        <Tooltip
          cursor={<CustomCursor />}
          content={({ payload }) => {
            if (payload && payload.length) {
              const { value } = payload[0];
              return <span className='tooltip'>{value} min</span>;
            }
            return null;
          }}
        />
        <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" dot={false} />
   
      </LineChart>
    </ResponsiveContainer>
  </div>
  );
};

export default SessionDuration;