import QRDisplay from "../components/QRDisplay";
import QRRequests from "../components/QRRequests";

export default function QR() {
  return (
    <div className="flex flex-col p-1">
      <h2 className="text-xl font-bold mb-4">Manage QR/POS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <QRDisplay />
        <QRRequests />
      </div>
    </div>
  );
}
