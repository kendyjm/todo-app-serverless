import { TodoItem } from '../models/TodoItem'
import { TodosDao } from '../dao/TodosDao'
import { createLogger } from '../utils/logger'

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
