import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Toolbar,
  Divider,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: 1,
  boxShadow: 24,
};

const toolbar = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

function EditModal({
  openEditModal,
  handleCloseEditModal,
  employee,
  handleUpdateEmployees,
}) {
  const [id, setId] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let employee = {
      id: id,
      lastName: lastName,
      firstName: firstName,
      middleName: middleName,
      position: position,
    };

    handleUpdateEmployees(employee);
  };

  useEffect(() => {
    if (employee.length != 0) {
      setId(employee[0].id);
      setLastName(employee[0].lastName);
      setFirstName(employee[0].firstName);
      setMiddleName(employee[0].middleName);
      setPosition(employee[0].position);
    }
  }, [employee]);

  return (
    <Modal
      open={openEditModal}
      onClose={handleCloseEditModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} maxWidth="md">
        <Toolbar sx={toolbar}>
          <Typography variant="h6">Edit Employee</Typography>
          <CloseIcon color="error" onClick={handleCloseEditModal} />
        </Toolbar>
        <Divider />
        <Box
          component="form"
          onSubmit={handleSubmit}
          maxWidth="sm"
          sx={{ display: "flex", flexDirection: "column", gap: 3, p: 4 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Middle Name"
                variant="outlined"
                required
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Position"
                variant="outlined"
                required
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                sx={{ width: "100%" }}
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              color="error"
              onClick={handleCloseEditModal}
            >
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default EditModal;
