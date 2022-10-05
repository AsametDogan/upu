import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import KanbanCard from "./KanbanCard";
import { HiOutlineDotsHorizontal, HiOutlinePlus } from "react-icons/hi";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function KanbanBoard({ board, index }) {
  const processes = [
    {
      title: "İş Adı",
      startDate: "07.09.2022",
      deadline: "17.09.2022",
      responsibles: ["Sorumlu kişi1", "Sorumlu kişi2"],
      labels: ["etiket1", "etiket2"],
      description: "burası açıklama alanı",
    },
    {
      title: "İş Adı-1",
      startDate: "07.09.2022-1",
      deadline: "17.09.2022-1",
      responsibles: ["Sorumlu kişi1-1", "Sorumlu kişi2-1"],
      labels: ["etiket1-1", "etiket2-1"],
      description: "burası açıklama alanı-1",
    },
    {
      title: "İş Adı-1",
      startDate: "07.09.2022-1",
      deadline: "17.09.2022-1",
      responsibles: ["Sorumlu kişi1-1", "Sorumlu kişi2-1"],
      labels: ["etiket1-1", "etiket2-1"],
      description: "burası açıklama alanı-1",
    },
  ];
  const data = {
    datasets: [
      {
        data: [board?.ratio, 100 - board?.ratio],
        backgroundColor: [board.color, "white"],
        borderColor: [board.color],
        borderWidth: 1
      }
    ]
  };
  const [addingTaskInput, setAddingTaskInput] = useState(false)
  const handleOpenAddingTaskInput = () => {
    setAddingTaskInput(!addingTaskInput)
  }
  return (
    <Draggable
      draggableId={board?.boardTitle + index}
      index={index}
      key={"a" + index}
    >
      {(provided) => (
        <div
          className="mb-4 border w-96 min-w-96 rounded max-w-sm shadow-sm hover:shadow-xl"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="border-b w-full grid grid-cols-3 px-4 py-4 content-center text-gray-700">
            <span className="col-span-2 gap-2 flex items-center">
              <div className="flex  -translate-y-1 items-center">
                <Pie
                  options={{
                    plugins: {
                      tooltip: {
                        enabled: false
                      }
                    }
                  }} data={data} width={30} height={30} />
              </div>

              <span className="text-base">
                {`${board?.boardTitle || "Tablo Adı"}`}
              </span>

              <span className="bg-gray-200 rounded-full px-2.5 py-1 text-sm">{`${processes.length || 0}`}</span>
            </span>

            <div className="justify-self-end text-gray-400 cursor-pointer p-2">
              <HiOutlineDotsHorizontal className="h-5 w-5" />
            </div>
          </div>
          <Droppable type="card" droppableId={board.boardTitle + Math.random()}>
            {(provided, snapshot) => (
              <div
                className="w-full bg-gray-100 grid gap-2 p-2 "
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {processes.map((process, index) => (
                  <KanbanCard process={process} key={index} index={index} />
                ))}
                {provided.placeholder}
                <div className="flex items-center p-2">
                  {
                    addingTaskInput ? (
                      <div className="flex w-full gap-6">
                        <input type="text" id="task_name" className=" border border-gray-300 text-gray-800 text-sm rounded focus:ring-[#6941c6] focus:border-[#6941c6] block w-full p-2.5" placeholder="Görev Adı"></input>
                        <button onClick={handleOpenAddingTaskInput} className="border-2 border-[#6941c6] rounded hover:bg-[#855ee1] hover:text-white duration-150 px-3 text-sm bg-white text-gray-800">Ekle</button>
                      </div>
                    ) : (
                      <button onClick={handleOpenAddingTaskInput} className="flex items-center gap-2 w-full text-gray-600 hover:text-gray-800">
                        <HiOutlinePlus />
                        <span className="text-sm">Görevler Ekle</span>
                      </button>
                    )
                  }

                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default KanbanBoard;
