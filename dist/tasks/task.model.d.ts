export interface Task {
    id: string;
    title: string;
    description: string;
    status: any;
}
export declare enum TaskStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE"
}