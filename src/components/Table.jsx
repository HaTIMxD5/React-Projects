import { useRef } from "react";
import EditModal from "./EditModal";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const tdMainCss = "indent-6";
const tdCss =
  " border-t-[1px] border-b-[1px] border-t-[#ADD8E6] border-b-[#ADD8E6] py-2 indent-6";
const tdPair = "bg-[#F3F8FF]" + tdCss;
const tdUnpair = "bg-[#F9FAFB]" + tdCss;

export default function Table({
  users,
  setUsers,
  editingId,
  setEditingId,
  enteredValues,
  setEnteredValues,
  currentRows,
}) {
  const editModal = useRef();

  function handleDelete(id) {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  }

  function handleEdit(id) {
    const userFind = users.find((user) => user.id === id);
    setEnteredValues({
      id: userFind.id,
      firstName: userFind.fullName?.split(" ")[0] ?? "",
      lastName: userFind.fullName?.split(" ").slice(1).join(" ") ?? "",
      email: userFind.email,
      username: userFind.username,
      status: userFind.status,
      role: userFind.role,
    });
    setEditingId(id);
    editModal.current.open();
  }

  return (
    <>
      <EditModal
        ref={editModal}
        setUsers={setUsers}
        editingId={editingId}
        setEditingId={setEditingId}
        enteredValues={enteredValues}
      />
      <table className="w-full mt-2 text-[#2E4258]">
        <thead>
          <tr className={"bg-[#2E4258] text-white"}>
            <td className={tdMainCss}>Full Name</td>
            <td className={tdMainCss}>Email</td>
            <td className={tdMainCss}>Username</td>
            <td className={tdMainCss}>Status</td>
            <td className={tdMainCss}>Role</td>
            <td className={tdMainCss}>Joined Date</td>
            <td className={tdMainCss}>Actions</td>
          </tr>
        </thead>
        {currentRows.map((user, index) => {
          const isUnpair = index % 2 !== 0;
          const checking = isUnpair ? tdPair : tdUnpair;
          const statusStyle =
            " inline-block text-white px-3 pb-1 rounded-full indent-0 cursor-pointer";
          const statusLogic =
            user.status === "Active"
              ? "bg-[#28A745]" + statusStyle
              : user.status === "Inactive"
              ? "bg-[#8B969F]" + statusStyle
              : user.status === "Banned"
              ? "bg-[#DC3545]" + statusStyle
              : user.status === "Pending"
              ? "bg-[#021247]" + statusStyle
              : user.status === "Suspended"
              ? "bg-[#FD7E14]" + statusStyle
              : "";
          return (
            <tbody key={user.id}>
              <tr>
                <td className={checking}>{user.fullName}</td>
                <td className={checking}>{user.email}</td>
                <td className={checking}>{user.username}</td>
                <td className={checking}>
                  <span className={statusLogic}>{user.status}</span>
                </td>
                <td className={checking}>{user.role}</td>
                <td className={checking}>
                  {new Date(user.id).toLocaleString("fr-MA", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                </td>
                <td className={checking}>
                  {editingId !== user.id && (
                    <BorderColorOutlinedIcon
                      onClick={() => handleEdit(user.id)}
                      className="cursor-pointer"
                    />
                  )}
                  <DeleteForeverOutlinedIcon
                    onClick={() => handleDelete(user.id)}
                    className="text-red-600 translate-x-5 cursor-pointer"
                  />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}
