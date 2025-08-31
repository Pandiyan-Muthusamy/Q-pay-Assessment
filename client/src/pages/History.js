import DataTable from "../components/DataTable";
import { DataProvider } from "../context/DataProvider";
import Pagination from "../components/Pagination";
import StatusBadge from "../components/StatusBadge";
import { BASE_URL } from "../api/Client";
import { FaBars, FaRegClock, FaSearch } from "react-icons/fa";
import { TRANSACTION_URL as url } from "../constants/index";
import { useState } from "react";
import SettlementPopup from "../components/SettlementPopup";


const SettlementHistory = () => {
   const [popupOpen, setPopupOpen] = useState(false);
  const API_URL = `${BASE_URL}${url}`;
  const columns = [
    { key: "service_action_type", header: "Action Type" },
    {
      key: "wallet",
      header: "Account",
      render: (wallet) => (
        <span className="flex items-center gap-2">
          {wallet.name}
          <img src={wallet.image} alt="wallet" className="w-5 h-5" />
        </span>
      ),
    },
    { key: "transaction_id", header: "Transaction ID" },
    {
      key: "status",
      header: "Status",
      render: (status) => <StatusBadge status={status} />,
    },
    {
      key: "created_date",
      header: "Created Date",
      render: (date) => new Date(date).toLocaleString(),
    },
    {
      key: "updated_date",
      header: "Updated Data",
      render: (date) => new Date(date).toLocaleString(),
    },
  ];

  return (
    <div className="p-1 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Settlement History</h1>
        <button className="border border-green-600 text-text-primary px-4 py-2 rounded-md hover:bg-green-50">
          Download statement
        </button>
      </div>
      <div className="flex items-center gap-2">
        {" "}
        <span className="text-gray-500">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Search"
          className="flex-1 border rounded-md px-3 py-2 outline-none"
        />
        <button className="bg-background-primary text-white p-2 rounded-md">
          <FaBars />
        </button>
      </div>
      <div className="flex items-center justify-between bg-green-50 border border-green-800 rounded-lg p-4">
        <div className="flex items-center gap-3 text-green-700">
          <span className="text-2xl">
            <FaRegClock />
          </span>
          <p>
            Today’s total collection will be auto-settled by{" "}
            <span className="font-bold">08:00AM, 23rd Oct’22</span> Tomorrow.
          </p>
        </div>
        <button  onClick={() => setPopupOpen(true)} className="bg-background-primary text-white px-5 py-2 rounded-md flex items-center gap-2 hover:bg-green-600">
          <FaRegClock /> Settle Now!
        </button>
      </div>
      <DataProvider apiUrl={API_URL} columns={columns}>
        <DataTable />
        <Pagination />
      </DataProvider>
      <SettlementPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default SettlementHistory;
