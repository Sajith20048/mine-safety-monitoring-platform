function FloorCard({ floor, status, waves }) {
  return (
    <div
      style={{
        background: "#1f2937",
        padding: "20px",
        borderRadius: "12px",
        color: "white",
        marginBottom: "15px",
      }}
    >
      <h3>
        {status} {floor}
      </h3>

      {waves.length > 0 ? (
        <ul>
          {waves.map((wave) => (
            <li key={wave}>{wave}</li>
          ))}
        </ul>
      ) : (
        <p>No Active Waves</p>
      )}
    </div>
  );
}

export default FloorCard;