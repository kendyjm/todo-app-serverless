import { CreateTodoRequest } from "../requests/CreateTodoRequest";

export interface TodoItem extends CreateTodoRequest {
  userId: string
  todoId: string
  createdAt: string
  done: boolean
  attachmentUrl?: string
}
