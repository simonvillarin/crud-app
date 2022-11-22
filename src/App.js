import { useState } from "react";
import Navbar from "./components/Navbar";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";
import Form from "./components/Form";
import DataTable from "./components/DataTable";
import { Container } from "@mui/system";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
  mt: 8,
  mb: 4,
};

function App() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => setOpenAddModal(false);
  const handleCloseEditModal = () => setOpenEditModal(false);

  const handleEmployee = (employee) => {
    let id = 1;

    if (employees.length > 0) {
      id = employees[0].id + 1;
    }
    employee.id = id;
    setEmployees([employee, ...employees]);
    setOpenAddModal(false);
  };

  const handleEdit = (id) => {
    const filterEmployees = employees.filter((employee) => employee.id === id);
    setEmployee(filterEmployees);
    setOpenEditModal(true);
  };

  const handleDelete = (id) => {
    const filterEmployees = employees.filter((employee) => employee.id != id);
    setEmployees(filterEmployees);
  };

  const handleUpdateEmployees = (employee) => {
    const index = employees.findIndex((employ) => employ.id === employee.id);
    employees[index].lastName = employee.lastName;
    employees[index].firstName = employee.firstName;
    employees[index].middleName = employee.middleName;
    employees[index].position = employee.position;
    setOpenEditModal(false);
  };

  return (
    <div className="App">
      <Navbar />
      <Container fixed maxWidth="md" sx={style}>
        <Form handleOpenAddModal={handleOpenAddModal} />
        <AddModal
          openAddModal={openAddModal}
          handleCloseAddModal={handleCloseAddModal}
          handleEmployee={handleEmployee}
        />
        <EditModal
          openEditModal={openEditModal}
          handleCloseEditModal={handleCloseEditModal}
          employee={employee}
          handleUpdateEmployees={handleUpdateEmployees}
        />
        <DataTable
          employees={employees}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </Container>
    </div>
  );
}

export default App;
