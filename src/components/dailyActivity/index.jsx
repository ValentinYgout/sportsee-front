import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import "./style.css";


const DailyActivity = ({ sessions }) => {

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const kilogram = payload[0].value;
      const calories = payload[1].value;

      return (
        <div className="custom-tooltip">
          <span>{kilogram}kg</span>
          <span>{calories}Kcal</span>
        </div>
      );
    }

    return null;
  };


  return (
    <div className="daily-activity">
      <div className="chart-header">
        <h2 className="chart-title">Activité quotidienne</h2>
        <div className="legend-container">
          <span className="legend-icon legend-icon-kilogram"></span>
          <span className="legend-text">Kilogram</span>
          <span className="legend-icon legend-icon-calories"></span>
          <span className="legend-text">Calories</span>
        </div>
      </div>
      <BarChart width={700} height={300} data={sessions}>
        <CartesianGrid strokeDasharray="3 3" strokeWidth={1} vertical={false} />
        <XAxis dataKey="day" />
        <YAxis yAxisId="kilogramAxis" axisLine={false} tickLine={false} allowDecimals={false} domain={["dataMin-1", "dataMax+1"]} orientation="right" />
        <YAxis yAxisId="caloriesAxis" hide allowDecimals={false} domain={[0, "dataMax+30"]} />
        <Tooltip content={CustomTooltip} />
        <Bar radius={[5, 5, 0, 0]} dataKey="kilogram" yAxisId="kilogramAxis" fill="#282D30" barSize={10} />
        <Bar radius={[5, 5, 0, 0]} dataKey="calories" yAxisId="caloriesAxis" fill="#E60000" barSize={10} />
      </BarChart>
    </div>
  );
};


export default DailyActivity;