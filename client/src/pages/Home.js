import { useState, useEffect } from "react";
import StatCard from "../components/StatCard";
import ProfileCard from "../components/ProfileCard";
import QRCard from "../components/QRCard";
import TransactionCard from "../components/TransactionCard";
import Banner from "../components/Banner";

export default function Home() {
  const [data, setData] = useState({
    statItems: [],
    transactionItems: [],
  });

  useEffect(() => {
    const stats = [
      { title: "Account Holder", value: "1.5k" },
      { title: "Transactions", value: "2.1k" },
      { title: "Settlement", value: "2.3k" },
      { title: "QR Orders", value: "45k" },
    ];

    const transactions = [
      { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: "+₹90" },
      { name: "Ibrahim", date: "23 Oct, 10:30 AM", amount: "+₹150" },
      { name: "Ibrahim", date: "23 Oct, 11:00 AM", amount: "+₹200" },
    ];

    setData({
      statItems: stats,
      transactionItems: transactions,
    });
  }, []);

  return (
    <div className="p-1 bg-gray-100 min-h-screen ">
      <Banner />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {data.statItems.map((item, index) => {
          return <StatCard key={index} title={item.title} value={item.value} />;
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <ProfileCard />
        <QRCard />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <TransactionCard
          title="Settlement"
          amount={123816.19}
          value={data.transactionItems}
        />
        <TransactionCard
          title="Total Transactions"
          amount={123816.19}
          value={data.transactionItems}
        />
      </div>
    </div>
  );
}
