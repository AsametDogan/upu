import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { HiChevronRight } from "react-icons/hi";
import { HiOutlinePencil } from "react-icons/hi";
import { MdMailOutline } from "react-icons/md";
import SharedOrganization from "./SharedOrganization";
import { NavLink } from "react-router-dom";

// accordion

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<HiChevronRight />} {...props} />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const MyProfile = () => {
  const userData = {
    miniPicture: "MG",
    userName: "Mert Adem Gülenç",
    date: "22 Ağu 2020",
    email: "mertademgulenc@gmail.com",
  };

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [sharedOrganizationOpen, setSharedOrganizationOpen] =
    React.useState(false);
  const handleShared = () => {
    setSharedOrganizationOpen(true);
  };
  const sharedClose = () => {
    setSharedOrganizationOpen(false);
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center overflow-y-auto bg-white">
        <div className="w-[60%] sm:w-[95%] flex flex-col items-center">
          <div className="flex flex-row w-full mt-6 gap-5 sm:gap-1 border-b border-solid border-gray-300 pb-14">
            <div className="flex items-center justify-center bg-gray-400 w-40 h-40 sm:w-28 sm:h-28 text-7xl sm:text-5xl sm:leading-3 rounded-full text-white">
              {userData.miniPicture}
            </div>
            <div className="flex flex-col flex-1">
              <div className="w-[100%] h-6 flex items-center justify-between">
                <span className="text-lg sm:text-base text-gray-500">KULLANICI</span>
                <NavLink to="profile_settings/user_profile" className="opacity-70 hover:opacity-95">
                  <HiOutlinePencil className="text-xl" />
                </NavLink>
              </div>
              <div className="flex flex-col gap-4 mt-3">
                <h1 className="text-[40px] sm:text-2xl leading-10 font-medium opacity-90">
                  {userData.userName}
                </h1>
                <div className="flex flex-col gap-3 item-center">
                  <span className="opacity-70 sm:text-sm">
                    Üye olduğu tarih {userData.date}
                  </span>
                  <span className="opacity-90 flex items-center gap-2">
                    <MdMailOutline className="opacity-70" /> {userData.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-8 gap-5 border-b border-solid border-gray-300 pb-14">
            <h3 className="text-xl text-[#181d25]">Haftalık Özet</h3>
            <ul className="grid items-center grid-cols-3 sm:grid-cols-1 mt-4">
              <li className="flex flex-col gap-4 text-base font-normal text-gray-600">
                <span>Yapılacaklar</span>
                <p className="text-sm text-gray-400">Sonuç bulunmadı.</p>
              </li>
              <li className="flex flex-col gap-4 text-base font-normal text-gray-600">
                <span>Tamamlandı</span>
                <p className="text-sm text-gray-400">Sonuç bulunmadı.</p>
              </li>
              <li className="flex flex-col gap-4 text-base font-normal text-gray-600">
                <span>Oluşturuldu</span>
                <p className="text-sm text-gray-400">Sonuç bulunmadı.</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-full mt-8 gap-5 border-b border-solid border-gray-300 pb-8">
            <button
              onClick={handleShared}
              className="py-[6px] px-[14px] w-max rounded text-sm border border-purple-700 text-purple-800 hover:bg-purple-100/40"
            >
              Paylaşılan organizasyonlar ve projeler
            </button>
          </div>
          <div className="flex flex-col w-full mt-6 pb-32">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>Son aktiviteler</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="text-sm flex gap-4 flex-col">
                  <li className="flex flex-col gap-2">
                    <div className="flex gap-2 flex-row">
                      <span className="text-purple-900 hover:underline cursor-pointer">
                        {userData.userName}
                      </span>
                      <span className="text-purple-900 hover:underline cursor-pointer">
                        proje1
                      </span>
                      projesini ekledi
                    </div>
                    <span className="text-xs text-gray-400">2 gün önce</span>
                  </li>
                  <li className="flex flex-col gap-2">
                    <div className="flex gap-2 flex-row">
                      <span className="text-purple-900 hover:underline cursor-pointer">
                        {userData.userName}
                      </span>
                      <span className="text-purple-900 hover:underline cursor-pointer">
                        test
                      </span>
                      görevini ekledi
                    </div>
                    <span className="text-xs text-gray-400">2 gün önce</span>
                  </li>
                  <li className="flex flex-col gap-2">
                    <div className="flex gap-2 flex-row">
                      <span className="text-purple-900 hover:underline cursor-pointer">
                        {userData.userName}
                      </span>
                      <span className="text-purple-900 hover:underline cursor-pointer">
                        4568
                      </span>
                      görevini sildi
                    </div>
                    <span className="text-xs text-gray-400">2 gün önce</span>
                  </li>
                  <li className="flex flex-col gap-2">
                    <div className="flex gap-2 flex-row">
                      <span className="text-purple-900 hover:underline cursor-pointer">
                        {userData.userName}
                      </span>
                      <span className="text-purple-900 hover:underline cursor-pointer">
                        proje2
                      </span>
                      projesini ekledi
                    </div>
                    <span className="text-xs text-gray-400">2 gün önce</span>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <SharedOrganization
        sharedOrganizationOpen={sharedOrganizationOpen}
        sharedClose={sharedClose}
        userData={userData}
      />
    </>
  );
};

export default MyProfile;
