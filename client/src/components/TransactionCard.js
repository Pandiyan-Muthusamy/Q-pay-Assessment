export default function TransactionCard({ title, amount, value }) {
  return (
    <div className="p-3 bg-white rounded-smaller shadow-sm">
      <p className="text-gray-500 font-semibold mb-4">{title}</p>
      <p className="text-xl font-bold text-gray-900 mb-3">
        ₹{amount.toLocaleString()}
      </p>
      <div className="space-y-2">
        {value?.map((tx, i) => (
          <div key={i} className="flex justify-between items-center p-1">
            <div>
              <p className="text-gray-800 font-medium text-sm">{tx.name}</p>
              <p className="text-gray-500 text-xs">{tx.date}</p>
            </div>
            <p className="text-text-primary font-semibold text-sm">
              {tx.amount}
            </p>
          </div>
        ))}
      </div>
      <button className="mt-3 bg-background-primary text-white px-4 py-2 rounded-lg w-full text-sm">
        View All
      </button>
    </div>
  );
}
