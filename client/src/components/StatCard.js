export default function StatCard({ title, value }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-smaller shadow-sm w-full">
      <p className="text-3xl text-text-primary font-bold">{value}</p>
      <p className="text-gray-500 text-sm">{title}</p>
    </div>
  );
}
