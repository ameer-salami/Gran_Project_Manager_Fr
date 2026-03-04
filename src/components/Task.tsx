import { Draggable } from '@hello-pangea/dnd';
import type { IDraggableTask } from '../util/GranProjMngrTypes';

const Task = ({ task, index }: IDraggableTask) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`task ${snapshot.isDragging ? 'dragging' : ''}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
