export default function QRCard() {
  return (
    <div className="p-4 bg-white rounded-smaller shadow-sm">
      <p className="text-gray-500 font-semibold mb-4">QR</p>
      <div className="flex items-center space-x-10">
        <div className="w-32 h-32 flex-shrink-0">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=QPay"
            alt="QR"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1">
          <p className="text-gray-700 font-medium text-lg">Order QR</p>
          <ul className="text-sm text-gray-500 mt-2 space-y-1">
            <li>• Receive Payment</li>
            <li>• Order new QRs</li>
            <li>• Download QR</li>
          </ul>
        </div>
      </div>
      <button className="mt-6 bg-background-primary text-white px-6 py-2 rounded-lg w-full">
        View more
      </button>
    </div>
  );
}
