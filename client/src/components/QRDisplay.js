import { Download, Share2 } from "lucide-react";

export default function QRDisplay() {
  return (
    <div className="flex flex-col items-center border p-6 rounded-2xl shadow bg-white">
      <img src="/assets/QR.png" alt="QR Code" className="w-50 h-50 mb-4" />
      <p className="text-gray-700 font-medium">
        UPI ID: <span className="font-bold">9876543210@qpay</span>
      </p>
      <p className="text-sm text-gray-500 mb-4">Ibrahim Mohammedali</p>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-md">
          <Download size={18} /> Download
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-md">
          <Share2 size={18} /> Share
        </button>
      </div>
    </div>
  );
}
