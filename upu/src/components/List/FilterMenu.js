import React from "react";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import MenuItem from "@mui/material/MenuItem";
import { FaRegCalendarAlt, FaUserAlt } from "react-icons/fa";
import { HiOutlineArrowUp } from "react-icons/hi";
import { TbTag } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";
import { TiFlowChildren } from "react-icons/ti";
import { Divider } from "@mui/material";
import { BiBell } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { BsFillEyeFill } from "react-icons/bs";

const FilterMenu = ({ filterMenu, filterMenuOpen, filterMenuClose }) => {
  return (
    <div>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={filterMenu}
        open={filterMenuOpen}
        onClose={filterMenuClose}
        TransitionComponent={Fade}
        PaperProps={{
          elevation: 0,
          sx: {
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            width: 241,
          },
        }}
      >
        <MenuItem
          sx={{
            fontSize: "14px",
            padding: "5px 12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onClick={filterMenuClose}
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
          onClick={filterMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <TbTag className="text-base -translate-x-px" />
            Etiketler
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
          onClick={filterMenuClose}
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
          onClick={filterMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <CgNotes className="text-base -translate-x-px opacity-80 font-semibold" />
            İçerik
          </span>
        </MenuItem>
        <MenuItem
          disabled
          sx={{
            fontSize: "14px",
            padding: "5px 12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onClick={filterMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <TiFlowChildren className="text-base -translate-x-px opacity-80 font-semibold" />
            Görev Seviyesi
          </span>
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
          onClick={filterMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <FaUserAlt className="text-sm -translate-x-px opacity-80 font-semibold" />
            Görevlerim
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
          onClick={filterMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <BiBell className="text-base -translate-x-0.5 opacity-80 font-semibold" />
            Okunmamış
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
          onClick={filterMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <MdFavorite className="text-sm -translate-x-px opacity-80 font-semibold" />
            Favorilerim
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
          onClick={filterMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <BsFillEyeFill className="text-sm -translate-x-px opacity-80 font-semibold" />
            Takip Ettiklerim
          </span>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default FilterMenu;
