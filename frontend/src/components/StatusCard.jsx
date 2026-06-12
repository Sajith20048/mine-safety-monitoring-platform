function StatusCard({ title, value, unit }) {
  return (
    <div
      style={{
        background: "#1f2937",
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        minWidth: "180px",
      }}
    >
      <h3>{title}</h3>
      <h1>
        {value} {unit}
      </h1>
    </div>
  );
}

export default StatusCard;