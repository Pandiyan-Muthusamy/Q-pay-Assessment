const ServiceCard = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-5 bg-green-50 rounded-sm border border-green-800 shadow hover:shadow-sm hover:bg-green-100 transition cursor-pointer w-full">
      <Icon className="text-text-primary text-3xl mb-3" />
      <h3 className="text-center font-semibold text-sm text-gray-600">{title}</h3>
      <h3 className="text-center font-semibold text-sm text-gray-400">{description}</h3>
      
    </div>
  );
};

export default ServiceCard;
