import right from "../assets/next.png";
import rightTwo from "../assets/fast-forward.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const imgStyle = "size-2";
const buttonStyle =
  "size-8 bg-white border-[1px] border-[#F1F1F1] rounded-full pl-[10px] text-[#2E4258]";

export default function Footer() {
  return (
    <footer className="mt-4 flex justify-between text-[#2E4258] font-medium">
      <div className="flex gap-2">
        <p>Rows per page</p>
        <div>
          <select className="h-8 w-16 rounded-full border-[1px] border-[#B3B6BC] pl-3 pb-[3px] -translate-y-[2px] appearance-none">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
          </select>
          <span>
            <KeyboardArrowDownOutlinedIcon className="-translate-x-8 translate-y-[2px] absolute pointer-events-none" />
          </span>
        </div>
        <p>of 140 rows</p>
      </div>
      <div>
        <button className={buttonStyle}>
          <img className={imgStyle + " rotate-180"} src={rightTwo} alt="icon" />
        </button>
        <button className={buttonStyle}>
          <img className={imgStyle + " rotate-180"} src={right} alt="icon" />
        </button>
        <button className={buttonStyle + " pl-[11px]"}>
          <img className={imgStyle} src={right} alt="icon" />
        </button>
        <button className={buttonStyle + " pl-[11px]"}>
          <img className={imgStyle} src={rightTwo} alt="icon" />
        </button>
      </div>
    </footer>
  );
}
