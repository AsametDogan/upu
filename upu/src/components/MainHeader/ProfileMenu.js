import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { BiUser } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileMenu = (
  { profileMenuOpen, profileMenuClose, profileMenu },

) => {
  const userName = useSelector((state) => state.user.user.name)
  return (
    <>
      <Menu
        anchorEl={profileMenu}
        id="account-menu"
        open={profileMenuOpen}
        onClose={profileMenuClose}
        onClick={profileMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            width: 141,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: 1,
              mr: 0,
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
        <div
          className="flex items-center justify-center text-xs"
        // reduxtan username çekilecek
        >
          { userName  || "Kullanıcı Adı"}
        </div>
        <Divider sx={{ margin: "8px 0 8px 0" }} />
        <MenuItem sx={{ fontSize: "", padding: "5px 12px" }}>
          <NavLink to="/mypage" className="flex flex-row items-center">
            <BiUser className="text-lg mr-2 opacity-75 -translate-x-px" />{" "}
            Profilim
          </NavLink>
        </MenuItem>
        <MenuItem sx={{ fontSize: "", padding: "5px 12px" }}>
          <NavLink className="flex flex-row items-center" to="settings/profile">
            <FiSettings className="text-base mr-2 opacity-70" /> Hesap Ayarları
          </NavLink>
        </MenuItem>
        <Divider />
        <MenuItem sx={{ fontSize: "", padding: "5px 12px" }}>
          <NavLink className="flex flex-row items-center " to="/">
            <MdLogout className="text-lg mr-2 opacity-70" /> Çıkış Yap
          </NavLink>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;
