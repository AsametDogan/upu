import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { HiOutlineDotsHorizontal } from "react-icons/hi";
function KanbanCard({ process, index }) {
  return (
    <Draggable
      draggableId={process.title + index}
      index={index}
      key={"a" + index}
    >
      {(provided) => (
        <div
          className="border rounded p-2 hover:shadow-lg grid gap-4 bg-white text-sm "
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="grid items-center grid-cols-2  text-gray-800 p-1">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 rounded-[100%] accent-purple-500"
                //checkbox full rounded
              />

              <span class="ml-2 text-sm">{`${
                process?.title || "İş Adı"
              }`}</span>
            </div>
            <div className="justify-self-end text-gray-400 cursor-pointer p-2">
              <HiOutlineDotsHorizontal />
            </div>
          </div>
          <div className={`flex gap-2  px-2.5 p-2`}></div>
        </div>
      )}
    </Draggable>
  );
}

export default KanbanCard;
