import React from "react";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import MenuItem from "@mui/material/MenuItem";
import { BiCircle } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineArrowUp } from "react-icons/hi";
import { AiOutlineSortAscending } from "react-icons/ai";

const SortingMenu = ({ sortMenu, sortMenuClose, sortMenuOpen }) => {
  return (
    <div>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={sortMenu}
        open={sortMenuOpen}
        onClose={sortMenuClose}
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
          onClick={sortMenuClose}
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
          onClick={sortMenuClose}
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
          onClick={sortMenuClose}
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
          onClick={sortMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <AiOutlineSortAscending className="text-base -translate-x-px" />
            Adı
          </span>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SortingMenu;
