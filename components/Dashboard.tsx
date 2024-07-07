import React, { useCallback } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

const Dashboard = () => {
  const onDragEnd = useCallback((result: DropResult) => {
    console.log(result);
  }, []);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" type="COLUMN" direction="horizontal">
        {(Provider, snapshot) => (
          <ul
            ref={Provider.innerRef}
            {...Provider.droppableProps}
            className="border border-red-400"
          >
            Columns
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Dashboard;
