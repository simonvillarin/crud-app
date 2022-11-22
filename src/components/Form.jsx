import React from "react";
import { Box, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const style = {
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
};

function Form({ handleOpenAddModal, search, setSearch }) {
  return (
    <Box sx={style}>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={handleOpenAddModal}
      >
        Add Employee
      </Button>
    </Box>
  );
}

export default Form;
