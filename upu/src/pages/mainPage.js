import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import List from "../components/List/List";
import MainHeader from "../components/MainHeader/MainHeader";
import Overwiew from "../components/Overwiew";
import SettingsPage from "./SettingsPage";
import { BsTextRight } from "react-icons/bs";
import AddSublist from "../components/AddSublist/AddSublist";
import { HiPlusCircle } from "react-icons/hi";

const Main = () => {
  const [currentPage, setCurrentPage] = useState("list");

  const handleChangePage = (event) => {
    setCurrentPage(event.target.id);
  };

  const subLists = [
    {
      listName: "list",
      processes: [
        {
          title: "İş Adı1",
          number:"5",
          startDate: "07.09.2022",
          deadline: "17.09.2022",
          responsibles: ["Sorumlu kişi1", "Sorumlu kişi2"],
          labels: ["etiket1", "etiket2"],
          description: "burası açıklama alanı",
          generation: 0,
          age: 0,
          subTasks: [
            {
              title: "sub İş Adı",
              number:"6",
              startDate: "07.09.2022",
              deadline: "17.09.2022",
              responsibles: ["Sorumlu kişi1", "Sorumlu kişi2"],
              labels: ["etiket1", "etiket2"],
              description: "burası açıklama alanı",
              generation: 1,
              age: 1,
              subTasks: [""],
            },
            {
              title: "sub İş Adı-1",
              number:"8",
              startDate: "07.09.2022-1",
              deadline: "17.09.2022-1",
              responsibles: ["Sorumlu kişi1-1", "Sorumlu kişi2-1"],
              labels: ["etiket1-1", "etiket2-1"],
              description: "burası açıklama alanı-1",
              generation: 1,
              age: 1,
              subTasks: [
                {
                  title: "İş Adı1s",
                  number:"12",
                  startDate: "07.09.2022",
                  deadline: "17.09.2022",
                  responsibles: ["Sorumlu kişi1", "Sorumlu kişi2"],
                  labels: ["etiket1", "etiket2"],
                  description: "burası açıklama alanı",
                  generation: 0,
                  age: 2,
                  subTasks: [
                    {
                      title: "sub İş AdıS",
                      number:"13",
                      startDate: "07.09.2022",
                      deadline: "17.09.2022",
                      responsibles: ["Sorumlu kişi1", "Sorumlu kişi2"],
                      labels: ["etiket1", "etiket2"],
                      description: "burası açıklama alanı",
                      generation: 1,
                      age: 3,
                      subTasks: [""],
                    },
                    {
                      title: "sub İş Adı-1s",
                      number:"9",
                      startDate: "307.09.2022-1",
                      deadline: "17.09.2022-1",
                      responsibles: ["Sorumlu kişi1-1", "Sorumlu kişi2-1"],
                      labels: ["etiket1-1", "etiket2-1"],
                      description: "burası açıklama alanı-1",
                      generation: 1,
                      age: 3,
                      subTasks: [""],
                    },
                  ],
                },
                {
                  title: "İş Adı-2s",
                  number:"21",
                  startDate: "07.09.2022-1",
                  deadline: "17.09.2022-1",
                  responsibles: ["Sorumlu kişi1-1", "Sorumlu kişi2-1"],
                  labels: ["etiket1-1", "etiket2-1"],
                  description: "burası açıklama alanı-1",
                  generation: 0,
                  age: 2,
                  subTasks: [""],
                },
              ],
            },
          ],
        },
        {
          title: "İş Adı-2",
          number:"19",
          startDate: "07.09.2022-1",
          deadline: "17.09.2022-1",
          responsibles: ["Sorumlu kişi1-1", "Sorumlu kişi2-1"],
          labels: ["etiket1-1", "etiket2-1"],
          description: "burası açıklama alanı-1",
          generation: 0,
          age: 0,
          subTasks: [""],
        },
        {
          title: "İş Adı-2",
          number:"23",
          startDate: "07.09.2022-1",
          deadline: "17.09.2022-1",
          responsibles: ["Sorumlu kişi1-1", "Sorumlu kişi2-1"],
          labels: ["etiket1-1", "etiket2-1"],
          description: "burası açıklama alanı-1",
          generation: 0,
          age: 0,
          subTasks: [""],
        },
        {
          title: "İş Adı-2",
          number:"23",
          startDate: "07.09.2022-1",
          deadline: "17.09.2022-1",
          responsibles: ["Sorumlu kişi1-1", "Sorumlu kişi2-1"],
          labels: ["etiket1-1", "etiket2-1"],
          description: "burası açıklama alanı-1",
          generation: 0,
          age: 0,
          subTasks: [""],
        },
      ],
    },
    {
      listName: "list2",
      processes: [
        {
          title: "İş Adı-2",
          number:"32",
          startDate: "07.09.2022-1",
          deadline: "17.09.2022-1",
          responsibles: ["Sorumlu kişi1-1", "Sorumlu kişi2-1"],
          labels: ["etiket1-1", "etiket2-1"],
          description: "burası açıklama alanı-1",
          generation: 0,
          age: 0,
          subTasks: [""],
        },
        {
          title: "İş Adı-2",
          number:"33",
          startDate: "07.09.2022-1",
          deadline: "17.09.2022-1",
          responsibles: ["Sorumlu kişi1-1", "Sorumlu kişi2-1"],
          labels: ["etiket1-1", "etiket2-1"],
          description: "burası açıklama alanı-1",
          generation: 0,
          age: 0,
          subTasks: [""],
        },
      ],
    },
    {
      listName: "list3",
      processes: [],
    },
    {
      listName: "list4",
      processes: [],
    },
    {
      listName: "list5",
      processes: [],
    },
    {
      listName: "list6",
      processes: [],
    },
    {
      listName: "list7",
      processes: [],
    },
  ];
  const [openAddSublist, setOpenAddSublist] = useState(false);

  const handleOpenAddSublist = () => {
    setOpenAddSublist(true);
  };

  const handleCloseAddSublist = () => {
    setOpenAddSublist(false);
  };
  console.log(subLists.find(({ listName }) => listName === currentPage));
  return (
    <
      //[#6941c6]
    >
      <div className="w-full h-full absolute top-0 left-0 bg-white">
        <MainHeader />
        <div className=" border-b border-gray-200 overflow-x-auto pr-8 no-scrollbar">
          <ul className="flex flex-nowrap gap-8 sm:gap-3 text-sm pl-6 sm:pl-4  text-gray-600 text-center">
            <li className="">
              <button
                onClick={handleChangePage}
                className={`py-2 rounded-t border-b-2 border-transparent hover:text-gray-700 ${
                  currentPage === "list"
                    ? "text-gray-900 font-[500] border-[#6941c6]"
                    : ""
                }`}
                id="list"
              >
                <span
                  onClick={handleChangePage}
                  id="list"
                  className="flex w-max"
                >
                  Liste
                </span>
              </button>
            </li>
            <li className="flex flex-nowrap">
              <button
                onClick={handleChangePage}
                id="overView"
                className={`py-2 rounded-t border-b-2 border-transparent hover:text-gray-700  ${
                  currentPage === "overView"
                    ? "text-gray-900 font-[500] border-[#6941c6]"
                    : ""
                }`}
              >
                <span
                  onClick={handleChangePage}
                  id="overView"
                  className="flex w-max"
                >
                  Genel Bakış
                </span>
              </button>
            </li>
            <div className="border-l my-2"></div>
            <div className="flex gap-8 sm:gap-3 flex-nowrap">
              {subLists.map((subList, index) => (
                <div
                  onClick={handleChangePage}
                  id={subList.listName}
                  key={index}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <button
                    onClick={handleChangePage}
                    id={subList.listName}
                    className={`py-2 px-1 rounded-t border-b-2 border-transparent flex items-center gap-1 hover:text-gray-700  ${
                      currentPage === subList.listName
                        ? "text-gray-900 font-[500] border-[#6941c6]"
                        : ""
                    }`}
                  >
                    <BsTextRight
                      onClick={handleChangePage}
                      id={subList.listName}
                      className={` text-lg ${
                        currentPage === subList.listName
                          ? "text-gray-900 font-[500]"
                          : ""
                      }`}
                    />
                    <span
                      onClick={handleChangePage}
                      id={subList.listName} //sublist id gelecek
                      className="flex w-max"
                    >
                      {subList.listName}
                    </span>
                  </button>
                </div>
              ))}
              <div className="border-l my-2"></div>
              <button onClick={handleOpenAddSublist}>
                <HiPlusCircle className="text-lg text-gray-600 hover:text-gray-900" />
              </button>
            </div>
          </ul>
        </div>
        {currentPage === "overView" ? (
          <Overwiew />
        ) : (
          <div>
            <List
              list={subLists.find(({ listName }) => listName === currentPage)}
            />
          </div>
        )}
      </div>
      <Routes>
        <Route path="settings/*" element={<SettingsPage />} />
      </Routes>

      <AddSublist
        openAddSublist={openAddSublist}
        handleCloseAddSublist={handleCloseAddSublist}
      />
    </>
  );
};

export default Main;
