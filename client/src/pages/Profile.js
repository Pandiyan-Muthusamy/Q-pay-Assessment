import Banner from "../components/Banner";
import BusinessSection from "../components/BusinessSection";
import ManageSection from "../components/ManageSection";

const Dashboard = () => {
  return (
    <div className="p-1 bg-gray-100 min-h-screen">
      <Banner />
      <BusinessSection />
      <ManageSection />
    </div>
  );
};

export default Dashboard;
