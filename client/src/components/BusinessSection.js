import { FaUniversity, FaIdCard, FaBriefcase, FaQrcode } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const BusinessSection = () => {
  const items = [
    {
      Icon: FaUniversity,
      title: "XXXX 9820",
      description: "ICICI Bank | Chennai Egmore Branch",
    },
    {
      Icon: FaBriefcase,
      title: "Business Profile",
      description: "View and edit your business details",
    },
    {
      Icon: FaIdCard,
      title: "KYC Verification",
      description: "Unlock exclusive benefits with KYC",
    },
    {
      Icon: FaQrcode,
      title: "Order QR",
      description: "Get paid, manage & order QRs",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-6">
      {items.map((item, index) => (
        <ServiceCard key={index} {...item} />
      ))}
    </div>
  );
};

export default BusinessSection;
