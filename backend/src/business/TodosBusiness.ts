import { TodoItem } from '../models/TodoItem'
import { TodosDao } from '../dao/TodosDao'
import { createLogger } from '../utils/logger'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import * as uuid from 'uuid'
import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'

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

/**
 * Create a TODO
 * @param newTodoRequest properties for this new TODO
 * @param userId id of the todo's owner
 */
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

/**
 * Remove a TODO by its id
 * @param todoId id of the todo to delete
 * @param userId id of the todo's owner
 */
export async function deleteTodo(todoId: string, userId: string) {
    return await todoDao.deleteTodo(todoId, userId)
}


/**
 * Update a TODO by its id
 * @param todoId id of the todo to update
 * @param userId id of the todo's owner
 * @param updatedProperties new content for this TODO
 */
export async function updateTodo(todoId: string, userId: string, updatedProperties: UpdateTodoRequest) {
    return await todoDao.updateTodo(todoId, userId, updatedProperties)
}