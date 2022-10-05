import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { HiChevronRight } from "react-icons/hi";
import { HiOutlinePencil } from "react-icons/hi";
import { VscQuestion } from "react-icons/vsc";
import { FiPaperclip } from "react-icons/fi";
import { NavLink} from "react-router-dom";

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

const Overwiew = () => {
  const projectData =
  {
    miniPicture: "P",
    projectName: "proje 1",
    organizationName: "M. Organizasyonu",
    date: "22 Ağu 2020",
  }

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center overflow-y-auto bg-white">
        <div className="w-[60%] sm:w-[90%] flex flex-col items-center">
          <div className="flex flex-row w-full mt-6 gap-5 border-b border-solid border-gray-300 pb-14">
            <div className="flex items-center justify-center bg-purple-800 w-40 h-40 sm:w-32 sm:h-32 text-6xl text-white rounded-md">
              {projectData.miniPicture}
            </div>
            <div className="flex flex-col flex-1">
              <div className="w-[100%] h-6 flex items-center justify-between">
                <span className="text-lg text-gray-500">PROJE</span>
                <NavLink
                  to="settings/profile"
                  className="opacity-70 hover:opacity-95"
                >
                  <HiOutlinePencil className="text-xl" />
                </NavLink>
              </div>
              <div className="flex flex-col gap-4 mt-3">
                <h1 className="text-[40px] sm:text-4xl leading-10 font-medium opacity-90">
                  {projectData.projectName}
                </h1>
                <div className="flex flex-row gap-6 item-center">
                  <p className="hover:underline cursor-pointer text-purple-900">
                    {projectData.organizationName}
                  </p>
                  <span className="opacity-70 sm:text-sm">
                    Oluşturulduğu tarih {projectData.date}
                  </span>
                </div>
                <div className="w-full h-7 bg-gray-100 flex flex-row items-center px-3 gap-4 rounded">
                  <button className="opacity-70 hover:opacity-95">
                    <FiPaperclip className="opacity-80" />
                  </button>
                  <button className="opacity-80 hover:opacity-95">
                    <VscQuestion className="text-lg opacity-80" />
                  </button>
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
          <div className="flex flex-col w-full mt-8 border-b border-solid border-gray-300 pb-32">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Son aktiviteler</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="text-sm flex gap-4 flex-col">
                  <li className="flex flex-col gap-2">
                    <div className="flex gap-2 flex-row">
                      <span className="text-purple-900 hover:underline cursor-pointer">
                        Mert Adem Gülenç
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
                        Mert Adem Gülenç
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
                        Mert Adem Gülenç
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
                        Mert Adem Gülenç
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
    </>
  );
};

export default Overwiew;
