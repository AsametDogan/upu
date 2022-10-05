import React from "react";
import { Divider, MenuItem, Menu } from "@mui/material";
import { NavLink } from "react-router-dom";
import { HiOutlineLibrary, HiOutlinePencil } from "react-icons/hi";
import { BiCircle, BiCommentDots, BiUser } from "react-icons/bi";
import { TbNotebook, TbTag } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";

const ProjectMenu = ({ projectMenu, projectMenuClose, projectMenuOpen }) => {
  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={projectMenu}
        open={projectMenuOpen}
        onClose={projectMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          sx={{
            fontSize: "14px",
            padding: "5px 12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap:"4px"
          }}
          onClick={projectMenuClose}
        >
        <HiOutlineLibrary className="-translate-y-px" />  M. Organizasyonuna git
        </MenuItem>
        <MenuItem
          sx={{
            fontSize: "14px",
            padding: "5px 12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap:"4px"
          }}
          onClick={projectMenuClose}
        >
        <TbNotebook />  Diğer Projelere Git
        </MenuItem>
        <Divider />
        <MenuItem
          sx={{
            fontSize: "14px",
            padding: "5px 12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onClick={projectMenuClose}
        >
          <NavLink
            to="settings/profile"
            className="flex flex-row items-center gap-1"
          >
            <HiOutlinePencil /> Adı ve açıklamayı düzenle
          </NavLink>
        </MenuItem>
        <MenuItem
          sx={{
            fontSize: "14px",
            padding: "5px 12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onClick={projectMenuClose}
        >
          <NavLink
            to="settings/members"
            className="flex flex-row items-center gap-1"
          >
            <BiUser className="text-base -translate-x-px" />
            Üyeleri düzenle
          </NavLink>
        </MenuItem>
        <MenuItem
          sx={{
            fontSize: "14px",
            padding: "5px 12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onClick={projectMenuClose}
        >
          <NavLink
            to="settings/task_status"
            className="flex flex-row items-center gap-1"
          >
            <BiCircle />
            Durumları düzenle
          </NavLink>
        </MenuItem>
        <MenuItem
          sx={{
            fontSize: "14px",
            padding: "5px 12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onClick={projectMenuClose}
        >
          <NavLink
            to="settings/labels"
            className="flex flex-row items-center gap-1"
          >
            <TbTag className="text-base" /> Etiketleri düzenle
          </NavLink>
        </MenuItem>
        <Divider />
        <MenuItem
          sx={{
            fontSize: "14px",
            padding: "5px 12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5px",
          }}
          onClick={projectMenuClose}
        >
          <BiCommentDots /> Yorum
        </MenuItem>
        <Divider />
        <MenuItem
          sx={{
            fontSize: "14px",
            padding: "5px 12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onClick={projectMenuClose}
        >
          <NavLink
            to="settings/profile"
            className="flex flex-row items-center gap-1"
          >
            {" "}
            <FiSettings />
            Seçenekler
          </NavLink>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProjectMenu;
