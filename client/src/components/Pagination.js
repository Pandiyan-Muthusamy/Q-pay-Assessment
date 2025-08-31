import { useData } from "../context/DataProvider";
import { RiArrowLeftSLine, RiArrowDropRightLine } from "react-icons/ri";

export default function Pagination() {
  const { page, total, fetchPage } = useData();
  const totalPages = Math.ceil(total);

  if (totalPages <= 1) return null;

  const goTo = (p) => {
    if (p >= 0 && p < totalPages) fetchPage(p);
  };

  const getPages = () => {
    const pages = [];
    if (totalPages <= 6) {
      for (let i = 0; i < totalPages; i++) pages.push(i);
    } else {
      pages.push(0);
      if (page > 2) pages.push("...");
      const start = Math.max(1, page - 1);
      const end = Math.min(totalPages - 2, page + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (page < totalPages - 3) pages.push("...");
      pages.push(totalPages - 1);
    }
    return pages;
  };

  return (
    <div className="flex gap-2 justify-center p-6">
      <button
        onClick={() => goTo(page - 1)}
        disabled={page === 0}
        className="w-9 h-9 flex items-center justify-center rounded-full border disabled:opacity-40"
      >
        <RiArrowLeftSLine />
      </button>
      {getPages().map((p, i) =>
        p === "..." ? (
          <span key={i} className="w-9 h-9 flex items-center justify-center">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => goTo(p)}
            className={`w-9 h-9 flex items-center justify-center rounded-full border text-sm ${
              p === page
                ? "bg-background-primary text-white border-background-primary"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {p + 1}
          </button>
        )
      )}
      <button
        onClick={() => goTo(page + 1)}
        disabled={page === totalPages - 1}
        className="w-9 h-9 flex items-center justify-center rounded-full border disabled:opacity-40"
      >
        <RiArrowDropRightLine />
      </button>
    </div>
  );
}
