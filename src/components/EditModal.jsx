import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

const EditModal = forwardRef(function EditModal(
  { setUsers, enteredValues, editingId, setEditingId },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current?.showModal();
      },
      close: () => {
        dialog.current?.close();
      },
    };
  });

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    status: "Active",
    role: "User",
  });

  useEffect(() => {
    if (!enteredValues) return;
    setForm({
      firstName: enteredValues.firstName ?? "",
      lastName: enteredValues.lastName ?? "",
      username: enteredValues.username ?? "",
      email: enteredValues.email ?? "",
      status: enteredValues.status ?? "Active",
      role: enteredValues.role ?? "Guest",
    });
  }, [enteredValues, editingId]);

  const lableStyle = "w-full h-1/4";
  const inputStyle =
    "w-full h-3/5 bg-gray-200 rounded-md pl-3 focus:border-none placeholder:text-gray-600";

  function handleSave(e) {
    e.preventDefault();

    const { firstName, lastName, email, username } = form;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !username.trim()
    ) {
      alert("Please fill out all of the fields");
      return;
    }

    setUsers((prev) =>
      prev.map((user) => {
        return user.id === editingId
          ? {
              ...user,
              fullName: `${firstName} ${lastName}`.trim(),
              email,
              username,
              status: form.status,
              role: form.role,
            }
          : user;
      })
    );
    setEditingId(null);
    dialog.current.close();
  }

  return createPortal(
    <dialog
      ref={dialog}
      className="w-2/5 h-3/4 p-14 rounded-[30px] overflow-hidden"
    >
      <h1 className="text-3xl mb-7 translate-x-[22%]">
        Edit your previous info.
      </h1>
      <form onSubmit={handleSave} method="dialog" className="size-full relative flex flex-col">
        <label className={lableStyle + " flex justify-between"}>
          <input
            className={inputStyle + " !w-[48%]"}
            placeholder="First Name"
            required
            value={form.firstName}
            onChange={(e) => {
              setForm((prev) => ({
                ...prev,
                firstName: e.target.value,
              }));
            }}
          />
          <input
            className={inputStyle + " !w-[48%]"}
            placeholder="Last Name"
            required
            value={form.lastName}
            onChange={(e) => {
              setForm((prev) => ({
                ...prev,
                lastName: e.target.value,
              }));
            }}
          />
        </label>
        <label className={lableStyle}>
          <input
            className={inputStyle}
            placeholder="Username"
            required
            value={form.username}
            onChange={(e) => {
              setForm((prev) => ({
                ...prev,
                username: e.target.value,
              }));
            }}
          />
        </label>
        <label className={lableStyle}>
          <input
            className={inputStyle}
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
        </label>
        <label>
          <select
            value={form.status}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, status: e.target.value }));
            }}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Banned">Banned</option>
            <option value="Pending">Pending</option>
            <option value="Suspended">Suspended</option>
          </select>
        </label>
        <label>
          <select
            value={form.role}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, role: e.target.value }));
            }}
          >
            <option value="Guest">Guest</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
            <option value="Moderator">Moderator</option>
          </select>
        </label>
        <div className="w-full h-1/6 flex justify-end items-start">
          <button
            type="button"
            className="h-2/3 p-5 pt-3 hover:bg-gray-300 rounded-xl"
            onClick={() => dialog.current?.close()}
          >
            Close
          </button>
          <button
            type="submit"
            className="h-2/3 px-5 ml-2 bg-[#2E4258] text-white rounded-xl"
          >
            Save
          </button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default EditModal;
