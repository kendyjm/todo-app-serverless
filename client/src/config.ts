// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'vuubvq4uvc'
const region = 'eu-west-3'
export const apiEndpoint = `https://${apiId}.execute-api.${region}.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-ut6kmzhz.eu.auth0.com',            // Auth0 domain
  clientId: 'XwbiAcrbUeQO8Y6LKga3PUHd8abSYa6c',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
