export interface TodoItem {
  userId: string
  todoId: string
  name: string
  dueDate: string  
  createdAt: string
  done: boolean
  attachmentUrl?: string
}
