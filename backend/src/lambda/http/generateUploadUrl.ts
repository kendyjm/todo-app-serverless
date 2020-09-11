import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import { createLogger } from '../../utils/logger'

import { getSignedUrl, updateAttachmentUrl } from '../../business/TodosBusiness'
import { getUserId } from '../utils'

const logger = createLogger('generate-upload-url-todo')


export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  logger.debug("Processing generateUploadUrl event", {event})
  const todoId = event.pathParameters.todoId

  // TODO: Return a presigned URL to upload a file for a TODO item with the provided id
  if (!todoId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'todoId parameter is required' })
    }
  }

  const userId = getUserId(event)
  logger.info("Getting signed URL for todo", {todoId, userId})

  const signedUrl: string = await getSignedUrl(todoId)
  logger.info("Got signed URL for todo", {signedUrl})

  await updateAttachmentUrl(signedUrl, todoId, userId)

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },    
    body: JSON.stringify({
      uploadUrl: signedUrl
    })
  }
}

