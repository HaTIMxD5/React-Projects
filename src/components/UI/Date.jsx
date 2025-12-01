import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function Date() {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <button
        className="w-32 h-[6vh] flex justify-between border-[2px] border-[#B3B6BC] bg-white rounded-full pl-4 pr-2 pt-2 translate-x-36"
        onClick={() => setShowPicker(!showPicker)}
      >
        <CalendarMonthOutlinedIcon />
        <div>Date</div>
        <KeyboardArrowDownOutlinedIcon className="translate-y-[2px] pointer-events-none" />
      </button>
      <div className="absolute">
        {showPicker && (
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setShowPicker(false);
            }}
            inline
          />
        )}
      </div>
    </div>
  );
}
