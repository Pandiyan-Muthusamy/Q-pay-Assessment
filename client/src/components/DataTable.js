import { useData } from "../context/DataProvider";
import PageLoader from "../components/loading";

export default function DataTable() {
  const { data, loading, columns } = useData();
  if (loading) return <PageLoader />;
  return (
    <table className="w-full border rounded-md">
      <thead>
        <tr className="bg-gray-100 text-left">
          {columns.map((col) => (
            <th
              key={col.key}
              className="p-2 border-b text-gray-400 text-sm font-semibold"
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td
              colSpan={columns.length}
              className="p-4 text-center text-sm text-black"
            >
              No data found
            </td>
          </tr>
        ) : (
          data.map((row, i) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              {columns.map((col) => (
                <td key={col.key} className="p-2 text-sm text-black">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
