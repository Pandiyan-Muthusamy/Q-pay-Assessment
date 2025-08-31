import { useState } from "react";
import RequestCard from "./RequestCard";
import ActiveQRCodes from "./ActiveQRCodes";

const requests = [
  {
    id: 1,
    name: "All Marketing Sales",
    address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004.",
    status: "QR Request Accepted",
    date: "26.04.2024",
  },
  {
    id: 2,
    name: "All Marketing Sales",
    address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004.",
    status: "Awaiting Delivery",
    date: "26.04.2024",
  },
];

const requestCodes = [
  {
    id: 1,
    code: "Q201946579",
    type: "All Marketing Sales- MS1903041155331648980231",
    terminal: "Terminal 1",
  },
  {
    id: 2,
    code: "Q201946579",
    type: "All Marketing Sales- MS1903041155331648980231",
    terminal: "Terminal 2",
  },
  {
    id: 3,
    code: "Q201946579",
    type: "All Marketing Sales- MS1903041155331648980231",
    terminal: "Terminal 3",
  },
];

export default function QRRequests() {
  const [active, setActive] = useState("active");

  return (
    <div className="border p-4 ounded-smaller shadow-sm">
      <div className="inline-flex border bg-background-primary rounded-md overflow-hidden mb-4">
        <button
          onClick={() => setActive("active")}
          className={`px-6 py-2 text-sm font-medium transition-colors ${
            active === "active"
              ? "bg-background-primary text-white"
              : "bg-white text-text-primary"
          }`}
        >
          Active QR Codes
        </button>
        <button
          onClick={() => setActive("requests")}
          className={`px-6 py-2 text-sm font-medium transition-colors ${
            active === "requests"
              ? "bg-background-primary text-white"
              : "bg-white text-text-primary"
          }`}
        >
          QR Code Requests
        </button>
      </div>
      {active === "active" && (
        <div className="flex flex-col gap-3">
          {requestCodes.map((req) => (
            <ActiveQRCodes key={req.id} request={req} />
          ))}
        </div>
      )}
      {active === "requests" && (
        <div className="flex flex-col gap-3">
          {requests.map((req) => (
            <RequestCard key={req.id} request={req} />
          ))}
        </div>
      )}
      <button className="mt-4 w-full px-4 py-2 bg-background-primary text-white rounded-xl">
        Request more QR Codes
      </button>
    </div>
  );
}
