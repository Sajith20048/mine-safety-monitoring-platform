import StatusCard from "../components/StatusCard";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Mine Safety Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <StatusCard title="Temperature" value="29" unit="°C" />
        <StatusCard title="Humidity" value="70" unit="%" />
        <StatusCard title="CO" value="12" unit="ppm" />
        <StatusCard title="CO₂" value="800" unit="ppm" />
        <StatusCard title="O₂" value="20.8" unit="%" />
      </div>
    </div>
  );
}

export default Dashboard;