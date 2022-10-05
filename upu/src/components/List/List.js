import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Kanban from "../Kanban/Kanban";
import Tree from "../Tree/Tree";
import { VscFilter } from "react-icons/vsc";
import { TbLayoutCards } from "react-icons/tb";
import { HiChevronRight, HiChevronLeft, HiChevronDown } from "react-icons/hi";
import { RiAlignRight } from "react-icons/ri";
import { BsFilter, BsSortDownAlt } from "react-icons/bs";
import { CgViewComfortable } from "react-icons/cg";
import AllTasksMenu from "./AllTasksMenu";
import GroupMenu from "./GroupMenu";
import SortingMenu from "./SortingMenu";
import FilterMenu from "./FilterMenu";
import RightDrawer from "../RightDrawer";

const List = ({ list }) => {
  const [filter, setFilter] = useState(false);
  const [tab, setTab] = useState("kanban");

  const handleOpenFilterMenu = () => {
    setFilter(!filter);
  };

  const handleSetKanban = () => {
    setTab("kanban");
  };
  const handleSetTree = () => {
    setTab("tree");
  };

  const [openRightDrawer, setOpenRightDrawer] = useState(false);

  const handleRightDrawerOpen = () => {
    setOpenRightDrawer(!openRightDrawer);
  };


  // all tasks menu

  const [allTaskMenu, setAllTaskMenu] = React.useState(null);
  const allTaskMenuOpen = Boolean(allTaskMenu);
  const allTaskClick = (event) => {
    setAllTaskMenu(event.currentTarget);
  };
  const allTaskMenuClose = () => {
    setAllTaskMenu(null);
  };

  // group menu

  const [groupMenu, setGroupMenu] = React.useState(null);
  const groupMenuOpen = Boolean(groupMenu);
  const groupMenuClick = (event) => {
    setGroupMenu(event.currentTarget);
  };
  const groupMenuClose = () => {
    setGroupMenu(null);
  };

  // sorting menu

  const [sortMenu, setSortMenu] = React.useState(null);
  const sortMenuOpen = Boolean(sortMenu);
  const sortMenuClick = (event) => {
    setSortMenu(event.currentTarget);
  };
  const sortMenuClose = () => {
    setSortMenu(null);
  };

  // filter menu
  
  const [filterMenu, setFilterMenu] = React.useState(null);
  const filterMenuOpen = Boolean(filterMenu);
  const filterMenuClick = (event) => {
    setFilterMenu(event.currentTarget);
  };
  const filterMenuClose = () => {
    setFilterMenu(null);
  };

  return (
    <div className="flex">
      <div className={`${tab === "kanban" ? "overflow-x-auto" : "overflow-x-hidden"}`}
        style={{ width: `calc(100vw - ${openRightDrawer ? "200px" : "12px"})` }}
      >
        <div className="">
          <div className=" px-5 py-3 flex flex-row justify-between">
            <div className="flex flex-row text-gray-600 text-sm">
              <button className="flex flex-row items-center text-sm hover:opacity-75"   onClick={allTaskClick}>
                <VscFilter className="mr-2" />
                <span className=" sm:hidden">Tüm Görevler</span>
                <HiChevronDown className="text-gray-900 ml-1 translate-y-px" />
              </button>
              <div className=" flex pl-2 ">
                {filter ? (
                  <div className="flex gap-3 ">
                    <div
                      id="grouping"
                      onClick={groupMenuClick}
                      className="flex items-center hover:text-gray-900  cursor-pointer"
                    >
                      <span className="text-[13px] sm:hidden">Grupla</span>
                      <CgViewComfortable className="hidden sm:flex" />
                      <HiChevronDown className="text-gray-900" />
                    </div>
                    <div
                      id="sorting"
                      onClick={sortMenuClick}
                      className="flex items-center hover:text-gray-900  cursor-pointer"
                    >
                      <span className="text-[13px] sm:hidden">Sırala</span>
                      <BsSortDownAlt className="hidden sm:flex" />
                      <HiChevronDown className="text-gray-900" />
                    </div>
                    <div
                      id="filter"
                      className="flex items-center hover:text-gray-900  cursor-pointer"
                      onClick={filterMenuClick}
                    >
                      <span className="text-[13px] sm:hidden">Filtrele</span>
                      <BsFilter className="hidden sm:flex" />
                      <HiChevronDown className="text-gray-900" />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <button
                onClick={handleOpenFilterMenu}
                className="w-7 h-7 ml-4 box-border rounded active:border active:border-gray-300 flex items-center justify-center"
              >
                {filter ? (
                  <HiChevronLeft className="text-lg opacity-75" />
                ) : (
                  <HiChevronRight className="text-lg opacity-75" />
                )}
              </button>
            </div>
            <div className="flex gap-3 mr-1">
              <NavLink id="kanban" onClick={handleSetKanban} to="kanban">
                <TbLayoutCards
                  className={` rounded text-3xl p-1 ${tab === "kanban" ? "text-[#6941c6] bg-gray-200" : ""
                    }`}
                />
              </NavLink>
              <NavLink id="tree" onClick={handleSetTree} to="tree">
                <RiAlignRight
                  className={`rounded text-3xl p-1 ${tab === "tree" ? "text-[#6941c6] bg-gray-200" : ""
                    }`}
                />
              </NavLink>
            </div>
          </div>
          <div className="h-screen">
            <Routes>
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/tree" element={<Tree processes={list?.processes} />} />
            </Routes>
          </div>
        </div>
      </div>
      <RightDrawer openRightDrawer={openRightDrawer} handleRightDrawerOpen={handleRightDrawerOpen} />
      <AllTasksMenu
        allTaskMenuOpen={allTaskMenuOpen}
        allTaskMenu={allTaskMenu}
        allTaskMenuClose={allTaskMenuClose}
      />
      <GroupMenu
        groupMenuOpen={groupMenuOpen}
        groupMenu={groupMenu}
        groupMenuClose={groupMenuClose}
      />
      <SortingMenu
        sortMenu={sortMenu}
        sortMenuClose={sortMenuClose}
        sortMenuOpen={sortMenuOpen}
      />
      <FilterMenu
        filterMenu={filterMenu}
        filterMenuClose={filterMenuClose}
        filterMenuOpen={filterMenuOpen}
      />
    </div>
  );
};

export default List;
