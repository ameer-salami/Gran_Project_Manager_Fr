export interface ITask {
    id: string;
    content: string;
}

export interface IList {
    id: string;
    title: string;
    tasks: ITask[];
}

export interface IDraggableList {
    index: number;
    list: IList;
}

export interface IDraggableTask {
    index: number;
    task: ITask;
}

export const DragType = {
    LIST : 'LIST',
    TASK : "TASK",
} as const;

export type DragType = typeof DragType[keyof typeof DragType];

