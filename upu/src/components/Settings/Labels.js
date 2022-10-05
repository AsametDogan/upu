import React from "react";
import { BiPlus } from "react-icons/bi";
import { HiOutlinePencil } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddStatusModal from "../AddStatusModal";

const Labels = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="absolute top-0 left-0 w-[70%] h-full flex flex-col gap-6">
        <h1 className="text-xl text-[#181d25] font-medium">Etiketler</h1>
        <div className="flex flex-wrap w-full justify-between gap-7">
          <span className="flex flex-row w-[47%] gap-2 text-sm items-center group">
            <div className="w-[30px] h-[30px] rounded bg-red-600"></div>
            Etiket
            <div className="ml-auto gap-2 hidden group-hover:flex">
              <button>
                <HiOutlinePencil className="text-base opacity-60 hover:opacity-90" />
              </button>
              <button>
                <RiDeleteBin6Line className="text-base opacity-60 hover:opacity-90" />
              </button>
            </div>
          </span>
          <span className="flex flex-row w-[47%] gap-2 text-sm items-center group">
            <div className="w-[30px] h-[30px] rounded bg-purple-600"></div>
            Etiket
            <div className="ml-auto gap-2 hidden group-hover:flex">
              <button>
                <HiOutlinePencil className="text-base opacity-60 hover:opacity-90" />
              </button>
              <button>
                <RiDeleteBin6Line className="text-base opacity-60 hover:opacity-90" />
              </button>
            </div>
          </span>
          <span className="flex flex-row w-[47%] gap-2 text-sm items-center group">
            <div className="w-[30px] h-[30px] rounded bg-green-600"></div>Etiket
            <div className="ml-auto gap-2 hidden group-hover:flex">
              <button>
                <HiOutlinePencil className="text-base opacity-60 hover:opacity-90" />
              </button>
              <button>
                <RiDeleteBin6Line className="text-base opacity-60 hover:opacity-90" />
              </button>
            </div>
          </span>
          <span className="flex flex-row w-[47%] gap-2 text-sm items-center group">
            <div className="w-[30px] h-[30px] rounded bg-blue-600"></div>Etiket
            <div className="ml-auto gap-2 hidden group-hover:flex">
              <button>
                <HiOutlinePencil className="text-base opacity-60 hover:opacity-90" />
              </button>
              <button>
                <RiDeleteBin6Line className="text-base opacity-60 hover:opacity-90" />
              </button>
            </div>
          </span>
        </div>
        <div className="w-full h-[34px]">
          <button onClick={openModal} className="w-[153px] h-full flex items-center justify-center border border-solid border-[#048190] rounded-md text-sm text-[#048190] hover:bg-[#04819015]">
            <BiPlus className="text-base" />
            Yeni Etiket Ekle
          </button>
        </div>
      </div>
      <AddStatusModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
};

export default Labels;
