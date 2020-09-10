import { TodoItem } from '../models/TodoItem'
import { TodosDao } from '../dao/TodosDao'
import { createLogger } from '../utils/logger'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import * as uuid from 'uuid'

const logger = createLogger('todo-business')
const todoDao = new TodosDao()

/**
 * Get all the TODOs of a user
 * @param userId owner of the todos
 * @returns all the TODOs of the corresponding user
 */
export async function getTodos(userId: string): Promise<TodoItem[]> {
    return await todoDao.getTodos(userId)
}

export async function createTodo(newTodoRequest: CreateTodoRequest, userId: string): Promise<TodoItem> {
    const todoId = uuid.v4()
    logger.info('Create TODO with generated uuid', {todoId})
  
    const newTodoItem:TodoItem = {
        userId,
        todoId,
        createdAt: new Date().toISOString(),
        ...newTodoRequest,
        done: false,
      }

      
    return await todoDao.createTodo(newTodoItem)
}
