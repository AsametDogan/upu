import * as React from "react";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import MenuItem from "@mui/material/MenuItem";
import { BiPieChart, BiUser } from "react-icons/bi";
import { FaListUl, FaRegCalendarAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

const AllTasksMenu = ({ allTaskMenu, allTaskMenuOpen, allTaskMenuClose }) => {
  return (
    <div>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={allTaskMenu}
        open={allTaskMenuOpen}
        onClose={allTaskMenuClose}
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
          onClick={allTaskMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <BiPieChart className="text-base" />
            Aktif Görevler
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
          onClick={allTaskMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <FaListUl className="text-[15]" />
            Tüm Görevler
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
          onClick={allTaskMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <BiUser className="text-base -translate-x-px" />
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
          onClick={allTaskMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <FiUsers className="text-base -translate-x-px" />
            Sorumluya göre grupla
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
          onClick={allTaskMenuClose}
        >
          <span className="flex flex-row items-center gap-2">
            <FaRegCalendarAlt className="text-base -translate-x-px opacity-80" />
            Tarihe göre grupla
          </span>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default AllTasksMenu;
