import { LayoutDashboard, Map, BarChart3, Settings } from "lucide-react";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#111827",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>Bogala Mine</h2>

      <div style={{ marginTop: "30px" }}>
        <p><LayoutDashboard size={18} /> Dashboard</p>
        <p><Map size={18} /> Mine Map</p>
        <p><BarChart3 size={18} /> Analytics</p>
        <p><Settings size={18} /> Settings</p>
      </div>
    </div>
  );
}

export default Sidebar;