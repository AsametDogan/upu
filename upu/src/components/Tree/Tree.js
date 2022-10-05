import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TreeCard from "./TreeCard";

export default function Tree({ processes }) {

    const dragEndTree = (result) => {
        // const { source, draggableId, type } = result;
    }

    return (
        <DragDropContext onDragEnd={dragEndTree}>
            <Droppable type='main' droppableId="Tree" direction="horizontal">
                {
                    (provided) => (
                        <div className='flex flex-col items-center'
                            
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {
                                processes.map((task, index) => (
                                    <div className='w-[65%] sm:w-[95%] md:w-[85%] lg:w-[75%]'>
                                        <TreeCard index={index} key={index} task={task} />
                                    </div>

                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )
                }

            </Droppable>
        </DragDropContext >
    )
}


