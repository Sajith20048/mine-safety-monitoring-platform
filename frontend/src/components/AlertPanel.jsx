function AlertPanel() {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
      <h2 className="text-xl font-bold mb-4">
        Active Alerts
      </h2>

      <div className="space-y-3">
        <div className="bg-yellow-500/10 p-3 rounded-lg">
          ⚠️ Floor 2 - Wave 1 CO Warning
        </div>

        <div className="bg-red-500/10 p-3 rounded-lg">
          🚨 Floor 2 - Wave 3 Low Oxygen
        </div>
      </div>
    </div>
  );
}

export default AlertPanel;