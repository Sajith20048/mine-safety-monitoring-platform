import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "08:00", temp: 27 },
  { time: "09:00", temp: 28 },
  { time: "10:00", temp: 29 },
  { time: "11:00", temp: 30 },
  { time: "12:00", temp: 29 },
  { time: "13:00", temp: 31 },
  { time: "14:00", temp: 30 },
];

function TemperatureChart() {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
      <h2 className="text-xl font-bold mb-4">
        Temperature Trend (24 Hours)
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="time" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="temp"
              stroke="#22c55e"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TemperatureChart;