import TABLE_DATA from "../../TABLE_DATA";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const tdMainCss = "indent-4";
const tdCss =
  " border-t-[1px] border-b-[1px] border-t-[#ADD8E6] border-b-[#ADD8E6] py-2 indent-4";
const tdPair = "bg-[#F3F8FF]" + tdCss;
const tdUnpair = "bg-[#F9FAFB]" + tdCss;

export default function Table() {
  return (
    <table className="w-full mt-2 text-[#2E4258]">
      <thead>
        <tr className="bg-[#2E4258] text-white">
          <td className="indent-4">
            <input className="size-5 translate-y-[3px]" type="checkbox" />
          </td>
          <td className={tdMainCss}>Full Name</td>
          <td className={tdMainCss}>Email</td>
          <td className={tdMainCss}>Username</td>
          <td className={tdMainCss}>Status</td>
          <td className={tdMainCss}>Role</td>
          <td className={tdMainCss}>Joined Date</td>
          <td className={tdMainCss}>Last Active</td>
          <td className={tdMainCss}>Actions</td>
        </tr>
      </thead>

      {TABLE_DATA.map((data, index) => {
        const isUnpair = index % 2 !== 0;
        const checking = isUnpair ? tdPair : tdUnpair;
        const statusStyle =
          " inline-block text-white px-3 pb-1 rounded-full indent-0 cursor-pointer";
        const statusLogic =
          data.status === "Active"
            ? "bg-[#28A745]" + statusStyle
            : data.status === "Inactive"
            ? "bg-[#8B969F]" + statusStyle
            : data.status === "Banned"
            ? "bg-[#DC3545]" + statusStyle
            : data.status === "Pending"
            ? "bg-[#021247]" + statusStyle
            : data.status === "Suspended"
            ? "bg-[#FD7E14]" + statusStyle
            : "";
        return (
          <tbody key={data.id}>
            <tr>
              <td className={checking}>
                <input className="size-5 translate-y-[3px]" type="checkbox" />
              </td>
              <td className={checking}>
                <div className="flex">
                    <img className="translate-x-[18px]" src={data.img} alt="user photo" />
                  <span className="indent-10">{data.fullName}</span>
                </div>
              </td>
              <td className={checking}>{data.email}</td>
              <td className={checking}>{data.username}</td>
              <td className={checking}>
                <span className={statusLogic}>{data.status}</span>
              </td>
              <td className={checking}>{data.role}</td>
              <td className={checking}>{data.joinedDate}</td>
              <td className={checking}>{data.lastActive}</td>
              <td className={checking}>
                <BorderColorOutlinedIcon className="cursor-pointer" />
                <DeleteForeverOutlinedIcon className="text-red-600 translate-x-5 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
