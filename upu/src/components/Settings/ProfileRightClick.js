import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { HiUpload } from "react-icons/hi";
import { TbPaint } from "react-icons/tb";
import { AiFillCaretRight } from "react-icons/ai";

const ProfileRightClick = ({ rightClickMenu, rightMenuClose }) => {
  return (
    <div>
      <Menu
        open={rightClickMenu !== null}
        onClose={rightMenuClose}
        anchorReference="anchorPosition"
        anchorPosition={
          rightClickMenu !== null
            ? { top: rightClickMenu.mouseY, left: rightClickMenu.mouseX }
            : undefined
        }
      >
        <MenuItem
          sx={{ fontSize: "", padding: "5px 12px" }}
          onClick={rightMenuClose}
        >
          <HiUpload className="text-lg mr-2 opacity-70" /> Resmi yükle
        </MenuItem>
        <MenuItem
          sx={{ display:"flex", padding: "5px 12px", alignItems:"center", fontSize:"" }}
          onClick={rightMenuClose}
        >
          <TbPaint className="text-lg mr-2 opacity-75 rotate-45" /> Simgeyi değiştir <AiFillCaretRight className="text-xs ml-1" />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileRightClick;
