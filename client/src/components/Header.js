import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
   const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home"); 
  };
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between bg-white shadow px-6 py-3 z-50">
      <div onClick={handleClick} className="flex items-center cursor-pointer">
        <img
          src="/assets/QPay~Logo.png"
          alt="Logo"
          className="h-12 w-auto object-contain"
        />
      </div>
      <div className="flex items-center space-x-3">
        <img
          src="/assets/User_Image.png"
          alt="Profile"
          className="h-10 w-10 rounded-full border border-gray-300"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-sm text-gray-500">Hello</span>
          <span className="text-base font-semibold text-gray-800">
            Thomas Shelby
          </span>
        </div>
        <ChevronDown className="w-5 h-5 text-gray-500" />
      </div>
    </header>
  );
}
