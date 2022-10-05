import React, { useState } from "react";
import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import Avatar from "../../images/Avatar.svg";
import { FiChevronDown, FiSearch, FiMenu } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
import { AiOutlineBell } from "react-icons/ai";
import LeftDrawer from "../LeftDrawer";
import ProfileMenu from "./ProfileMenu";
import AddingMenu from "./AddingMenu";
import ProjectMenu from "./ProjectMenu";
import NotificationMenu from "./NotificationMenu";

const MainHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchbarOpen, setSearchBarOpen] = useState(false);

  const handleOpenSearchBar = () => {
    setSearchBarOpen(!searchbarOpen);
  };

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "none",
    "&:hover": {},
    marginLeft: 0,
    width: "0",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(0),
      width: "auto",
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing("0"),
      transition: theme.transitions.create("width"),
      width: "0",
      [theme.breakpoints.up("sm")]: {
        width: 0,
        padding: " 5px",
        "&:focus": {
          width: "25ch",
          borderBottom: "1px solid #00000030",
        },
      },
    },
  }));

  // project menu

  const [projectMenu, setProjectMenu] = useState(null);
  const projectMenuOpen = Boolean(projectMenu);
  const clickProjectMenu = (event) => {
    setProjectMenu(event.currentTarget);
  };
  const projectMenuClose = () => {
    setProjectMenu(null);
  };

  // profile menu

  const [profileMenu, setProfileMenu] = useState(null);
  const profileMenuOpen = Boolean(profileMenu);
  const clickProfileMenu = (event) => {
    setProfileMenu(event.currentTarget);
  };
  const profileMenuClose = () => {
    setProfileMenu(null);
  };

  // adding menu

  const [addingMenu, setAddingMenu] = useState(null);
  const addingMenuOpen = Boolean(addingMenu);
  const clickAddingMenu = (event) => {
    setAddingMenu(event.currentTarget);
  };
  const addingMenuCLose = () => {
    setAddingMenu(null);
  };

  // notification menu

  const [notificationMenu, setNotificationMenu] = useState(null);
  const notificationMenuOpen = Boolean(notificationMenu);
  const clickNotificationMenu = (event) => {
    setNotificationMenu(event.currentTarget);
  };
  const notificationMenuClose = () => {
    setNotificationMenu(null);
  };

  return (
    <>
      <LeftDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <header className="w-full flex flex-col px-4 sm:px-1 py-2">
        <div className="w-full h-[50%] flex ml-2 flex-row justify-between items-center">
          <div className="w-full flex flex-row gap-5">
            <button
              onClick={() => setDrawerOpen(true)}
              className="hover:bg-slate-100 p-2 rounded-full"
            >
              <FiMenu className="text-2xl" />
            </button>
            <div className="flex items-center flex-row gap-1">
              <span className={`text-base ${searchbarOpen ? "sm:hidden" : ""}`}>
                proje adı
              </span>
              <button onClick={clickProjectMenu}>
                <FiChevronDown />
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-5 sm:gap-2 mr-6 sm:mr-4 items-center">
            <button onClick={clickAddingMenu}>
              <HiOutlinePlus className="text-[27px] opacity-70" />
            </button>
            <div className="hidden sm:flex cursor-pointer">
              <div className={`${searchbarOpen ? "" : "hidden"}`}>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border-b border-b-gray-300 text-gray-900 text-sm focus:ring-[#6941c6] focus:border-[#6941c6] block w-24 px-2 py-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#6941c6] dark:focus:border-[#6941c6]"
                  placeholder="Search"
                />
              </div>
              <button onClick={handleOpenSearchBar}>
                <FiSearch className="text-2xl ml-1 opacity-75" />
              </button>
            </div>
            <div className="sm:hidden">
              <Search className="flex flex-row items-center">
                <label className="flex flex-row items-center cursor-pointer">
                  <FiSearch className="text-2xl opacity-75" />
                  <StyledInputBase
                    placeholder="Aktif görevleri ara"
                    inputProps={{ "aria-label": "search" }}
                  />
                </label>
              </Search>
            </div>
            <button onClick={clickNotificationMenu}>
              <AiOutlineBell className="text-[27px] opacity-75 -ml-[9px] sm:-ml-[0px]" />
            </button>
            <button onClick={clickProfileMenu} className="box-border w-8 h-8">
              <img className="w-8 h-8" src={Avatar} alt="avatar" />
            </button>
          </div>
        </div>
      </header>
      <ProfileMenu
        profileMenuOpen={profileMenuOpen}
        profileMenuClose={profileMenuClose}
        profileMenu={profileMenu}
      />
      <AddingMenu
        addingMenuOpen={addingMenuOpen}
        addingMenuCLose={addingMenuCLose}
        addingMenu={addingMenu}
      />
      <ProjectMenu
        projectMenuOpen={projectMenuOpen}
        projectMenuClose={projectMenuClose}
        projectMenu={projectMenu}
      />
      <NotificationMenu
        notificationMenuOpen={notificationMenuOpen}
        notificationMenuClose={notificationMenuClose}
        notificationMenu={notificationMenu}
      />
    </>
  );
};

export default MainHeader;
