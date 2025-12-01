import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function SelectInput({
  optionOne,
  optionTwo,
  optionThree,
  optionFour,
  initialName,
  children,
  ...props
}) {
  return (
    <div className="w-32 relative rounded-full border-[2px] border-[#B3B6BC] translate-x-36">
      <span className="absolute left-3 top-[6px] pointer-events-none">{children}</span>
      <select {...props} className="rounded-full size-full pl-11 pb-[3px] appearance-none">
        <option value={initialName}>{initialName}</option>
        <option value={optionOne}>{optionOne}</option>
        <option value={optionTwo}>{optionTwo}</option>
        <option value={optionThree}>{optionThree}</option>
        <option value={optionFour}>{optionFour}</option>
      </select>
      <KeyboardArrowDownOutlinedIcon className="absolute right-2 top-[10px] pointer-events-none" />
    </div>
  );
}
