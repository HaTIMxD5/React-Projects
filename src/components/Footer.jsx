import right from "../assets/next.png";
import rightTwo from "../assets/fast-forward.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const imgStyle = "size-2 pointer-events-none";
const buttonStyle =
  "size-8 bg-white border-[1px] border-[#F1F1F1] rounded-full pl-[10px] disabled:bg-gray-100";

export default function Footer({
  users,
  currentPage,
  setCurrentPage,
  rowsPerPage,
  setRowsPerPage,
  startIndex,
  endIndex,
  totalPages,
  totalRows,
}) {
  const start = (currentPage - 1) * rowsPerPage + 1;
  const end = Math.min(currentPage * rowsPerPage, totalRows);

  const goToFirst = () => setCurrentPage(1);
  const goToLast = () => setCurrentPage(totalPages);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleRowsChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <footer className="mt-4 flex justify-between text-[#2E4258] font-medium">
      <div className="flex gap-2">
        <p>Rows per page</p>
        <div>
          <select
            className="h-8 w-16 rounded-full border-[1px] border-[#B3B6BC] pl-3 pb-[3px] -translate-y-[2px] appearance-none"
            value={rowsPerPage}
            onChange={handleRowsChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <span>
            <KeyboardArrowDownOutlinedIcon className="-translate-x-8 translate-y-[2px] absolute pointer-events-none" />
          </span>
        </div>
        <p>
          {startIndex + 1}-{Math.min(endIndex, users.length)} of {users.length}{" "}
          rows
        </p>
      </div>
      <div>
        <button
          className={buttonStyle}
          onClick={goToFirst}
          disabled={currentPage === 1}
        >
          <img className={imgStyle + " rotate-180"} src={rightTwo} alt="icon" />
        </button>
        <button
          className={buttonStyle}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <img className={imgStyle + " rotate-180"} src={right} alt="icon" />
        </button>
        <button
          className={buttonStyle + " pl-[11px]"}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          <img className={imgStyle} src={right} alt="icon" />
        </button>
        <button
          className={buttonStyle + " pl-[11px]"}
          onClick={goToLast}
          disabled={currentPage === totalPages}
        >
          <img className={imgStyle} src={rightTwo} alt="icon" />
        </button>
      </div>
    </footer>
  );
}
