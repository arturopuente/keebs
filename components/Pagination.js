import { boardUrl } from "../shared/api";

export default function Pagination({ page, nextPage, previousPage }) {
  const btnClass =
    "text-2xl px-2 py-1 rounded text-white bg-gray-700 border-gray-600 border-2";
  return (
    <div className={"pt-5 pb-6 space-x-4"}>
      {previousPage && (
        <button className={btnClass} onClick={previousPage}>
          Previous
        </button>
      )}
      <span className={"text-lg"}>
        Page: {page === 0 ? "1" : page / 50 + 1}
      </span>
      <button className={btnClass} onClick={nextPage}>
        Next
      </button>
    </div>
  );
}
