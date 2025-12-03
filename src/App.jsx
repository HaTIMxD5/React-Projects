import Footer from "./components/Footer";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import Table from "./components/Table";
import TABLE_DATA from "./TABLE_DATA";
import { useState } from "react";

function App() {
  const [enteredValues, setEnteredValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    status: "Active",
    role: "User",
  });
  const [users, setUsers] = useState(TABLE_DATA);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [selectInput, setSelectInput] = useState({
    role: "All Roles",
    status: "All Statuses",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const filtering = users.filter((user) => {
    const searchBar =
      user.fullName.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase());

    const roleFilter =
      selectInput.role === "All Roles" || user.role === selectInput.role;

    const statusFilter =
      selectInput.status === "All Statuses" ||
      user.status === selectInput.status;
    return searchBar && statusFilter && roleFilter;
  });

  const totalPages = Math.ceil(filtering.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = filtering.slice(startIndex, endIndex);

  return (
    <div className="m-5">
      <Header />
      <Toolbar
        users={users}
        setUsers={setUsers}
        editingId={editingId}
        setEditingId={setEditingId}
        enteredValues={enteredValues}
        setEnteredValues={setEnteredValues}
        selectInput={selectInput}
        setSelectInput={setSelectInput}
        search={search}
        setSearch={setSearch}
      />
      <Table
        users={users}
        setUsers={setUsers}
        editingId={editingId}
        setEditingId={setEditingId}
        enteredValues={enteredValues}
        setEnteredValues={setEnteredValues}
        selectInput={selectInput}
        setSelectInput={setSelectInput}
        currentRows={currentRows}
      />
      <Footer
        users={users}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        startIndex={startIndex}
        endIndex={endIndex}
        currentRows={currentRows}
        totalPages={totalPages}
        totalRows={filtering.length}
      />
    </div>
  );
}

export default App;
