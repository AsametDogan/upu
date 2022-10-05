import React from "react";
import { MenuItem, Menu } from "@mui/material";


const NotificationMenu = ({notificationMenuOpen, notificationMenuClose, notificationMenu}) => {
  return (
    <>
      <Menu
        anchorEl={notificationMenu}
        id="account-menu"
        open={notificationMenuOpen}
        onClose={notificationMenuClose}
        onClick={notificationMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            width: "auto",
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
        <div className="flex items-center px-3 text-xs text-gray-400 border-b border-gray-300 pb-1">
            Bildirimler
        </div>
        <MenuItem
          onClick={notificationMenuClose}
          sx={{ fontSize: "", padding: "5px 12px" }}
        >
          Sonuç bulunamadı.
        </MenuItem>
      </Menu>
      
    </>
  );
};

export default NotificationMenu;
