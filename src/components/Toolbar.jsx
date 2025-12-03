import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PersonIcon from "@mui/icons-material/Person";
import award from "../assets/award.png";
import IosShareIcon from "@mui/icons-material/IosShare";
import AddIcon from "../assets/plus.png";
import { useRef, useState } from "react";
import Modal from "./Modal";

export default function Toolbar({
  setUsers,
  editingId,
  enteredValues,
  setEnteredValues,
  selectInput,
  setSelectInput,
  search,
  setSearch,
}) {
  const modal = useRef();

  function handleOpenModal() {
    modal.current.open();
  }

  const selectDiv =
    "w-1/4 relative rounded-full border-[2px] border-[#B3B6BC] translate-x-44";
  const selectSpan = "absolute left-3 top-[6px] pointer-events-none";
  const select = "rounded-full size-full pl-11 pb-[3px] appearance-none";

  return (
    <>
      <Modal
        ref={modal}
        setUsers={setUsers}
        editingId={editingId}
        enteredValues={enteredValues}
        setEnteredValues={setEnteredValues}
      />
      <aside className="w-full h-[12vh] bg-[#F1F1F1] border-b-[2px] border-[#B3B6BC] relative mt-8 ml-[2px] flex justify-between items-center px-[.7%]">
        <div className="h-1/2 flex flex-row gap-7">
          <div className="relative w-[20%]">
            <SearchIcon
              className="text-[#2E4258] absolute translate-y-[6px] translate-x-5"
              fontSize="large"
            />
            <input
              className="w-[20vw] h-full border-[2px] border-[#B3B6BC] rounded-full pl-14 pb-[3px] mr-10 text-[#2E4258] placeholder-[#2E4258] text-lg"
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <div className={selectDiv}>
            <span className={selectSpan}>
              <PersonIcon />
            </span>
            <select
              className={select}
              value={selectInput.role}
              onChange={(e) => {
                setSelectInput((prev) => ({ ...prev, role: e.target.value }));
              }}
            >
              <option value="All Roles">All Roles</option>
              <option value="Guest">Guest</option>
              <option value="User">User</option>
              <option value="Moderate">Moderate</option>
              <option value="Admin">Admin</option>
            </select>
            <KeyboardArrowDownOutlinedIcon className="absolute right-2 top-[10px] pointer-events-none" />
          </div>
          <div className={selectDiv}>
            <span className={selectSpan}>
              <img className="w-7" src={award} alt="award icon" />
            </span>
            <select
              className={select}
              value={selectInput.status}
              onChange={(e) => {
                setSelectInput((prev) => ({ ...prev, status: e.target.value }));
              }}
            >
              <option value="All Statuses">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
              <option value="Suspended">Suspended</option>
              <option value="Banned">Banned</option>
            </select>
            <KeyboardArrowDownOutlinedIcon className="absolute right-2 top-[10px] pointer-events-none" />
          </div>
        </div>

        <div className="w-1/5 h-1/2 flex justify-between gap-4">
          <button className="w-1/2 bg-white text-[#2E4258] rounded-full border-[#B3B6BC] border-[2px]">
            <IosShareIcon className="text-[#2E4258] -translate-x-2 -translate-y-[3px]" />
            Export
          </button>
          <button
            className="w-1/2 bg-[#2E4258] text-white rounded-full indent-4 pb-[1px]"
            onClick={handleOpenModal}
          >
            <img
              src={AddIcon}
              alt="Add icon"
              className="w-7 absolute translate-x-4 -translate-y-[2px]"
            />
            Add User
          </button>
        </div>
      </aside>
    </>
  );
}
