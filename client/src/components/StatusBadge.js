export default function StatusBadge({ status }) {
  const colors = {
    PENDING: "bg-white text-yellow-500 border-yellow-300",
    FAILED: "bg-red-100 text-red-700 border-red-300",
    SUCCESS: "bg-green-100 text-green-700 border-green-300",
  };

  return (
    <span className={`px-3 py-1 rounded-md border text-sm font-medium ${colors[status]?.toLowerCase() || ""}`}>
      {status}
    </span>
  );
}
