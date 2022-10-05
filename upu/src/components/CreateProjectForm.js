import React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Slide from "@mui/material/Slide";
import { GrClose } from "react-icons/gr";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateProjectForm = ({ fromClose, formOpen }) => {
 
  return (
    <div>
      <Dialog
        fullScreen
        open={formOpen}
        onClose={fromClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "1px solid #00000020",
            color: "#000",
            height: "70px",
          }}
        >
          <div className="w-full h-full flex items-center justify-end px-8">
            <button onClick={fromClose}>
              <GrClose className="text-2xl" />
            </button>
          </div>
        </AppBar>
        <div className="w-full flex justify-center mt-[70px]">
          <div className="w-[34%] sm:w-[80%] h-full my-[7%] flex flex-col justify-items-center gap-16 sm:gap-16">
            <h1 className="text-[32px] w-full sm:text-2xl">Proje Oluştur</h1>
            <div className="w-full flex flex-col gap-12">
              <div className="field">
                <input
                  id="projectName"
                  className="text-xl py-2 px-4 w-full border-b border-gray-300 focus:border-[#6941c6] opacity-70"
                  type="text"
                  required
                  autoComplete="off"
                />
                <label
                  className="absolute top-2 left-4 text-lg opacity-70"
                  htmlFor="projectName"
                >
                  Proje adı
                </label>
              </div>
              <div className="field">
                <input
                  id="organization"
                  className="text-xl py-2 px-4 w-full border-b border-gray-300 focus:border-[#6941c6] opacity-70"
                  type="text"
                  required
                  autoComplete="off"
                />
                <label
                  className="absolute top-2 left-4 text-lg opacity-70"
                  htmlFor="organization"
                >
                  Organizasyon
                </label>
              </div>
              <div className="field">
                <input
                  id="template"
                  className="text-xl py-2 px-4 w-full border-b border-gray-300 focus:border-[#6941c6] opacity-70"
                  type="text"
                  required
                  autoComplete="off"
                  defaultValue="(Boş Proje)"
                />
                <label
                  className="absolute top-2 left-4 text-lg opacity-70"
                  htmlFor="template"
                >
                  Şablon
                </label>
              </div>
            </div>
            <div className="flex justify-end gap-6">
              <button className="w-[85px] h-[37px] border bg-[#6941C6] text-white rounded-md text-sm  hover:opacity-80">
                Oluştur
              </button>
              <button
                onClick={fromClose}
                className="w-[68px] h-[35px] border border-gray-300 rounded text-sm text-gray-500 shadow hover:bg-gray-100 "
              >
                İptal
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CreateProjectForm;
