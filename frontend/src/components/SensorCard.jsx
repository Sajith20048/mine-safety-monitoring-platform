import React from "react";

function SensorCard({ title, value, unit, status }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
      <h3 className="text-slate-400 text-sm">{title}</h3>

      <h2 className="text-4xl font-bold mt-3">
        {value}
        <span className="text-lg ml-1">{unit}</span>
      </h2>

      <p className="mt-3 text-green-400 font-medium">
        {status}
      </p>
    </div>
  );
}

export default SensorCard;