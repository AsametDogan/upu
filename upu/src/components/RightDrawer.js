import React, { useState } from 'react'
import { BsChevronDoubleRight, BsEyeFill, BsFillCaretDownFill } from "react-icons/bs";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { CgArrowsExpandLeft } from "react-icons/cg";
import { useSelector } from 'react-redux';
import AddStatus from './TaskMenu/AddPriority';
import { HiOutlineArrowUp, HiOutlineDotsHorizontal } from 'react-icons/hi';
import { Avatar, Badge, Divider, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { VscCalendar } from "react-icons/vsc";
import { BsTag } from "react-icons/bs";
import { GiPaperClip } from "react-icons/gi";
ChartJS.register(ArcElement, Tooltip, Legend);
function RightDrawer({ openRightDrawer, handleRightDrawerOpen }) {
    const selectedTask = useSelector((state) => state.selectedTask.task);
    //Status Adding menu
    const [anchorAddStatus, setAnchorAddStatus] = useState(null);
    const openAddStatus = Boolean(anchorAddStatus);
    const handleOpenAddStatus = (event) => {
        setAnchorAddStatus(event.currentTarget);
    };
    const handleCloseAddStatus = () => {
        setAnchorAddStatus(null);
    };
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -5,
            top: 0,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 2px',
            width: "10px",
            height: "20px",
            fontSize: "10px"
        },
    }));

    const data = {
        datasets: [
            {
                data: [30, 100 - 30],
                backgroundColor: ["yellow", "white"],
                borderColor: ["yellow"],
                borderWidth: 2
            }
        ]
    };
    return (
        <>
            <div className={`${openRightDrawer ? "w-[400px] sm:w-[90%] border-l shadow-lg" : "w-12"} duration-300 py-4 flex hover:shadow-xl`}>
                <div onClick={handleRightDrawerOpen} className={`cursor-pointer flex justify-center group w-12 ${openRightDrawer ? "hidden" : ""}`}>
                    <TbLayoutSidebarRightExpand className='text-gray-600 group-hover:text-gray-800 text-xl' />
                </div>
                <div className={`${openRightDrawer ? "" : "hidden"}`}>
                    <div className="h-screen">
                        <div className='flex  text-gray-700'>
                            <button onClick={handleRightDrawerOpen} className='text-gray-700 text-xl -translate-x-6 sm:translate-x-1 ' >
                                <BsChevronDoubleRight />
                            </button>
                            <div className='w-[340px] flex justify-evenly'>
                                <button><CgArrowsExpandLeft /></button>
                                <span className='text-gray-400 text-xl'>#{selectedTask?.number || "test"}</span>
                                <button onClick={handleOpenAddStatus}>
                                    <HiOutlineArrowUp />
                                </button>
                                <button>
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <BsEyeFill color="action" />
                                    </StyledBadge>
                                </button>
                                <button>
                                    <HiOutlineDotsHorizontal />
                                </button>
                            </div>
                        </div>
                        <div className='px-5 py-4 flex items-center gap-2'>
                            <div className='flex items-center text-gray-700 px-1 focus:bg-gray-100 rounded cursor-pointer'>
                                <div className="flex items-center h-10 w-10 -translate-y-1 ">
                                    <Pie
                                        options={{
                                            plugins: {
                                                tooltip: {
                                                    enabled: false
                                                }
                                            }
                                        }} data={data} style={{ alignItems: "center", display: "flex" }} />

                                </div>
                                <div><BsFillCaretDownFill className='text-sm' /></div>
                            </div>
                            <span className='text-lg'>{selectedTask.title || "Görev adı"}</span>
                        </div>
                        <div className='text-sm flex flex-col  gap-3 px-8'>
                            {
                                selectedTask.responsibles.map((person, index) => (
                                    <div className='flex gap-2 ' key={index}>
                                        <Avatar sx={{ width: 20, height: 20 }} alt="profile-picture" src={""} />
                                        <span className='text-gray-800'>{person || ""}</span>
                                    </div>
                                ))
                            }
                            <div className='flex justify-around'>
                                <button className="flex gap-1 items-center text-gray-700 hover:text-gray-900"><VscCalendar /><span>Tarih Ekle</span></button>
                                <Divider orientation="vertical" flexItem />
                                <button className="flex gap-1 items-center text-gray-700 hover:text-gray-900"><BsTag /><span>Tarih Ekle</span></button>
                            </div>
                            <div>
                                <TextField
                                    sx={{ width: '100%' }}
                                    color="secondary"
                                    id="task-description"
                                    label="Açıklama"
                                    multiline
                                    rows={3}
                                    defaultValue="Default Value"
                                    variant="standard"
                                />
                            </div>
                            <div className='flex bg-gray-100 rounded px-4 p-1 text-lg text-gray-700 '><GiPaperClip className='cursor-pointer hover:text-gray-900' /></div>

                        </div>


                    </div>
                </div>
            </div>
            <AddStatus openAddStatus={openAddStatus} handleCloseAddStatus={handleCloseAddStatus} anchorAddStatus={anchorAddStatus} />
        </>
    )
}

export default RightDrawer