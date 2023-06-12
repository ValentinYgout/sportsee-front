import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import './style.css';

const ObjectiveCompletion = ({ data }) => {
  const completionPercentage = data[0].score;
  const startAngle = 200;
  // creates label to display inside chart
  const renderLabel = ({ cx, cy }) => {
    return (
      <text x={cx} y={cy-15} textAnchor="middle" dominantBaseline="central"   className="completion-label" style={{
        fontWeight: '700',
        fontSize: '14px'
      }}>
        <tspan  style={{
        fontWeight: '700',
        fontSize: '24px',
      }}   fill="#282D30">{`${completionPercentage}%`}</tspan>
        <tspan  fill="#74798C" x={cx+5} dy="20px">de votre objectif</tspan>
      </text>
    );
  };

  return (
    <div className="objective-completion">
       <span className="chart-title">Score</span>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="40%"
          cy="55%"
          innerRadius={75}
          outerRadius={90}
          barSize={10}
          data={data}
          startAngle={startAngle}
          endAngle={startAngle - (completionPercentage * 360) / 100}
        >
          <RadialBar
            minAngle={30}
            background
            clockWise
            dataKey="score"
            fill="#FF0000"
            label={renderLabel}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ObjectiveCompletion;
