import React, { useState } from "react";
import KanbanBoard from "./KanbanBoard";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { HiOutlinePlus } from "react-icons/hi";
import AddStatusModal from "../AddStatusModal";

function Kanban() {
  const boards = [
    {
      boardTitle: "Yapılacak",
      ratio: "0",
      color:"#bdbdbd",
    },
    {
      boardTitle: "Devam Etmekte",
      ratio: "10",
      color:"#74c81f",
    },
    {
      boardTitle: "Kontrol Edilecek",
      ratio: "70",
      color:"#fbca03",
    },
    {
      boardTitle: "Tamamlandı",
      ratio: "100",
      color:"#36a816",
    },
  ];

  const dragEndKanban = (result) => {
    const { destination /*, source, draggableId, type */ } = result;

    if (!destination) {
      return;
    }
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <DragDropContext onDragEnd={dragEndKanban}>
        <Droppable type="board" droppableId="App" direction="horizontal">
          {(provided) => (
            <div
              className="h-full w-full gap-5 relative pl-7 flex overflow-x-scroll"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {boards.map((board, index) => (
                <div className="w-96 min-w-96 rounded">
                  {" "}
                  <KanbanBoard key={index} index={index} board={board} />{" "}
                </div>
              ))}
              {provided.placeholder}
              <div className="opacity-60 mt-4 ml-3">
                <button
                  onClick={openModal}
                  className="w-28 flex flex-row items-center gap-2 "
                >
                  <HiOutlinePlus className="text-lg" />
                  Durum ekle
                </button>
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <AddStatusModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
}

export default Kanban;
