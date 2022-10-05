import React, { useState } from "react";
import { BiCircle, BiListPlus, BiPlus } from "react-icons/bi";
import { HiOutlineArrowUp } from "react-icons/hi";
import { RiArrowRightSFill, RiArrowDownSFill } from "react-icons/ri";
import { BsPerson, BsTag } from "react-icons/bs";
import { VscCalendar } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSelectedTask } from "../../Stores/SelectedTask";
import { Draggable, Droppable } from "react-beautiful-dnd";
import AddLabel from "../TaskMenu/AddLabel";
import AddDate from "../TaskMenu/AddDate";
import AddStatusModal from "../AddStatusModal";

function TreeCard({ task, index }) {
  const dispatch = useDispatch();
  const selectedTask = useSelector((state) => state.selectedTask.task);
  const [openChild, setOpenChild] = useState(false);

  //Label adding menu
  const [anchorAddLabel, setAnchorAddLabel] = useState(null);
  const openAddLabel = Boolean(anchorAddLabel);
  const handleOpenAddLabel = (event) => {
    setAnchorAddLabel(event.currentTarget);
  };
  const handleCloseAddLabel = () => {
    setAnchorAddLabel(null);
  };

  //Status Adding menu
  const [anchorAddStatus, setAnchorAddStatus] = useState(null);
  const openAddStatus = Boolean(anchorAddStatus);
  const handleOpenAddStatus = (event) => {
    setAnchorAddStatus(event.currentTarget);
  };
  const handleCloseAddStatus = () => {
    setAnchorAddStatus(null);
  };

  // Date adding menu

  const [anchorAddDate, setAnchorAddDate] = useState(null);
  const openAddDate = Boolean(anchorAddDate);
  const handleOpenAddDate = (event) => {
    setAnchorAddDate(event.currentTarget);
  };
  const handleCloseAddDate = () => {
    setAnchorAddDate(null);
  };

  return (
    <Draggable draggableId={task.title + index} index={index} key={"a" + index}>
      {(provided) => (
        <div
          className="w-full"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div
            onClick={() => dispatch(setSelectedTask(task))}
            className="px-2 flex items-center group gap-2 cursor-pointer "
          >
            <div
              className={`flex gap-2 opacity-0 text-gray-500 duration-150 group-hover:opacity-100 ${selectedTask === task ? "opacity-100" : ""
                }`}
            >
              <div className="hover:opacity-95">
                <BiCircle />
              </div>
              <div onClick={handleOpenAddStatus}>
                <HiOutlineArrowUp />
              </div>
            </div>
            <div
              className={`flex w-full justify-between border-b border-gray-200 duration-75 group-hover:border-gray-300 py-1 px-2 ${selectedTask === task ? "bg-gray-100 border-gray-400/40" : ""
                }`}
            >
              <div
                style={{ paddingLeft: task.age * 20 }}
                className={`flex items-center gap-2 pr-0`}
              >
                <div
                  onClick={() => {
                    setOpenChild(!openChild);
                  }}
                >
                  {task?.subTasks?.length > 1 ? (
                    openChild ? (
                      <RiArrowDownSFill />
                    ) : (
                      <RiArrowRightSFill />
                    )
                  ) : (
                    <div className="w-4g"></div>
                  )}
                </div>
                <div>
                  <span className="tracking-tight font-light text-sm">{`${task?.title || "Task Title"
                    }`}</span>
                </div>
              </div>

              <div
                className={`flex items-center opacity-0 duration-150 group-hover:opacity-100 gap-10 sm:gap-2 text-gray-500 ${selectedTask === task ? "opacity-100" : ""
                  }`}
              >
                <div onClick={handleOpenAddLabel}>
                  <BsTag />
                </div>
                <div onClick={handleOpenAddDate}>
                  <VscCalendar />
                </div>
                <div>
                  <BsPerson />
                </div>
              </div>
            </div>
            <div
              className={`flex gap-2 opacity-0 duration-150 group-hover:opacity-100 text-gray-500 ${selectedTask === task ? "opacity-100" : ""
                }`}
            >
              <div>
                <BiListPlus className="h-5 w-5" />
              </div>
              <div>
                <BiPlus className="h-5 w-5" />
              </div>
            </div>
          </div>
          <Droppable type="child" droppableId={task.title + Math.random()}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {task?.subTasks?.length > 1 && openChild ? (
                  task.subTasks.map((subtask, index) => (
                    <div className="">
                      <TreeCard key={index} index={index} task={subtask} />
                    </div>
                  ))
                ) : (
                  <></>
                )}
                <>
                  {provided.placeholder}
                </>

              </div>
            )}
          </Droppable>
          <AddLabel openAddLabel={openAddLabel} handleCloseAddLabel={handleCloseAddLabel} anchorAddLabel={anchorAddLabel} />
          <AddStatusModal openAddStatus={openAddStatus} handleCloseAddStatus={handleCloseAddStatus} anchorAddStatus={anchorAddStatus} />
          <AddDate anchorAddDate={anchorAddDate} handleCloseAddDate={handleCloseAddDate} openAddDate={openAddDate} />
        </div>
      )}
    </Draggable>
  );
}

export default TreeCard;
