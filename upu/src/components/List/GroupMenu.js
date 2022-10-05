import * as React from "react";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import MenuItem from "@mui/material/MenuItem";
import { BiCircle, BiUser } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiMenuAlt3, HiOutlineArrowUp } from "react-icons/hi";
import { TbTag } from "react-icons/tb";

const GroupMenu = ({ groupMenuClose, groupMenu, groupMenuOpen }) => {
  return (
    <div>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={groupMenu}
        open={groupMenuOpen}
        onClose={groupMenuClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          sx={{
            fontSize: "14px",
            padding: "5px 12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onClick={groupMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <FaRegCalendarAlt className="text-base -translate-x-px opacity-80" />
            Tarih
          </span>
        </MenuItem>
        <MenuItem
          sx={{
            fontSize: "14px",
            padding: "5px 12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onClick={groupMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <HiOutlineArrowUp className="text-base -translate-x-px opacity-80" />
            Öncelik
          </span>
        </MenuItem>
        <MenuItem
          sx={{
            fontSize: "14px",
            padding: "5px 12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onClick={groupMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <BiUser className="text-base -translate-x-px" />
            Sorumlu
          </span>
        </MenuItem>
        <MenuItem
          sx={{
            fontSize: "14px",
            padding: "5px 12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onClick={groupMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <BiCircle className="text-base -translate-x-px" />
            Durum
          </span>
        </MenuItem>
        <MenuItem
          sx={{
            fontSize: "14px",
            padding: "5px 12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onClick={groupMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <TbTag className="text-base -translate-x-px" />
            Etiket
          </span>
        </MenuItem>
        <MenuItem
          sx={{
            fontSize: "14px",
            padding: "5px 12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onClick={groupMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <HiMenuAlt3 className="text-base -translate-x-px font-bold" />
            Alt liste
          </span>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default GroupMenu;
