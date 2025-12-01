import SearchIcon from "@mui/icons-material/Search";
import SelectInput from "./UI/SelectInput";
import PersonIcon from "@mui/icons-material/Person";
import award from "../assets/award.png";
import Date from "./UI/Date";
import IosShareIcon from "@mui/icons-material/IosShare";
import AddIcon from "../assets/plus.png";

export default function Dashboard() {
  return (
    <aside className="w-full h-[12vh] bg-[#F1F1F1] border-b-[2px] border-[#B3B6BC] relative mt-8 ml-[2px] flex justify-between items-center px-[.7%]">
      <div className="h-1/2 flex flex-row gap-7">
        <div className="relative w-[20%]">
          <SearchIcon
            className="text-[#2E4258] absolute translate-y-2 translate-x-5"
            fontSize="large"
          />
          <input
            className="w-[20vw] h-full border-[2px] border-[#B3B6BC] rounded-full pl-14 pb-[3px] mr-10 text-[#2E4258] placeholder-[#2E4258] text-lg"
            type="text"
            placeholder="Search"
          />
        </div>
        <SelectInput
          name="role"
          initialName="Role"
          optionOne="User"
          optionTwo="Guest"
          optionThree="Moderate"
          optionFour="Admin"
        >
          <PersonIcon />
        </SelectInput>
        <SelectInput
          name="status"
          initialName="Status"
          optionOne="Active"
          optionTwo="Pending"
          optionThree="Suspended"
          optionFour="Banned"
        >
          <img className="w-7" src={award} alt="award icon" />
        </SelectInput>
        <div>
          <Date />
        </div>
      </div>

      <div className="w-1/5 h-1/2 flex justify-between gap-4">
        <button className="w-1/2 bg-white text-[#2E4258] rounded-full border-[#B3B6BC] border-[2px]">
          <IosShareIcon className="text-[#2E4258] -translate-x-2 -translate-y-[3px]" />
          Export
        </button>
        <button className="w-1/2 bg-[#2E4258] text-white rounded-full indent-4 pb-[1px]">
          <img
            src={AddIcon}
            alt="Add icon"
            className="w-7 absolute translate-x-4 -translate-y-[2px]"
          />
          Add User
        </button>
      </div>
    </aside>
  );
}
