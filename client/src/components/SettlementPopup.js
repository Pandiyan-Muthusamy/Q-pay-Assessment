// SettlementPopup.jsx
export default function SettlementPopup({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-lg w-[400px] p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Popup Content */}
        <h2 className="text-xl font-semibold mb-4">Manage QR/POS</h2>

        <div className="flex justify-between text-lg font-bold">
          <span>Today's Total Collection</span>
          <span>₹1,023</span>
        </div>

        <p className="text-text-primary mt-2 font-medium">Already Settled ₹100</p>

        <div className="mt-4 border-t pt-3 text-gray-700 text-sm space-y-2">
          <p><strong>Amount yet to be settled:</strong> ₹923</p>
          <p><strong>Past pending amount:</strong> ₹0</p>
          <p><strong>Charges:</strong> ₹0</p>
          <p><strong>Name:</strong> IBRAHIM MOHAMMEDALI</p>
          <p><strong>UPI ID:</strong> 092141241127</p>
          <p><strong>Date:</strong> 07, Aug 2024</p>
        </div>

        <div className="mt-5">
          <button
            className="w-full bg-background-primary text-white py-2 rounded-lg hover:bg-background-secondary"
            onClick={onClose}
          >
            Confirm Settlement
          </button>
        </div>
      </div>
    </div>
  );
}
