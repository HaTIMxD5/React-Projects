import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal(
  { setUsers, enteredValues, setEnteredValues },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  const lableStyle = "w-full h-1/4";
  const inputStyle =
    "w-full h-3/5 bg-gray-200 rounded-md pl-3 focus:border-none placeholder:text-gray-600";

  function handleSubmit(e) {
    e.preventDefault();
    const { firstName, lastName, email, username } = enteredValues;

    if (!firstName || !lastName || !email || !username) {
      alert("Please fill out all of the fields");
      return;
    }

    setUsers((prev) => [
      ...prev,
      {
        id: Date.now(),
        fullName: `${firstName} ${lastName}`,
        email,
        username,
        status: enteredValues.status,
        role: enteredValues.role,
      },
    ]);
    dialog.current.close();
  }


  return createPortal(
    <dialog
      ref={dialog}
      className="w-2/5 h-3/4 p-14 rounded-[30px] overflow-hidden"
    >
      <h1 className="text-3xl mb-7 translate-x-[22%]">
        Please enter your info.
      </h1>
      <form
        onSubmit={handleSubmit}
        method="dialog"
        className="size-full relative flex flex-col"
      >
        <label className={lableStyle + " flex justify-between"}>
          <input
            className={inputStyle + " !w-[48%]"}
            placeholder="First Name"
            required
            value={enteredValues.firstName}
            onChange={(e) => {
              setEnteredValues((prev) => ({
                ...prev,
                firstName: e.target.value,
              }));
            }}
          />
          <input
            className={inputStyle + " !w-[48%]"}
            placeholder="Last Name"
            required
            value={enteredValues.lastName}
            onChange={(e) => {
              setEnteredValues((prev) => ({
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
            value={enteredValues.username}
            onChange={(e) => {
              setEnteredValues((prev) => ({
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
            value={enteredValues.email}
            onChange={(e) => {
              setEnteredValues((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
        </label>
        <label>
          <select
            value={enteredValues.status}
            onChange={(e) => {
              setEnteredValues((prev) => ({ ...prev, status: e.target.value }));
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
            value={enteredValues.role}
            onChange={(e) => {
              setEnteredValues((prev) => ({ ...prev, role: e.target.value }));
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
            Submit
          </button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
