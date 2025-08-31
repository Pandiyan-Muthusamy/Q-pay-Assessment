import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

export default function RequestCard({ request }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(request.status);

  const steps = [
    "QR Request Accepted",
    "Awaiting Production",
    "Awaiting Dispatch",
    "Awaiting Delivery",
  ];

  return (
    <div className="border rounded-xl p-3 shadow-sm bg-white">
      <div className="flex gap-3">
        <img
          src="/assets/QR.png"
          alt="QR"
          className="h-[106px] w-[106px] border rounded"
        />
        <div>
          <p className="font-semibold">{request.name}</p>
          <p className="text-sm text-gray-600">{request.address}</p>
          <p className="text-xs text-gray-400">Requested on {request.date}</p>
        </div>
      </div>
      <div className="mt-3 border rounded-lg bg-green-50 cursor-pointer">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center px-3 py-2 text-text-primary font-medium"
        >
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked
              readOnly
              className="h-4 w-4 accent-background-primary"
            />
            {status}
          </label>
          <button>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</button>
        </div>
        {isOpen && (
          <div className="flex flex-col gap-2 px-5 py-3">
            {steps.map(
              (step, idx) =>
                step !== status && (
                  <label
                    key={idx}
                    className="flex items-center gap-2 text-gray-600 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={`status-${request.id}`}
                      value={step}
                      checked={status === step}
                      onChange={() => setStatus(step)}
                      className="h-4 w-4 accent-background-primary"
                    />
                    {step}
                  </label>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
