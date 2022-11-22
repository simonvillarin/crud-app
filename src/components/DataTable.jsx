import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function DataTable({ employees, handleEdit, handleDelete }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#1976D2" }}>
          <TableRow>
            <TableCell align="center" sx={{ color: "#fff" }}>
              Id
            </TableCell>
            <TableCell align="center" sx={{ color: "#fff" }}>
              Last Name
            </TableCell>
            <TableCell align="center" sx={{ color: "#fff" }}>
              First Name
            </TableCell>
            <TableCell align="center" sx={{ color: "#fff" }}>
              Middle Name
            </TableCell>
            <TableCell align="center" sx={{ color: "#fff" }}>
              Position
            </TableCell>
            <TableCell align="center" sx={{ color: "#fff" }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees &&
            employees.map((employee) => (
              <TableRow
                key={employee.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{employee.id}</TableCell>
                <TableCell align="center">{employee.lastName}</TableCell>
                <TableCell align="center">{employee.firstName}</TableCell>
                <TableCell align="center">{employee.middleName}</TableCell>
                <TableCell align="center">{employee.position}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => handleEdit(employee.id)}
                    sx={{ mr: 2 }}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(employee.id)}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
