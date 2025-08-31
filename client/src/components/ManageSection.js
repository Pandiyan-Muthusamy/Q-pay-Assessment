import { FaCogs, FaUsers, FaLanguage } from "react-icons/fa";
import { LuSpeaker } from "react-icons/lu";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import ServiceCard from "./ServiceCard";

const ManageSection = () => {
  const businessServices = [
    {
      Icon: LuSpeaker,
      title: "Smart Speaker",
    },
    { Icon: CgSmartHomeWashMachine, title: "POS Machine"},
  ];

  const manageBusiness = [
    {
      Icon: FaCogs,
      title: "Payment Settings",
    },
    {
      Icon: FaUsers,
      title: "Manage Staff",
    },
    {
      Icon: FaLanguage,
      title: "Change Language",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      <div className="p-5 border rounded-xl shadow-sm">
        <h4 className="font-semibold text-sm mb-4 text-gray-400">BUSINESS SERVICES</h4>
        <div className="grid grid-cols-2 gap-4">
          {businessServices.map((item, idx) => (
            <ServiceCard key={idx} {...item} />
          ))}
        </div>
      </div>
      <div className="p-5 border rounded-xl shadow-sm">
        <h4 className="font-semibold text-sm mb-4 text-gray-400">MANAGE BUSINESS</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {manageBusiness.map((item, idx) => (
            <ServiceCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageSection;
