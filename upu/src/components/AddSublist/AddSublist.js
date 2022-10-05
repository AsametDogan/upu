import React, { useState } from "react";
import Slide from "@mui/material/Slide";
import Modal from "react-modal";
import { BsTextRight, BsCaretDownFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { TbLayoutCards } from "react-icons/tb";
import { RiAlignRight } from "react-icons/ri";
import AddSublistBoard from "./AddSublistBoard";
function AddSublist({ openAddSublist, handleCloseAddSublist }) {
  const [defaultView, setDefaultView] = useState("treeView");
  const handleDefaultView = (event) => {
    setDefaultView(event.target.id);
  };
  const [subListTitle, setSubListTitle] = useState("disabled");
  const handleChangeSubListTitle = (event) => {
    setSubListTitle(event.target.value);
  };
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  console.log(defaultView);
  return (
    <>
      <Modal
        isOpen={openAddSublist}
        onRequestClose={handleCloseAddSublist}
        contentLabel="Example Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(255,255,255,.5)",
            display: "flex",
            justifyContent: "center",
          },
        }}
        className="max-w-[622] bg-white h-[90%] sm:h-[80] my-auto flex flex-col gap-5 border z-20 rounded-2xl shadow-lg p-6"
      >
        <div className="pb-4">
          <span className="text-2xl font-[500] ">Alt Liste Oluştur</span>
        </div>
        <div className="flex gap-8 sm:gap-4 flex-wrap">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-normal text-gray-600 ">Adı</label>
            <div className="flex">
              <button
                className="flex-shrink-0 z-10 inline-flex items-center py-1.5 px-3 text-sm   text-gray-700 border-r-0 border border-gray-200 rounded-l focus:ring-1 focus:bg-gray-100 focus:ring-gray-500"
                type="button"
              >
                <BsTextRight />
                <BsCaretDownFill className="h-5 w-5 p-1" />
              </button>
              <div className="relative w-full">
                <input
                  type="text"
                  className="block px-3 py-1.5 w-full z-20 text-sm text-gray-900 rounded-r border-l-gray-100 border-l-2 border border-gray-200 focus:ring-[#6941c6] focus:border-[#6941c6]"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-sm font-normal text-gray-600 ">
              Paylaşım
            </label>
            <div className="flex">
              <select
                id="sharing"
                className=" relative min-w-[293px] border border-gray-200 text-gray-800 text-sm rounded focus:ring-[#6941c6] focus:border-[#6941c6]  px-3 py-1.5"
              >
                <option selected value={"members"}>
                  Proje Üyeleri
                </option>
                <option value={"private"}>
                  <div>
                    <HiLockClosed />
                    Sadece Ben
                  </div>
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-sm font-normal text-gray-600 ">
            Varsayılan Görünüm
          </label>
          <div className="flex items-center gap-8 flex-wrap sm:gap-4">
            <li
              onClick={handleDefaultView}
              id="treeView"
              className="flex items-center gap-2 text-sm cursor-pointer"
            >
              <div
                id="treeView"
                className={`border-[1.5px] border-gray-500 rounded-full w-[13px] h-[13px] ${
                  defaultView === "treeView"
                    ? "bg-[#6941c6] ring-1 ring-offset-1 ring-[#6941c6]"
                    : ""
                }`}
              ></div>
              <div
                id="treeView"
                className="flex items-center gap-1 text-gray-700"
              >
                <RiAlignRight id="treeView" />
                Ağaç Diyagramı
              </div>
            </li>
            <li
              onClick={handleDefaultView}
              id="kanbanView"
              className="flex items-center gap-2 text-sm cursor-pointer"
            >
              <div
                id="kanbanView"
                className={`border-[1.5px] border-gray-500 rounded-full w-[13px] h-[13px] ${
                  defaultView === "kanbanView"
                    ? "bg-[#6941c6] ring-1 ring-offset-1 ring-[#6941c6]"
                    : ""
                }`}
              ></div>
              <div
                id="kanbanView"
                className="flex items-center gap-1 text-gray-700"
              >
                <TbLayoutCards id="kanbanView" />
                Pano
              </div>
            </li>
          </div>
          <div className="border-b "></div>
        </div>
        <div className="flex flex-col gap-4">
          <AddSublistBoard />
        </div>
        <div className="flex gap-4 justify-end text-sm text-gray-700">
          <button
            type="button"
            className="px-2 py-1.5 text-white bg-gradient-to-br from-[#6941c6] to-blue-500 hover:bg-gradient-to-bl  focus:ring-blue-300  rounded text-sm"
          >
            Oluştur
          </button>
          <button onClick={handleCloseAddSublist} className="border border-gray-100 px-2 rounded" type="send">
            İptal
          </button>
        </div>
      </Modal>
    </>
  );
}

export default AddSublist;
