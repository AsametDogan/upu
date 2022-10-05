import { Box, Divider, Drawer } from "@mui/material";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { HiChevronRight, HiOutlinePlus } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Avatar from "../images/Avatar.svg";
import InviteMembers from "./Settings/InviteMembers";
import UpuLogo from "./UpuLogo";

function LeftDrawer({ drawerOpen, setDrawerOpen }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box p={2} width="300px" className="">
          <div className="w-full flex flex-row justify-between items-center">
            <NavLink to="/" className="-translate-x-7">
              <UpuLogo />
            </NavLink>
            <button>
              <FiSearch className="text-xl" />
            </button>
          </div>
          <div className="flex flex-col w-full mt-8 gap-2">
            <div className="flex flex-row gap-3 h-12 items-center cursor-pointer">
              <img className="w-6 h-6" src={Avatar} alt="avatar" />
              <NavLink to="/mypage" className="w-full text-left">
                Görevlerim
              </NavLink>
            </div>
            <Divider />
            <div className="w-full h-12 flex flex-row items-center gap2 cursor-pointer group pr-2">
              <HiChevronRight className="text-lg opacity-75" />
              Çalışma Alanı
              <HiOutlinePlus className="text-lg opacity-70 ml-auto hidden group-hover:block" />
            </div>
            <Divider />
            <div className="w-full h-12 flex flex-row items-center gap2 cursor-pointer group pr-2">
              <HiChevronRight className="text-lg opacity-75" />
              Üyeler
              <button
                onClick={handleClickOpen}
                className="w-20 h-6 text-sm bg-[#6941c6] text-white ml-auto rounded hidden group-hover:block hover:opacity-70"
              >
                Davet Et
              </button>
            </div>
            <Divider />
          </div>
        </Box>
      </Drawer>
      <InviteMembers
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
      />
    </>
  );
}

export default LeftDrawer;
