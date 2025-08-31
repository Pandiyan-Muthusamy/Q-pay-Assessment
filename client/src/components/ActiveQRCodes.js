export default function ActiveQRCodes({ request }) {
  return (
    <div className="border rounded-xl p-3 shadow-sm flex gap-3 bg-white">
      <img
        src="/assets/QR.png"
        alt="QR"
        className="h-[106px] w-[143px] border rounded"
      />
      <div>
        <p className="font-semibold">{request.code}</p>
        <p className="text-sm text-black-500">{request.type}</p>
        <p className="text-2x1 text-gray-400">{request.terminal}</p>
      </div>
    </div>
  );
}
