import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import CreateProjectForm from "../CreateProjectForm";
import InviteMembers from "../Settings/InviteMembers";
import CreateOrganizationForm from "../CreateOrganizationForm";

const AddingMenu = ({ addingMenu, addingMenuOpen, addingMenuCLose }) => {
  // project form

  const [formOpen, setFormOpen] = useState(false);

  const handleClickFormOpen = () => {
    setFormOpen(true);
  };

  const fromClose = () => {
    setFormOpen(false);
  };

  // organization form

  const [organizationFormOpen, setOrganizationFormOpen] = useState(false);

  const handleClickOrganizationFormOpen = () => {
    setOrganizationFormOpen(true);
  };

  const organizationFormClose = () => {
    setOrganizationFormOpen(false);
  };

  // invite members

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Menu
        anchorEl={addingMenu}
        id="account-menu"
        open={addingMenuOpen}
        onClose={addingMenuCLose}
        onClick={addingMenuCLose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            width: 200,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={handleClickOpen}
          sx={{ fontSize: "", padding: "5px 12px" }}
        >
          Üyeleri davet et
        </MenuItem>
        <Divider />
        <MenuItem sx={{ fontSize: "", padding: "5px 12px" }}>
          Görev Ekle
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={handleClickFormOpen}
          sx={{ fontSize: "", padding: "5px 12px" }}
        >
          Proje Ekle
        </MenuItem>
        <MenuItem onClick={handleClickOrganizationFormOpen} sx={{ fontSize: "", padding: "5px 12px" }}>
          Organizasyon Ekle
        </MenuItem>
      </Menu>
      <CreateProjectForm fromClose={fromClose} formOpen={formOpen} />
      <InviteMembers
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
      />
      <CreateOrganizationForm organizationFormClose={organizationFormClose} organizationFormOpen={organizationFormOpen} />
    </>
  );
};

export default AddingMenu;
