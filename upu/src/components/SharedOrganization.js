import { AppBar, Dialog, Slide } from "@mui/material";
import React from "react";
import { GrClose } from "react-icons/gr";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SharedOrganization = ({ sharedOrganizationOpen, sharedClose, userData }) => {
  const sharedInfo = [
    {
      color: "#0a966f",
      organizationImage: "M",
      organizationName: "M. Organizasyonu",
      projectImage: "M",
      projectName: "M. Projesi",
    },
    {
      color: "#0a966f",
      organizationImage: "M",
      organizationName: "M. Organizasyonu",
      projectImage: "M",
      projectName: "M. Projesi",
    },
    {
      color: "#0a966f",
      organizationImage: "M",
      organizationName: "M. Organizasyonu",
      projectImage: "M",
      projectName: "M. Projesi",
    },
  ];

  return (
    <div>
      <Dialog
        fullScreen
        open={sharedOrganizationOpen}
        onClose={sharedClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            backgroundColor: "#fff",
            boxShadow: "none",
            border: "1px solid #00000020",
            color: "#000",
            height: "70px",
          }}
        >
          <div className="w-full h-full flex items-center justify-between px-8">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">Üye</span>
              <span className="text-[15px] text-gray-700">
                {userData.userName}
              </span>
            </div>
            <button onClick={sharedClose}>
              <GrClose className="text-2xl" />
            </button>
          </div>
        </AppBar>
        <div className="flex justify-center w-full h-full">
          <div className="w-[52%] h-full mt-[70px] flex flex-col gap-14 lg:w-[70%] md:w-[90%] sm:w-full">
            <h1 className="text-[32px] mt-8 font-medium md:text-3xl sm:text-2xl">
              Paylaşılan Organizasyonlar ve Projeler
            </h1>
            <div className="w-full flex flex-col">
              <div className="flex flex-row w-full">
                <div className="border-b border-gray-300 py-3 font-medium text-sm pl-3 w-2/4">
                  Organizasyonlar
                </div>
                <div className="border-b border-gray-300 py-3 font-medium text-sm pl-3 w-2/4">
                  Projeler
                </div>
              </div>
              {sharedInfo.map((info) => (
                <div className="w-full flex flex-row">
                  <div className="w-2/4 flex flex-col">
                    <ul>
                      <li className="flex flex-row gap-2 py-4 pl-4 text-[15px] text-gray-700 border-b border-gray-300/50 hover:bg-gray-50 active:bg-purple-100">
                        <div
                          style={{ backgroundColor: info.color }}
                          className="w-6 h-6 rounded text-xs font-medium text-white flex items-center justify-center"
                        >
                          {info.organizationImage}
                        </div>
                        <span>{info.organizationName}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-2/4 flex flex-col">
                    <ul>
                      <li className="flex flex-row gap-2 py-4 pl-4 text-[15px] text-gray-700 border-b border-gray-300/50 hover:bg-gray-50 active:bg-purple-100">
                        <div
                          style={{ backgroundColor: info.color }}
                          className="w-6 h-6 rounded text-xs font-medium text-white flex items-center justify-center"
                        >
                          {info.projectImage}
                        </div>
                        <span>{info.projectName}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={sharedClose}
              className="py-2 px-[14px] border border-gray-300 text-gray-700 rounded w-max text-sm ml-auto hover:bg-gray-100 shadow"
            >
              Kapat
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default SharedOrganization;
