import { FaHome, FaQrcode, FaHistory, FaUserCircle } from "react-icons/fa";

export const NAV_ITEMS = [
  { name: "Home", key: "home", icon: <FaHome size={18} /> },
  { name: "QR", key: "qr", icon: <FaQrcode size={18} /> },
  {
    name: "History",
    key: "history",
    icon: <FaHistory size={18} />,
    children: [
      {
        name: "Transaction History",
        key: "payments",
        icon: <FaHistory size={18} />,
      },
      {
        name: "Settlement History",
        key: "transactions",
        icon: <FaHistory size={18} />,
      },
    ],
  },
  { name: "Profile", key: "profile", icon: <FaUserCircle size={18} /> },
];

export const TRANSACTION_URL = "/api/transactions";
